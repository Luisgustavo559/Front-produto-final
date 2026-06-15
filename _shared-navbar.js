// Shared navbar behavior for Sakura Racing (browser-side)
// Keeps the sidebar open/close consistent across pages.
(function () {
  function toggleNav() {
    const nav = document.getElementById('navbar');
    const btn = document.getElementById('menu-btn');
    if (!nav || !btn) return;
    nav.classList.toggle('open');
    btn.classList.toggle('active');
  }

  function closeNav() {
    const nav = document.getElementById('navbar');
    const btn = document.getElementById('menu-btn');
    if (nav) nav.classList.remove('open');
    if (btn) btn.classList.remove('active');
  }

  // Expose globally (HTML uses inline onclick)
  window.toggleNav = toggleNav;
  window.closeNav = closeNav;
})();

