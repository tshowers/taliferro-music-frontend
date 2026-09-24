(function () {
  var root = document.documentElement;
  var savedTheme = localStorage.getItem('tm-theme');
  var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-tm-theme', savedTheme || (systemDark ? 'dark' : 'light'));

  var trigger = document.querySelector('[data-platform-menu-open]');
  var overlay = document.querySelector('[data-platform-menu-overlay]');
  var panel = document.querySelector('[data-platform-menu-panel]');
  if (!trigger || !overlay || !panel) return;

  function setOpen(open) {
    trigger.setAttribute('aria-expanded', String(open));
    trigger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    trigger.querySelector('.platform-menu-trigger__label').textContent = open ? 'Close' : 'Menu';
    panel.classList.toggle('platform-menu-panel--open', open);
    overlay.classList.toggle('platform-menu-overlay--open', open);
    panel.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  trigger.addEventListener('click', function () { setOpen(trigger.getAttribute('aria-expanded') !== 'true'); });
  overlay.addEventListener('click', function () { setOpen(false); });
  panel.querySelectorAll('a').forEach(function (link) { link.addEventListener('click', function () { setOpen(false); }); });
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape') setOpen(false); });
})();
