// ── Nav scroll shadow ──────────────────────────────────────────────────────
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  });
}

// ── Mobile nav toggle ─────────────────────────────────────────────────────
const toggle = document.querySelector('.nav-mobile-toggle');
const mobileMenu = document.querySelector('.nav-mobile');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Active nav link ───────────────────────────────────────────────────────
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
  const href = a.getAttribute('href');
  if (href && href.includes(currentPage)) a.classList.add('active');
  if (currentPage === 'index.html' && (href === 'index.html' || href === '/')) a.classList.add('active');
});

// ── Hero carousel ─────────────────────────────────────────────────────────
const slides = document.querySelectorAll('.hero-slide');
const dots   = document.querySelectorAll('.hero-dot');
if (slides.length) {
  let idx = 0;
  function showSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    idx = (n + slides.length) % slides.length;
    slides[idx].classList.add('active');
    if (dots[idx]) dots[idx].classList.add('active');
  }
  showSlide(0);
  setInterval(() => showSlide(idx + 1), 5000);
  dots.forEach((d, i) => d.addEventListener('click', () => showSlide(i)));
}

// ── Fade-up on scroll ─────────────────────────────────────────────────────
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }});
}, { threshold: 0.1 });
fadeEls.forEach(el => observer.observe(el));

// ── Announcement Banner ───────────────────────────────────────────────────
(function() {
  try {
    const ann = JSON.parse(localStorage.getItem('smhcAnnouncement') || 'null');
    if (ann && ann.enabled && ann.text) {
      const bar = document.createElement('div');
      bar.id = 'smhc-announcement';
      bar.style.cssText = 'background:var(--gold);color:#fff;text-align:center;padding:10px 40px;font-size:.88rem;font-weight:600;position:relative;z-index:200;';
      bar.innerHTML = ann.text + '<button onclick="this.parentElement.remove()" style="position:absolute;right:16px;top:50%;transform:translateY(-50%);background:none;border:none;color:#fff;font-size:1.1rem;cursor:pointer;opacity:.8;">&times;</button>';
      document.body.insertBefore(bar, document.body.firstChild);
    }
  } catch(e) {}
})();

// ── CRM Lead Submission ───────────────────────────────────────────────────
const CRM_URL = 'https://southern-mhc-crm-production.up.railway.app';

async function submitLeadToCRM(data) {
  try {
    // Use the public (no-auth) endpoint — no login step needed
    const res = await fetch(CRM_URL + '/api/leads/public', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return res.ok;
  } catch(e) {
    console.warn('CRM submission failed:', e);
    return false;
  }
}

// ── Contact form ──────────────────────────────────────────────────────────
const forms = document.querySelectorAll('.contact-form');
forms.forEach(form => {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const success = form.querySelector('.form-success');
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

    // Gather form fields
    const inputs = {};
    form.querySelectorAll('input, select, textarea').forEach(f => {
      if (f.name || f.id || f.placeholder) {
        const key = f.name || f.id || f.placeholder.toLowerCase().replace(/\s+/g, '_');
        inputs[key] = f.value;
      }
    });

    // Build lead object from any of the known form fields
    const getField = (...keys) => {
      for (const k of keys) {
        const v = inputs[k] || form.querySelector(`input[placeholder*="${k}" i], input[id*="${k}" i]`)?.value;
        if (v) return v;
      }
      return '';
    };

    // Pull values intelligently from the form
    const allInputs = [...form.querySelectorAll('input, select, textarea')];
    const vals = allInputs.map(el => ({ label: (el.previousElementSibling?.textContent || el.placeholder || '').toLowerCase(), value: el.value, el }));

    const findVal = (...terms) => {
      for (const t of terms) {
        const found = vals.find(v => v.label.includes(t));
        if (found && found.value) return found.value;
      }
      return '';
    };

    const firstName   = findVal('first');
    const lastName    = findVal('last');
    const phone       = findVal('phone', 'tel');
    const email       = findVal('email');
    const address     = findVal('address', 'property');
    const message     = findVal('message', 'note');
    const homeInterest = findVal('home interest', 'model', 'home') ||
                         (typeof window.currentHomeSlug !== 'undefined' ? window.currentHomeSlug : '');
    const salesperson = findVal('team member', 'salesperson', 'agent');

    const leadData = {
      firstName: firstName || 'Website',
      lastName:  lastName  || 'Lead',
      phone,
      email,
      address,
      notes: [message, address ? 'Property: ' + address : '', homeInterest ? 'Interested in: ' + homeInterest : ''].filter(Boolean).join(' | '),
      homeInterest,
      assignedTo: salesperson || '',
      source: 'Website',
      status: 'new',
    };

    // Attempt CRM submission in background
    submitLeadToCRM(leadData).catch(() => {});

    // Track in localStorage for analytics
    try {
      const submissions = JSON.parse(localStorage.getItem('smhcLeadSubmissions') || '[]');
      submissions.push({ ...leadData, submittedAt: new Date().toISOString() });
      localStorage.setItem('smhcLeadSubmissions', JSON.stringify(submissions.slice(-50)));
    } catch(err) {}

    setTimeout(() => {
      if (success) { success.style.display = 'block'; }
      form.querySelectorAll('input,select,textarea').forEach(f => f.value = '');
      if (btn) { btn.disabled = false; btn.textContent = 'Submit'; }
    }, 900);
  });
});

// ── Monthly payment estimator ─────────────────────────────────────────────
function calcMonthly(price, downPct = 0.10, apr = 0.09, years = 25) {
  const principal = price * (1 - downPct);
  const r = apr / 12;
  const n = years * 12;
  return Math.round(principal * r * Math.pow(1+r, n) / (Math.pow(1+r, n) - 1));
}
window.calcMonthly = calcMonthly;

// ── View Count Tracking ───────────────────────────────────────────────────
function trackHomeView(slug) {
  if (!slug) return;
  try {
    const counts = JSON.parse(localStorage.getItem('smhcViewCounts') || '{}');
    counts[slug] = (counts[slug] || 0) + 1;
    localStorage.setItem('smhcViewCounts', JSON.stringify(counts));
  } catch(e) {}
}
window.trackHomeView = trackHomeView;

// Track current home detail page
(function() {
  const params = new URLSearchParams(window.location.search);
  const homeSlug = params.get('home');
  if (homeSlug && window.location.pathname.includes('home-detail')) {
    trackHomeView(homeSlug);
    window.currentHomeSlug = homeSlug;
  }
})();

// ── Image Quality: fade-in on load ────────────────────────────────────────
(function() {
  function markLoaded(img) {
    img.classList.add('loaded');
  }
  function processImages() {
    document.querySelectorAll('.home-card-trove .card-img, .home-card-img-wrap img').forEach(img => {
      if (img.complete && img.naturalWidth > 0) {
        markLoaded(img);
      } else {
        img.addEventListener('load',  () => markLoaded(img), { once: true });
        img.addEventListener('error', () => {
          // If image fails, show placeholder and mark loaded
          img.src = (typeof BASE_PATH !== 'undefined' ? BASE_PATH : '') + 'images/home-placeholder.jpg';
          img.classList.add('loaded');
        }, { once: true });
      }
    });
  }
  // Run now and again after any dynamic content injection
  processImages();
  const mo = new MutationObserver(processImages);
  mo.observe(document.body, { childList: true, subtree: true });
})();
