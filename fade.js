// Fades and blurs each .reveal element by its distance from the vertical center of the viewport,
// and drifts [data-parallax] layers (transform) and [data-parallax-bg] tiles (background) at a fraction of the scroll speed.
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const SAFE = 0.4; // share of the distance from center to edge that stays fully sharp and opaque
  let queued = false;
  const update = () => {
    queued = false;
    const vh = innerHeight;
    const max = document.documentElement.scrollHeight - vh;
    // ponytail: over the last half screen of scroll the focus point slides down, so the final items can reach full opacity
    const t = Math.min(1, Math.max(0, (scrollY - (max - vh / 2)) / (vh / 2)));
    const pivot = vh * (0.5 + 0.2 * t);
    for (const el of document.querySelectorAll('.reveal')) {
      const r = el.getBoundingClientRect();
      const off = r.top + r.height / 2 - pivot;
      // fully transparent only once the whole element has left the screen on that side
      const reach = (off < 0 ? pivot : vh - pivot) + r.height / 2;
      const d = Math.min(1, Math.abs(off) / reach);
      const k = d > SAFE ? ((d - SAFE) / (1 - SAFE)) ** 1.5 : 0;
      el.style.opacity = 1 - k;
      el.style.filter = k > 0.02 ? `blur(${k * 6}px)` : 'none';
    }
    for (const el of document.querySelectorAll('[data-parallax]')) {
      el.style.transform = `translate3d(0, ${-scrollY * el.dataset.parallax}px, 0)`;
    }
    for (const el of document.querySelectorAll('[data-parallax-bg]')) {
      el.style.backgroundPositionY = `${-scrollY * el.dataset.parallaxBg}px`;
    }
  };
  const tick = () => queued || (queued = true, requestAnimationFrame(update));
  addEventListener('scroll', tick, { passive: true });
  addEventListener('resize', tick);
  new MutationObserver(tick).observe(document.documentElement, { childList: true, subtree: true });
  tick();
})();
