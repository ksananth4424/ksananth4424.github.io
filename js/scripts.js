// Simple navbar burger + dark-mode toggle (minimal, based on Rahul's scripts)
(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const colorModeToggle = document.querySelector('.color-mode-toggle');
  const bodyEl = document.body;
  const htmlEl = document.documentElement;
  const sun = colorModeToggle ? colorModeToggle.querySelector('.sun') : null;
  const moon = colorModeToggle ? colorModeToggle.querySelector('.moon') : null;

  // Initialize dark mode from localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    bodyEl.classList.add('dark-mode');
    htmlEl.classList.add('dark-mode');
    if (sun) sun.classList.remove('visible');
    if (moon) moon.classList.add('visible');
  } else {
    if (sun) sun.classList.add('visible');
    if (moon) moon.classList.remove('visible');
  }

  // Toggle dark mode
  if (colorModeToggle) {
    colorModeToggle.addEventListener('click', () => {
      bodyEl.classList.toggle('dark-mode');
      htmlEl.classList.toggle('dark-mode');
      if (bodyEl.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        if (sun) sun.classList.remove('visible');
        if (moon) moon.classList.add('visible');
      } else {
        localStorage.setItem('darkMode', 'disabled');
        if (sun) sun.classList.add('visible');
        if (moon) moon.classList.remove('visible');
      }
    });
  }

  // Mobile burger
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('show');
    });
  }

  // Optional hero image: keep hidden unless a source is provided.
  const heroPhoto = document.querySelector('[data-hero-photo]');
  if (heroPhoto) {
    const heroPhotoSource = heroPhoto.getAttribute('data-src');
    if (heroPhotoSource) {
      heroPhoto.src = heroPhotoSource;
      heroPhoto.classList.add('is-visible');
    } else {
      const heroPhotoWrap = document.querySelector('[data-hero-photo-wrap]');
      if (heroPhotoWrap) heroPhotoWrap.style.display = 'none';
    }
  }
})();

// Simple details toggle animation helper (no external libs)
document.addEventListener('click', function (e) {
  if (e.target && e.target.closest('.abstract-toggle')) {
    const details = e.target.closest('details');
    if (!details) return;
    const content = details.querySelector('.research-abstract');
    if (!content) return;
    // Let native toggle happen, then animate via CSS (handled by stylesheet)
    setTimeout(() => {
      // nothing to do; CSS handles the open state
    }, 10);
  }
});
