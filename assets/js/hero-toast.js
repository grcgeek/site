// Home status note (layouts/partials/status/toast.html). Waits for the name
// animation to come to rest (hero:rested from assets/js/intro.js), slides the
// note in, keeps it up for HOLD ms (paused while pointed at or focused), then
// slides it out. Shown once per browser session. The note's link scrolls to
// the Open Bridge section and makes the connect card glow.
// In preview mode (all five designs on the page) the hash #t-<design> picks
// the design, and changing the hash replays it.
(function () {
  'use strict';
  var notes = Array.prototype.slice.call(document.querySelectorAll('[data-ht]'));
  if (!notes.length) return;
  var preview = notes.length > 1;
  var reduced = false;
  try { reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  var KEY = 'ht-seen', DELAY = 450, HOLD = 7000, OUT = 650;

  if (!preview) {
    try { if (sessionStorage.getItem(KEY)) return; } catch (e) {}
  }

  var active = null, timer = null, left = HOLD, started = 0, typing = null;

  function pick() {
    if (!preview) return notes[0];
    var h = (location.hash || '').replace('#t-', '');
    for (var i = 0; i < notes.length; i++) if (notes[i].getAttribute('data-ht') === h) return notes[i];
    return notes[0];
  }

  function clearAll() {
    clearTimeout(timer); clearInterval(typing);
    notes.forEach(function (n) { n.classList.remove('is-in', 'is-out'); n.hidden = true; });
  }

  function hide(n) {
    if (!n || !n.classList.contains('is-in')) return;
    clearTimeout(timer);
    n.classList.remove('is-in');
    n.classList.add('is-out');
    setTimeout(function () { if (n.classList.contains('is-out')) { n.hidden = true; n.classList.remove('is-out'); } }, OUT);
    if (active === n) active = null;
  }

  function arm() {
    clearTimeout(timer);
    started = Date.now();
    timer = setTimeout(function () { hide(active); }, left);
  }

  function type(n) {
    var out = n.querySelector('[data-type]');
    if (!out) return;
    var txt = out.getAttribute('data-type'), i = 0;
    out.textContent = '';
    clearInterval(typing);
    if (reduced) { out.textContent = txt; return; }
    setTimeout(function () {
      typing = setInterval(function () {
        out.textContent = txt.slice(0, ++i);
        if (i >= txt.length) clearInterval(typing);
      }, 28);
    }, 520);
  }

  function show() {
    clearAll();
    var n = pick();
    active = n;
    left = HOLD;
    n.hidden = false;
    void n.offsetWidth;
    n.classList.add('is-in');
    n.style.setProperty('--ht-hold', HOLD + 'ms');
    type(n);
    arm();
    if (!preview) { try { sessionStorage.setItem(KEY, '1'); } catch (e) {} }
  }

  notes.forEach(function (n) {
    function pause() {
      if (active !== n) return;
      clearTimeout(timer);
      left = Math.max(1500, left - (Date.now() - started));
      n.classList.add('is-held');
    }
    function resume() {
      if (active !== n || n.matches(':hover') || n.contains(document.activeElement)) return;
      n.classList.remove('is-held');
      arm();
    }
    n.addEventListener('mouseenter', pause);
    n.addEventListener('focusin', pause);
    n.addEventListener('mouseleave', resume);
    n.addEventListener('focusout', function () { setTimeout(resume, 0); });
    n.querySelectorAll('.ht__x, .ht__later').forEach(function (b) {
      b.addEventListener('click', function () { hide(n); });
    });
    var go = n.querySelector('.ht__go');
    if (go) go.addEventListener('click', function (e) {
      var target = document.getElementById('open-bridge');
      if (!target) return;
      e.preventDefault();
      hide(n);
      target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      var card = document.querySelector('.connect');
      if (card) {
        card.classList.remove('is-called');
        void card.offsetWidth;
        card.classList.add('is-called');
        setTimeout(function () { card.classList.remove('is-called'); }, 2600);
        var btn = card.querySelector('.connect__btn');
        if (btn) setTimeout(function () { btn.focus({ preventScroll: true }); }, reduced ? 0 : 700);
      }
    });
  });

  var shown = false;
  function go() { if (shown) return; shown = true; setTimeout(show, DELAY); }
  if (window.__heroRested) go();
  else document.addEventListener('hero:rested', go, { once: true });
  setTimeout(go, 9000); // safety net if the name never reports back

  if (preview) window.addEventListener('hashchange', function () { shown = true; show(); });
})();
