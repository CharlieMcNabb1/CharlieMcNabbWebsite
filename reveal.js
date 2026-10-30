// Adds .in to .reveal elements once as they scroll into view. Demo cards get .live when
// they scroll in from below and lose it only when they drop back out below, so scrolling
// up shows finished demos and scrolling down again replays them. CSS animates the rest.
const motion = matchMedia('(prefers-reduced-motion: no-preference)').matches;

function countUp(el) {
  const end = parseFloat(el.dataset.count || el.textContent);
  el.dataset.count = end;
  const decimals = (String(end).split('.')[1] || '').length;
  const start = performance.now();
  requestAnimationFrame(function step(now) {
    const p = Math.min((now - start) / 1000, 1);
    el.textContent = (end * (1 - (1 - p) ** 3)).toFixed(decimals);
    if (p < 1) requestAnimationFrame(step);
  });
}

const reveal = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    e.target.classList.add('in');
    reveal.unobserve(e.target);
  }
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));

const live = new IntersectionObserver((entries) => {
  for (const e of entries) {
    const card = e.target;
    const below = e.boundingClientRect.top > 0;
    if (e.intersectionRatio >= 0.3 && !card.classList.contains('live')) {
      card.classList.add('live');
      if (motion) card.querySelectorAll('[data-count]').forEach(countUp);
    } else if (!e.isIntersecting) {
      // Above the viewport (e.g. page opened at an anchor): show it finished, no replay.
      card.classList.toggle('live', !below);
    }
  }
}, { threshold: [0, 0.3] });
document.querySelectorAll('.preview').forEach((el) => live.observe(el));
