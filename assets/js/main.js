/* ==========================================
   SOCCER CAMP 2026 - Main JavaScript
   ========================================== */

(function () {
  'use strict';

  // ---------- HEADER SCROLL EFFECT ----------
  const header = document.getElementById('header');

  function handleHeaderScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });


  // ---------- MOBILE MENU ----------
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', function () {
      menuBtn.classList.toggle('active');
      mainNav.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuBtn.classList.remove('active');
        mainNav.classList.remove('open');
      });
    });
  }


  // ---------- SCROLL FADE-IN ANIMATION ----------
  var fadeEls = document.querySelectorAll(
    '.section-title, .about-text, .about-highlight, .coach-highlight, ' +
    '.coach-card, .schedule-card, .gk-message, .section-lead, ' +
    '.cta-title, .cta-copy, .insta-grid'
  );

  fadeEls.forEach(function (el) {
    el.classList.add('fade-in');
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeEls.forEach(function (el) {
    observer.observe(el);
  });


  // ---------- SMOOTH SCROLL for anchor links ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;

      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var offset = header.offsetHeight + 12;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();
