// Scroll: the laptop that opens and zooms, the pinned project stage, and the text that shimmers in.
// The stage only pins once this file runs; if it fails to load, the projects stay stacked.
document.documentElement.classList.add('js');
const motion = matchMedia('(prefers-reduced-motion: no-preference)').matches;
const clamp = (x) => Math.min(1, Math.max(0, x));

// Laptop: the first half of the hero's scroll opens the lid, the second half zooms into the screen
const hero = document.querySelector('.hero');
const display = hero.querySelector('.mac-screen');
function lift() {
  const p = clamp(-hero.getBoundingClientRect().top / (hero.offsetHeight - innerHeight));
  const open = clamp(p / 0.5);
  hero.style.setProperty('--open', 1 - (1 - open) ** 3);
  hero.style.setProperty('--zoom', clamp((p - 0.5) / 0.5));
  // How far the display must grow to cover the viewport
  hero.style.setProperty('--s', Math.max(innerWidth / display.offsetWidth, innerHeight / display.offsetHeight) * 1.1);
  hero.style.setProperty('--fade', clamp(p / 0.12));
}

const stage = document.querySelector('.stage');
const projects = [...stage.querySelectorAll('.project')];
const tabs = [...stage.querySelectorAll('.tabs a')];
// Must match the pinned-stage media query in style.css
const pinned = matchMedia('(min-width: 1024px) and (min-height: 720px)');
const travel = () => stage.offsetHeight - innerHeight;
const OPEN_AT = 0.3; // how far into a project's scroll its demo slides aside and the text appears

function step() {
  if (!pinned.matches) return;
  const at = (-stage.getBoundingClientRect().top / travel()) * projects.length;
  const i = Math.min(projects.length - 1, Math.max(0, Math.floor(at)));
  // Without motion nothing waits: the stage shows as soon as it scrolls in, and every project is open
  stage.classList.toggle('live', !motion || at >= 0);
  projects.forEach((p, k) => {
    p.classList.toggle('on', k === i);
    p.classList.toggle('open', k === i && (!motion || at - i >= OPEN_AT));
  });
  tabs.forEach((t, k) => (k === i ? t.setAttribute('aria-current', 'true') : t.removeAttribute('aria-current')));
}
// Tabs land past the slide, so the project arrives with its text showing
// shortcut: opening the page at #screenlink lands on the first project while pinned; handle the hash on load if deep links matter
tabs.forEach((t, k) => t.addEventListener('click', (e) => {
  if (!pinned.matches) return;
  e.preventDefault();
  scrollTo(0, stage.offsetTop + (travel() * (k + OPEN_AT + 0.1)) / projects.length);
}));

// Text shimmers in once it is on screen. Pinned projects are opened by step() instead.
const seen = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting || (pinned.matches && e.target.matches('.project'))) continue;
    e.target.classList.add('open');
    seen.unobserve(e.target);
  }
}, { threshold: 0.2 });
document.querySelectorAll('.reveal, .project').forEach((el) => seen.observe(el));

const statement = document.querySelector('.statement');
let words = [];
if (motion) {
  words = statement.textContent.trim().split(/\s+/).map((w) => Object.assign(document.createElement('span'), { textContent: w }));
  statement.replaceChildren(...words.flatMap((w) => [w, ' ']));
}
function light() {
  const r = statement.getBoundingClientRect();
  // From the paragraph's top reaching 85% of the viewport to its bottom reaching 45%
  const p = (innerHeight * 0.85 - r.top) / (r.height + innerHeight * 0.4);
  const n = Math.round(clamp(p) * words.length);
  words.forEach((w, i) => w.classList.toggle('lit', i < n));
}

const onScroll = () => { if (motion) lift(); step(); light(); };
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);
onScroll();

// Demos. All values are samples; the markup holds the starting state.
const clean = document.querySelector('#winfastcleaner .pv');
function total() {
  const mb = [...clean.querySelectorAll(':checked')].reduce((sum, c) => sum + +c.value, 0);
  return mb >= 1000 ? (mb / 1000).toFixed(2) + ' GB' : mb + ' MB';
}
console.assert(total() === clean.querySelector('output').textContent, 'cleaner rows do not add up to the figure in the markup');
clean.addEventListener('change', () => { clean.querySelector('output').textContent = total(); });

const link = document.querySelector('#screenlink .pv');
link.addEventListener('change', (e) => { link.querySelector('output').textContent = `1080p · ${e.target.value} Hz`; });
const connect = link.querySelector('button');
connect.addEventListener('click', () => {
  const on = connect.getAttribute('aria-pressed') !== 'true';
  connect.setAttribute('aria-pressed', on);
  connect.textContent = on ? 'Disconnect' : 'Connect';
  link.querySelector('.state').textContent = on ? 'Streaming' : 'Paired';
});

// The controller's idea in miniature: big steps far from the target, fine steps near it.
const reactor = document.querySelector('#fusion-reactor .pv');
const rods = reactor.querySelector('input');
const TARGET = 42, FAR = 8;
const out = (k, text) => { reactor.querySelector(`[data-k="${k}"]`).textContent = text; };
function read() {
  const off = Math.abs(rods.value - TARGET);
  const eff = Math.max(0, 99.6 - off * off * 0.04);
  out('eff', eff.toFixed(1) + '%');
  out('err', (100 - eff).toFixed(1) + '%');
  out('rods', rods.value + '%');
  out('mode', off > FAR ? 'Coarse' : 'Fine-tune');
  reactor.querySelector('.bar i').style.transform = `scaleX(${eff / 100})`;
}
// The controller waits until the visitor has let go, by pointer or by keyboard
let touched = 0;
rods.addEventListener('input', () => { touched = Date.now(); read(); });
setInterval(() => {
  const off = TARGET - rods.value;
  if (!off || Date.now() - touched < 1200) return;
  rods.value = +rods.value + Math.sign(off) * (Math.abs(off) > FAR ? 4 : 1);
  read();
}, 500);
