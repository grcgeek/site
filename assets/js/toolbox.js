// Home "Skills & Tools" strip (layouts/shortcodes/toolbox.html): while the
// strip is on screen and nobody is pointing at it, light one icon at a time
// so the glyphs redraw in their category colour. Stops for reduced motion,
// when the strip is off screen, and while it is hovered or focused.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('[data-tbx]').forEach(function (root) {
    var visible = false, busy = false, last = null, timer = null;
    root.addEventListener('mouseenter', function () { busy = true; clear(); });
    root.addEventListener('mouseleave', function () { busy = false; });
    root.addEventListener('focusin', function () { busy = true; clear(); });
    root.addEventListener('focusout', function () { busy = false; });
    function clear() { if (last) { last.classList.remove('is-lit'); last = null; } }
    function tick() {
      clear();
      if (!visible || busy || document.hidden) return;
      var box = root.getBoundingClientRect();
      var pick = Array.prototype.filter.call(root.querySelectorAll('.tbx__item'), function (el) {
        var r = el.getBoundingClientRect();
        return r.left > box.left + box.width * 0.15 && r.right < box.right - box.width * 0.15;
      });
      if (!pick.length) return;
      last = pick[Math.floor(Math.random() * pick.length)];
      last.classList.add('is-lit');
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible && !timer) timer = setInterval(tick, 1600);
        if (!visible && timer) { clearInterval(timer); timer = null; clear(); }
      }).observe(root);
    }
  });
})();
