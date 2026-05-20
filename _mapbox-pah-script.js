/**
 * Place-a-Home — Mapbox GL JS implementation
 * Drop this in as a replacement for the Leaflet + Census/Photon block.
 * Requires MAPBOX_TOKEN to be set before this script runs.
 *
 * Used in: home-detail.html (window._currentHome) and place-a-home.html (window._pahHome)
 */

(function () {
  /* ── Determine context (detail page vs standalone) ────────────────────── */
  var isDetailPage = typeof window._currentHome !== 'undefined';
  var home = isDetailPage ? window._currentHome : window._pahHome;
  if (!home) return;

  var MAPBOX_TOKEN = window.MAPBOX_TOKEN || '';
  if (!MAPBOX_TOKEN) { console.warn('Place-a-Home: No Mapbox token set.'); return; }

  mapboxgl.accessToken = MAPBOX_TOKEN;

  /* ── IDs (detail page uses pah- prefix, standalone uses addr-) ─────────── */
  var IDS = isDetailPage ? {
    input:       'pah-addr-input',
    suggestions: 'pah-suggestions',
    status:      'pah-status',
    map:         'pah-map',
    placeholder: 'pah-placeholder',
    specName:    'pah-spec-name',
    specType:    'pah-spec-type',
    specDims:    'pah-spec-dims',
    specSqft:    'pah-spec-sqft',
    quoteBtn:    'pah-quote-btn',
    rotCCW:      null,   // handled by pahRotate() on detail page
    rotReset:    null,
    rotCW:       null,
    mapLocLbl:   null,
  } : {
    input:       'addr-input',
    suggestions: 'addr-suggestions',
    status:      'addr-status',
    map:         'map',
    placeholder: 'map-placeholder',
    specName:    null,
    specType:    null,
    specDims:    null,
    specSqft:    null,
    quoteBtn:    'quote-btn',
    mapLocLbl:   'map-location-lbl',
  };

  /* ── Helpers ────────────────────────────────────────────────────────────── */
  function $(id) { return id ? document.getElementById(id) : null; }

  function parseDims(h) {
    if (h.dimensions) {
      var m = h.dimensions.match(/(\d+)'?\s*[x×]\s*(\d+)'?/i);
      if (m) return { w: parseInt(m[1]), l: parseInt(m[2]) };
    }
    return h.type === 'Double-Wide'
      ? { w: 28, l: Math.round(h.sqft / 28) }
      : { w: 14, l: Math.round(h.sqft / 14) };
  }

  function feetToMeters(ft) { return ft * 0.3048; }

  /* ── Spec panel ─────────────────────────────────────────────────────────── */
  if ($(IDS.specName)) $(IDS.specName).textContent = home.name;
  if ($(IDS.specType)) $(IDS.specType).textContent = home.type;
  if ($(IDS.specDims)) $(IDS.specDims).textContent = home.dimensions || '—';
  if ($(IDS.specSqft)) $(IDS.specSqft).textContent = home.sqft ? home.sqft.toLocaleString() + ' sq ft' : '—';
  if ($(IDS.quoteBtn)) $(IDS.quoteBtn).href = (isDetailPage ? '' : '../') + 'pages/contact.html?home=' + home.slug;

  /* ── State ──────────────────────────────────────────────────────────────── */
  var map = null;
  var dims = parseDims(home);
  var centerLng = null, centerLat = null;
  var rotationDeg = 0;
  var footprintId = 'home-footprint';
  var footprintOutlineId = 'home-footprint-outline';
  var labelId = 'home-label';
  var isDragging = false;
  var dragStart = null;

  /* ── Map init ───────────────────────────────────────────────────────────── */
  function initMap(lat, lng) {
    if ($(IDS.placeholder)) $(IDS.placeholder).style.display = 'none';
    if ($(IDS.map)) $(IDS.map).style.display = 'block';

    if (!map) {
      map = new mapboxgl.Map({
        container: IDS.map,
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        center: [lng, lat],
        zoom: 18,
        attributionControl: false
      });
      map.addControl(new mapboxgl.AttributionControl({ compact: true }));
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.on('load', function () {
        addFootprintLayers();
        centerLat = lat; centerLng = lng;
        updateFootprint();
        attachDrag();
      });
    } else {
      map.flyTo({ center: [lng, lat], zoom: 18, speed: 1.4 });
      centerLat = lat; centerLng = lng;
      rotationDeg = 0;
      updateFootprint();
    }
  }

  /* ── Footprint geometry ─────────────────────────────────────────────────── */
  function buildFootprintGeoJSON(lat, lng, wFt, lFt, angleDeg) {
    var wM = feetToMeters(wFt);
    var lM = feetToMeters(lFt);
    var rad = (angleDeg * Math.PI) / 180;
    // Earth radius approx for small displacements
    var R = 6378137;
    var dLatHalf = (lM / 2) / R * (180 / Math.PI);
    var dLngHalf = (wM / 2) / (R * Math.cos(lat * Math.PI / 180)) * (180 / Math.PI);

    // Corners before rotation (relative to center)
    var corners = [
      [-dLngHalf, -dLatHalf],
      [ dLngHalf, -dLatHalf],
      [ dLngHalf,  dLatHalf],
      [-dLngHalf,  dLatHalf],
      [-dLngHalf, -dLatHalf]  // close
    ];

    var rotated = corners.map(function (c) {
      var dx = c[0], dy = c[1];
      var rx = dx * Math.cos(rad) - dy * Math.sin(rad);
      var ry = dx * Math.sin(rad) + dy * Math.cos(rad);
      return [lng + rx, lat + ry];
    });

    return {
      type: 'Feature',
      geometry: { type: 'Polygon', coordinates: [rotated] }
    };
  }

  function addFootprintLayers() {
    var geojson = buildFootprintGeoJSON(0, 0, dims.w, dims.l, 0);

    map.addSource(footprintId, { type: 'geojson', data: geojson });

    // Fill
    map.addLayer({
      id: footprintId,
      type: 'fill',
      source: footprintId,
      paint: {
        'fill-color': '#c9920a',
        'fill-opacity': 0.4
      }
    });

    // Outline
    map.addLayer({
      id: footprintOutlineId,
      type: 'line',
      source: footprintId,
      paint: {
        'line-color': '#1a2744',
        'line-width': 2.5
      }
    });

    // Label
    map.addSource(labelId, {
      type: 'geojson',
      data: { type: 'Feature', geometry: { type: 'Point', coordinates: [0, 0] } }
    });
    map.addLayer({
      id: labelId,
      type: 'symbol',
      source: labelId,
      layout: {
        'text-field': dims.w + '\' × ' + dims.l + '\'',
        'text-font': ['DIN Offc Pro Bold', 'Arial Unicode MS Bold'],
        'text-size': 13,
        'text-offset': [0, -1.5],
        'text-anchor': 'bottom'
      },
      paint: {
        'text-color': '#ffffff',
        'text-halo-color': '#1a2744',
        'text-halo-width': 2
      }
    });
  }

  function updateFootprint() {
    if (!map || !map.getSource(footprintId)) return;
    var geojson = buildFootprintGeoJSON(centerLat, centerLng, dims.w, dims.l, rotationDeg);
    map.getSource(footprintId).setData(geojson);
    map.getSource(labelId).setData({
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [centerLng, centerLat] }
    });
  }

  /* ── Drag to reposition ─────────────────────────────────────────────────── */
  function attachDrag() {
    var canvas = map.getCanvas();

    canvas.addEventListener('mousedown', function (e) {
      var features = map.queryRenderedFeatures(e.point, { layers: [footprintId] });
      if (!features.length) return;
      isDragging = true;
      dragStart = map.unproject(e.point);
      map.dragPan.disable();
      canvas.style.cursor = 'grabbing';
    });

    canvas.addEventListener('mousemove', function (e) {
      if (!isDragging) {
        var features = map.queryRenderedFeatures(e.point, { layers: [footprintId] });
        canvas.style.cursor = features.length ? 'grab' : '';
        return;
      }
      var current = map.unproject(e.point);
      centerLng += current.lng - dragStart.lng;
      centerLat += current.lat - dragStart.lat;
      dragStart = current;
      updateFootprint();
    });

    function stopDrag() {
      if (!isDragging) return;
      isDragging = false;
      map.dragPan.enable();
      map.getCanvas().style.cursor = '';
    }
    canvas.addEventListener('mouseup', stopDrag);
    canvas.addEventListener('mouseleave', stopDrag);

    // Touch support
    canvas.addEventListener('touchstart', function (e) {
      var features = map.queryRenderedFeatures(
        map.project({ lng: centerLng, lat: centerLat }), { layers: [footprintId] }
      );
      isDragging = true;
      var t = e.touches[0];
      dragStart = map.unproject([t.clientX - canvas.getBoundingClientRect().left, t.clientY - canvas.getBoundingClientRect().top]);
      map.dragPan.disable();
    }, { passive: true });

    canvas.addEventListener('touchmove', function (e) {
      if (!isDragging) return;
      var t = e.touches[0];
      var rect = canvas.getBoundingClientRect();
      var current = map.unproject([t.clientX - rect.left, t.clientY - rect.top]);
      centerLng += current.lng - dragStart.lng;
      centerLat += current.lat - dragStart.lat;
      dragStart = current;
      updateFootprint();
    }, { passive: true });

    canvas.addEventListener('touchend', function () {
      isDragging = false;
      map.dragPan.enable();
    });
  }

  /* ── Rotation (exposed globally for both pages' rotate buttons) ─────────── */
  window.pahRotate = function (delta, reset) {
    if (reset) { rotationDeg = 0; }
    else { rotationDeg = (rotationDeg + delta + 360) % 360; }
    updateFootprint();
  };

  /* ── Mapbox Search JS autocomplete ─────────────────────────────────────── */
  var suggestTimer = null;
  var inputEl = $(IDS.input);
  var suggestEl = $(IDS.suggestions);

  function showSuggestions(items) {
    if (!suggestEl) return;
    suggestEl.innerHTML = '';
    if (!items || !items.length) return;
    items.forEach(function (item) {
      var label = item.place_name || item.matching_place_name || '';
      if (!label) return;
      var div = document.createElement('div');
      div.className = isDetailPage ? 'pah-suggest-item' : 'addr-suggest-item';
      div.innerHTML = '<span class="' + (isDetailPage ? 'pah' : 'addr') + '-suggest-icon">📍</span><span>' + label + '</span>';
      div.addEventListener('mousedown', function (e) {
        e.preventDefault();
        inputEl.value = label;
        suggestEl.innerHTML = '';
        var coords = item.center; // [lng, lat]
        placeOnMap(coords[1], coords[0], label);
      });
      suggestEl.appendChild(div);
    });
  }

  function hideSuggestions() {
    if (suggestEl) { suggestEl.innerHTML = ''; }
  }

  if (inputEl) {
    inputEl.addEventListener('input', function () {
      clearTimeout(suggestTimer);
      var q = inputEl.value.trim();
      if (q.length < 3) { hideSuggestions(); return; }
      suggestTimer = setTimeout(function () {
        // Mapbox Geocoding API — forward geocode with autocomplete
        var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
          + encodeURIComponent(q)
          + '.json?access_token=' + MAPBOX_TOKEN
          + '&autocomplete=true&country=US&language=en&limit=6'
          + '&proximity=-90.5,30.5'; // bias toward Louisiana
        fetch(url)
          .then(function (r) { return r.json(); })
          .then(function (d) { showSuggestions(d.features || []); })
          .catch(function () {});
      }, 250);
    });

    inputEl.addEventListener('blur', function () {
      setTimeout(hideSuggestions, 200);
    });

    inputEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        hideSuggestions();
        doSearch();
      }
    });
  }

  /* ── Search on button click ─────────────────────────────────────────────── */
  function setStatus(msg, ok) {
    var el = $(IDS.status);
    if (!el) return;
    el.textContent = msg;
    el.style.color = ok ? 'var(--text-muted, #888)' : '#c0392b';
  }

  function placeOnMap(lat, lng, label) {
    setStatus('📍 ' + (label || '').split(',').slice(0, 3).join(','), true);
    if ($(IDS.mapLocLbl)) $(IDS.mapLocLbl).textContent = (label || '').split(',').slice(0, 3).join(', ');
    initMap(lat, lng);
  }

  async function doSearch() {
    var addr = inputEl ? inputEl.value.trim() : '';
    if (!addr) return;
    setStatus('Searching…', true);
    var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
      + encodeURIComponent(addr)
      + '.json?access_token=' + MAPBOX_TOKEN
      + '&country=US&language=en&limit=1'
      + '&proximity=-90.5,30.5';
    try {
      var r = await fetch(url);
      var d = await r.json();
      if (d.features && d.features.length) {
        var f = d.features[0];
        placeOnMap(f.center[1], f.center[0], f.place_name);
      } else {
        setStatus('Address not found. Try adding city and state.', false);
      }
    } catch (e) {
      setStatus('Could not reach map service. Please try again.', false);
    }
  }

  // Expose for onclick handlers
  window.pahSearch = doSearch;

  // Wire up standalone page search button if present
  var searchBtn = document.getElementById('addr-search-btn') || document.getElementById('pah-btn-search');
  if (searchBtn) searchBtn.addEventListener('click', doSearch);

})();
