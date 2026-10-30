// Adds .in to .reveal elements as they scroll into view; CSS animates the rest.
const motion = matchMedia('(prefers-reduced-motion: no-preference)').matches;

function countUp(el) {
  const end = parseFloat(el.textContent);
  const decimals = (el.textContent.split('.')[1] || '').length;
  const start = performance.now();
  requestAnimationFrame(function step(now) {
    const p = Math.min((now - start) / 1000, 1);
    el.textContent = (end * (1 - (1 - p) ** 3)).toFixed(decimals);
    if (p < 1) requestAnimationFrame(step);
  });
}

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    e.target.classList.add('in');
    io.unobserve(e.target);
    if (motion) e.target.querySelectorAll('[data-count]').forEach(countUp);
  }
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
