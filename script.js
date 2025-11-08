// script.js - Interactividad básica para la landing page

document.addEventListener('DOMContentLoaded', function() {
  // Scroll suave para navegación
  document.querySelectorAll('nav ul li a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // CTA scroll
  document.querySelectorAll('.cta').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      const href = btn.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
