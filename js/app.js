document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const topBtn = document.querySelector('.top-btn');
  const reveals = document.querySelectorAll('.reveal');

  // Loader
  window.setTimeout(() => {
    if (loader) loader.classList.add('hide');
  }, 500);

  // Mobile menu
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // Reveal animation
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => revealObserver.observe(el));

  // Top button
  window.addEventListener('scroll', () => {
    if (!topBtn) return;
    if (window.scrollY > 500) {
      topBtn.classList.add('show');
    } else {
      topBtn.classList.remove('show');
    }
  });

  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
