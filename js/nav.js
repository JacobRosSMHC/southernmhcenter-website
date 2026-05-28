// Shared nav + footer injector
(function() {
  const path = window.location.pathname;
  const isRoot = path.endsWith('index.html') || path.endsWith('/') || path === '';
  const prefix = isRoot ? '' : '../';
  const page = path.split('/').pop() || 'index.html';

  function active(href) {
    if (page === 'index.html' && href === 'index.html') return ' class="active"';
    if (href !== 'index.html' && page.includes(href.replace('.html',''))) return ' class="active"';
    return '';
  }

  const navHTML = `
<nav class="nav" id="main-nav">
  <div class="nav-inner">
    <a href="${prefix}index.html" class="nav-logo">
      <img src="${prefix}images/smhc-logo.jpg" alt="Southern Mobile Home Center">
      <div class="nav-logo-text">
        <span class="brand-top">Southern</span>
        <span class="brand-bot">Mobile Home Center</span>
      </div>
    </a>
    <div class="nav-links">
      <a href="${prefix}pages/floor-plans.html"${active('floor-plans.html')}>Floor Plans</a>
      <a href="${prefix}pages/land-homes.html"${active('land-homes.html')}>Land &amp; Home</a>
      <a href="${prefix}pages/place-a-home.html"${active('place-a-home.html')} style="color:var(--gold);font-weight:700;">📍 Place a Home</a>
      <a href="${prefix}pages/financing.html"${active('financing.html')}>Financing</a>
      <a href="${prefix}pages/about.html"${active('about.html')}>About</a>
      <a href="${prefix}pages/faq.html"${active('faq.html')}>FAQ</a>
      <a href="${prefix}pages/contact.html"${active('contact.html')}>Contact</a>
    </div>
    <a href="tel:9855205012" class="btn btn-gold btn-sm nav-cta desktop">
      ☎ (985) 520-5012
    </a>
    <button class="nav-mobile-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- Mobile drawer overlay -->
<div class="nav-drawer-overlay" id="nav-overlay"></div>

<!-- Mobile drawer -->
<div class="nav-drawer" id="nav-drawer" aria-hidden="true">
  <div class="nav-drawer-header">
    <div class="nav-drawer-logo">
      <img src="${prefix}images/smhc-logo.jpg" alt="SMHC">
      <div>
        <div class="nav-drawer-brand">Southern MHC</div>
        <div class="nav-drawer-sub">Tickfaw, Louisiana</div>
      </div>
    </div>
    <button class="nav-drawer-close" id="nav-close" aria-label="Close menu">✕</button>
  </div>

  <nav class="nav-drawer-links">
    <a href="${prefix}pages/floor-plans.html"${active('floor-plans.html')}>
      <span class="nav-drawer-icon">🏠</span>
      <span>Floor Plans</span>
    </a>
    <a href="${prefix}pages/land-homes.html"${active('land-homes.html')}>
      <span class="nav-drawer-icon">📦</span>
      <span>Land &amp; Home</span>
    </a>
    <a href="${prefix}pages/place-a-home.html"${active('place-a-home.html')} class="nav-drawer-highlight">
      <span class="nav-drawer-icon">📍</span>
      <span>Place a Home</span>
    </a>
    <a href="${prefix}pages/financing.html"${active('financing.html')}>
      <span class="nav-drawer-icon">💰</span>
      <span>Financing</span>
    </a>
    <a href="${prefix}pages/about.html"${active('about.html')}>
      <span class="nav-drawer-icon">ℹ️</span>
      <span>About Us</span>
    </a>
    <a href="${prefix}pages/faq.html"${active('faq.html')}>
      <span class="nav-drawer-icon">❓</span>
      <span>FAQ</span>
    </a>
    <a href="${prefix}pages/contact.html"${active('contact.html')}>
      <span class="nav-drawer-icon">✉️</span>
      <span>Contact</span>
    </a>
    <a href="${prefix}pages/compare.html"${active('compare.html')}>
      <span class="nav-drawer-icon">⚖️</span>
      <span>Compare Homes</span>
    </a>
  </nav>

  <div class="nav-drawer-footer">
    <a href="tel:9855205012" class="btn btn-gold nav-drawer-cta">
      ☎ &nbsp;(985) 520-5012
    </a>
    <a href="${prefix}pages/prequal.html" class="btn btn-outline nav-drawer-cta">
      Get Pre-Qualified →
    </a>
  </div>
</div>`;

  const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-logo-text">
          <span class="brand-top" style="color:#fff;font-size:1rem;">Southern Mobile Home Center</span>
          <span class="brand-bot">Tickfaw, Louisiana</span>
        </div>
        <p>Affordable manufactured homes at your fingertips. Find, design, and order your next home.</p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook" title="Facebook">f</a>
          <a href="#" aria-label="YouTube" title="YouTube">▶</a>
          <a href="#" aria-label="Instagram" title="Instagram">◈</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Pages</h4>
        <ul>
          <li><a href="${prefix}pages/floor-plans.html">Floor Plans</a></li>
          <li><a href="${prefix}pages/land-homes.html">Land &amp; Home</a></li>
          <li><a href="${prefix}pages/place-a-home.html">Place a Home</a></li>
          <li><a href="${prefix}pages/financing.html">Financing</a></li>
          <li><a href="${prefix}pages/about.html">About</a></li>
          <li><a href="${prefix}pages/contact.html">Contact</a></li>
          <li><a href="${prefix}pages/faq.html">FAQ</a></li>
          <li><a href="${prefix}pages/compare.html">Compare Homes</a></li>
          <li><a href="${prefix}pages/prequal.html">Get Pre-Qualified</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Help</h4>
        <ul>
          <li><a href="${prefix}pages/contact.html">Contact Us</a></li>
          <li><a href="mailto:southernmhcenter@gmail.com">Email Us</a></li>
          <li><a href="tel:9855205012">(985) 520-5012</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <div class="footer-cta">
          <h4>Get Started</h4>
          <p>Find, design, and order your next home in a few clicks.</p>
          <a href="${prefix}pages/prequal.html" class="btn btn-gold btn-sm">Get Pre-Qualified</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} Southern Mobile Home Center · Tickfaw, LA</span>
      <span>50331 US-51, Tickfaw, LA 70466 · <a href="tel:9855205012">(985) 520-5012</a></span>
    </div>
  </div>
</footer>`;

  // ── Inject nav & footer
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.outerHTML = navHTML;
  if (footerEl) footerEl.outerHTML = footerHTML;

  // ── Wire up mobile drawer — runs immediately after injection
  function initDrawer() {
    const toggle  = document.getElementById('nav-toggle');
    const drawer  = document.getElementById('nav-drawer');
    const overlay = document.getElementById('nav-overlay');
    const closeBtn = document.getElementById('nav-close');

    if (!toggle || !drawer) return;

    function openDrawer() {
      drawer.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      toggle.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      toggle.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    }

    toggle.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);

    // Close on any link tap inside drawer
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeDrawer);
    });

    // Close on Escape key
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  // Run immediately (nav is already in DOM at this point)
  initDrawer();

})();

// ── Tawk.to Live Chat ─────────────────────────────────────────────────────
(function(){
  var Tawk_API = Tawk_API || {};
  var Tawk_LoadStart = new Date();
  var s1 = document.createElement('script');
  var s0 = document.getElementsByTagName('script')[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/default/default';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  Tawk_API.customStyle = {
    zIndex: 99,
    visibility: { desktop: { position: 'br', xOffset: 20, yOffset: 20 },
                  mobile:  { position: 'br', xOffset: 10, yOffset: 10 } }
  };
})();
