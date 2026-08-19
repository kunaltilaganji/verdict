/* VERDICT project page — small vanilla-JS helpers (no build step, no CDN JS deps). */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile navbar burger ---------- */
  document.querySelectorAll('.navbar-burger').forEach(function (burger) {
    burger.addEventListener('click', function () {
      var target = document.getElementById(burger.dataset.target);
      burger.classList.toggle('is-active');
      if (target) target.classList.toggle('is-active');
    });
  });

  /* Close the mobile menu after tapping a link. */
  document.querySelectorAll('#navbarMenu .navbar-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var burger = document.querySelector('.navbar-burger');
      var menu = document.getElementById('navbarMenu');
      if (burger) burger.classList.remove('is-active');
      if (menu) menu.classList.remove('is-active');
    });
  });

  /* ---------- Carousels ---------- */
  document.querySelectorAll('.carousel').forEach(function (carousel) {
    var slides = carousel.querySelectorAll('.carousel-slide');
    var dots = carousel.querySelectorAll('.carousel-dot');
    var prev = carousel.querySelector('.carousel-prev');
    var next = carousel.querySelector('.carousel-next');
    if (!slides.length) return;

    var index = 0;

    function show(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('is-active', k === index); });
      dots.forEach(function (d, k) { d.classList.toggle('is-active', k === index); });
    }

    if (prev) prev.addEventListener('click', function () { show(index - 1); });
    if (next) next.addEventListener('click', function () { show(index + 1); });
    dots.forEach(function (dot, k) {
      dot.addEventListener('click', function () { show(k); });
    });

    /* Arrow keys when the carousel is in view and focused. */
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { show(index - 1); e.preventDefault(); }
      if (e.key === 'ArrowRight') { show(index + 1); e.preventDefault(); }
    });

    show(0);
  });

  /* ---------- Prompt tabs ---------- */
  document.querySelectorAll('.prompt-tabs').forEach(function (tabs) {
    var container = tabs.parentElement;
    tabs.querySelectorAll('.prompt-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.querySelectorAll('.prompt-tab').forEach(function (t) {
          t.classList.remove('is-active');
        });
        container.querySelectorAll('.prompt-panel').forEach(function (p) {
          p.classList.remove('is-active');
        });
        tab.classList.add('is-active');
        var panel = container.querySelector('#' + tab.dataset.panel);
        if (panel) panel.classList.add('is-active');
      });
    });
  });

  /* ---------- Copy BibTeX ---------- */
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pre = document.getElementById(btn.dataset.target);
      if (!pre) return;
      navigator.clipboard.writeText(pre.innerText.trim()).then(function () {
        var original = btn.innerHTML;
        btn.innerHTML = 'Copied';
        setTimeout(function () { btn.innerHTML = original; }, 1600);
      });
    });
  });

});
