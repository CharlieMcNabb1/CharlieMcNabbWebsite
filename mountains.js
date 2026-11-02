// The wallpaper: a mountain range drawn in glyphs on a fixed canvas behind the windows.
// Terrain is baked once per resize; each frame only re-shades the mist and the stars.
(() => {
  const canvas = document.querySelector('.range');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const motion = matchMedia('(prefers-reduced-motion: no-preference)').matches;

  const FONT = 10, LINE = 12, FPS = 12;
  // Glyphs ordered by ink in a mono face, sparse to dense
  const RAMP = " .'`,:;~-=+xoe%#@";
  // Twelve steps of the page's blue-white, from deep steel to the text colour
  const LEVELS = 12;
  const COLORS = Array.from({ length: LEVELS }, (_, i) => {
    const k = (i / (LEVELS - 1)) ** 1.15;
    return `rgb(${Math.round(30 + 202 * k)},${Math.round(42 + 196 * k)},${Math.round(82 + 173 * k)})`;
  });

  // back to front: ridge base and height (fractions of the viewport), feature size, haze
  // gain darkens the nearer ranges so the foreground stays a quiet silhouette
  const LAYERS = [
    { base: 0.62, amp: 0.42, freq: 1.3, haze: 0.34, gain: 0.95, snow: true },
    { base: 0.73, amp: 0.34, freq: 1.9, haze: 0.26, gain: 0.85, snow: true },
    { base: 0.84, amp: 0.30, freq: 2.6, haze: 0.18, gain: 0.72, snow: true },
    { base: 0.96, amp: 0.28, freq: 3.4, haze: 0.08, gain: 0.46, trees: true },
    { base: 1.08, amp: 0.26, freq: 4.4, haze: 0.00, gain: 0.34, trees: true },
  ];
  const PAD = 16; // ridge samples past each screen edge, for wide slope windows

  const hash = (x, y) => {
    let h = (Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263)) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  };
  const noise = (x, y) => {
    const xi = Math.floor(x), yi = Math.floor(y);
    let u = x - xi, v = y - yi;
    u = u * u * (3 - 2 * u); v = v * v * (3 - 2 * v);
    const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  };
  const fbm = (x, y, oct) => {
    let s = 0, amp = 0.5, norm = 0;
    for (let i = 0; i < oct; i++) { s += amp * noise(x, y); norm += amp; x = x * 2.03 + 17.1; y = y * 2.03 + 9.7; amp *= 0.5; }
    return s / norm;
  };
  // Sharp crests: folded noise, each octave weighted by the one above it
  const ridged = (x, y, oct) => {
    let s = 0, amp = 0.5, norm = 0, w = 1;
    for (let i = 0; i < oct; i++) {
      let n = 1 - Math.abs(noise(x, y) * 2 - 1);
      n *= n * w; w = Math.min(1, n * 1.6);
      s += amp * n; norm += amp; x = x * 2.1 + 31.7; y = y * 2.1 + 3.3; amp *= 0.5;
    }
    return s / norm;
  };
  const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

  let cols, rows, cw, n;
  let tChar, tB, fogW, owner, stars, frameChar, frameB, dirty, rowBuf, base;

  function bake() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const w = innerWidth, h = innerHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.font = `${FONT}px "Fragment Mono", ui-monospace, monospace`;
    ctx.textBaseline = 'top';
    cw = ctx.measureText('M').width;
    cols = Math.ceil(w / cw) + 1; rows = Math.ceil(h / LINE) + 1; n = cols * rows;
    const aspect = cw / LINE; // a column is this many rows wide

    // Ridge rows per layer, sampled one column beyond each edge for slopes
    const ridge = LAYERS.map((L, li) => {
      const r = new Float32Array(cols + 2 * PAD);
      for (let c = -PAD; c < cols + PAD; c++) {
        const X = (c * cw) / h; // horizontal position in viewport heights keeps peaks the same shape on any screen
        const x = X * L.freq + li * 13.7;
        // The far ranges rise toward the screen edges, so the big peaks frame the hero window
        const frame = li < 3 ? 0.42 + 0.95 * Math.abs((2 * c) / cols - 1) ** 1.1 : 1;
        r[c + PAD] = (L.base - L.amp * (0.78 * ridged(x, li * 5.3, 7) ** 1.6 + 0.22 * fbm(x * 0.7, li * 2.1 + 40, 4)) * 1.35 * frame) * rows;
      }
      return r;
    });
    const R = (li, c) => ridge[li][c + PAD];

    owner = new Int8Array(n).fill(-1);
    for (let c = 0; c < cols; c++)
      for (let r = 0; r < rows; r++)
        for (let li = LAYERS.length - 1; li >= 0; li--)
          if (r + 0.5 >= R(li, c)) { owner[r * cols + c] = li; break; }

    tChar = new Uint16Array(n).fill(32); tB = new Float32Array(n); fogW = new Float32Array(n);
    const own = (c, r) => (c < 0 || c >= cols || r < 0 ? -2 : owner[r * cols + c]);
    stars = [];

    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const i = r * cols + c, li = owner[i], X = (c * cw) / h, V = r / rows;
      if (li < 0) {
        // Sky: stars thin out toward the horizon
        const hs = hash(c * 7 + 1, r * 13 + 5);
        if (hs < 0.016 * (1 - V) ** 1.5) stars.push({ i, b: 0.3 + hash(c, r) * 0.6, phase: hash(r, c) * 6.28, rate: 0.6 + hash(c + r, 3) * 2.2 });
        continue;
      }
      const L = LAYERS[li], d = r + 0.5 - R(li, c); // rows below the crest
      const slope = (R(li, c + 1) - R(li, c - 1)) / 2 / aspect; // + means the ground falls away to the right
      // Deeper cells read the face at a wider span, so each peak splits into one lit and one shaded flank
      const k = Math.min(PAD - 1, 1 + Math.floor(d / 2.5));
      const face = (R(li, c + k) - R(li, c - k)) / (2 * k) / aspect;

      // Lit from the upper left; gullies run down the faces as long streaks
      const fx = X * L.freq * 7, fy = (V * L.freq * 7) / aspect * 0.18;
      const gully = ridged(fx + 0.03, fy, 3) - ridged(fx - 0.03, fy, 3);
      let b = 0.4 + 0.5 * Math.tanh(-face * 2.4) - gully * 3;
      b += (fbm(fx * 2, fy * 3, 2) - 0.5) * 0.14; // rock grain
      b *= 1 - 0.65 * smooth(4, 22 + li * 8, d); // the foot of each range sinks into shadow
      b *= L.gain;

      // Snow on the high crests, deeper in the gullies than on the spurs
      if (L.snow) {
        const line = 0.42 + li * 0.06 + 0.1 * fbm(X * 4, li, 3) + gully * 0.7;
        if (V < line && d < 3 + (line - V) * rows * 0.6) b = 0.78 + 0.5 * smooth(-0.5, 0.5, -face) - (fbm(fx * 2, fy * 3, 2) - 0.5) * 0.25;
      }

      b = L.haze * 0.32 + (1 - L.haze) * b; // distance flattens contrast toward the haze
      b = Math.min(1, Math.max(0, b + (hash(c, r * 3) - 0.5) * 0.04)) ** 0.9;

      // Crest and cliff edges: the strokes that make each range read
      const up = own(c, r - 1) !== li, left = own(c - 1, r) < li, right = own(c + 1, r) < li;
      let ch = RAMP.charCodeAt(Math.floor(b * (RAMP.length - 1)));
      if (up || left || right) {
        const lit = 0.18 * Math.tanh(-slope * 2);
        if (left && right) ch = up ? 94 : 124;        // ^ or |
        else if (left) ch = 47;                         // /
        else if (right) ch = 92;                        // \
        else ch = Math.abs(slope) < 0.25 ? 95 : slope < 0 ? 47 : 92; // _ / \
        b = Math.min(1, (0.62 + lit) * (1 - L.haze * 0.4) * (0.55 + L.gain * 0.55));
      }
      tChar[i] = ch; tB[i] = b;
      // Mist settles in the lower half of every range
      fogW[i] = smooth(4, 24, d) * (0.72 + li * 0.07);
    }

    // Conifers along the two nearest crests
    LAYERS.forEach((L, li) => {
      if (!L.trees) return;
      for (let c = 0; c < cols; c++) {
        const lean = Math.abs(R(li, c + 1) - R(li, c - 1));
        if (hash(c * 3, li * 11) > (lean < 0.6 ? 0.8 : 0.3)) continue;
        const top = Math.ceil(R(li, c) - 0.5), tall = 1 + Math.floor(hash(c, li) * 3);
        for (let k = 1; k <= tall; k++) {
          const r = top - k;
          if (r < 0 || own(c, r) > li) continue;
          const i = r * cols + c;
          tChar[i] = k === tall ? 94 : 65; // ^ over A
          tB[i] = (0.42 + hash(c, k) * 0.12) * (1 - L.haze * 0.5);
          owner[i] = li; fogW[i] = 0;
        }
      }
    });

    frameChar = new Uint16Array(n); frameB = new Float32Array(n); dirty = new Uint8Array(n);
    rowBuf = Array.from({ length: LEVELS }, () => new Uint16Array(cols));

    // The still terrain is painted once; frames blit it and repaint only the cells that move
    base = document.createElement('canvas');
    base.width = canvas.width; base.height = canvas.height;
    const g = base.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.font = ctx.font; g.textBaseline = 'top';
    paint(g, tChar, tB, null);
  }

  // Each row is one string per brightness level, spaces elsewhere: a few hundred fillText calls, not thousands
  function paint(g, chars, bright, only) {
    for (let r = 0; r < rows; r++) {
      for (const buf of rowBuf) buf.fill(32);
      let used = 0;
      for (let c = 0; c < cols; c++) {
        const i = r * cols + c, ch = chars[i];
        if (ch === 32 || bright[i] < 0.04 || (only && !only[i])) continue;
        const lv = Math.min(LEVELS - 1, Math.floor(bright[i] * LEVELS));
        rowBuf[lv][c] = ch; used |= 1 << lv;
      }
      for (let lv = 0; lv < LEVELS; lv++) {
        if (!(used & (1 << lv))) continue;
        g.fillStyle = COLORS[lv];
        g.fillText(String.fromCharCode.apply(null, rowBuf[lv]), 0, r * LINE);
      }
    }
  }

  const MIST = '  ..,,--~~';
  function draw(t) {
    dirty.fill(0);
    const h = innerHeight;
    for (let i = 0; i < n; i++) {
      const w = fogW[i];
      if (w < 0.02) continue;
      const c = i % cols, r = (i / cols) | 0;
      // Bands stretched sideways so the mist rolls rather than boils
      const m = fbm((c * cw) / h * 3.2 - t * 0.07, (r / rows) * 9 + t * 0.012, 3);
      const f = w * smooth(0.42, 0.74, m);
      if (f < 0.08) continue;
      dirty[i] = 1;
      frameB[i] = tB[i] * (1 - f) + 0.68 * f;
      frameChar[i] = f > 0.22 ? MIST.charCodeAt(Math.min(MIST.length - 1, Math.floor(f * 1.6 * MIST.length))) : tChar[i];
    }
    for (const s of stars) {
      const b = s.b * (0.55 + 0.45 * Math.sin(t * s.rate + s.phase));
      dirty[s.i] = 1; frameB[s.i] = b;
      frameChar[s.i] = b > 0.78 ? 42 : b > 0.55 ? 43 : 46; // * + .
    }

    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.drawImage(base, 0, 0, innerWidth, innerHeight);
    // Punch out the moving cells in runs, then letter them
    for (let r = 0; r < rows; r++) {
      let run = -1;
      for (let c = 0; c <= cols; c++) {
        const on = c < cols && dirty[r * cols + c];
        if (on && run < 0) run = c;
        else if (!on && run >= 0) { ctx.clearRect(run * cw, r * LINE, (c - run) * cw, LINE); run = -1; }
      }
    }
    paint(ctx, frameChar, frameB, dirty);
  }

  // The range shows through the intro, then fades out across the gap between the hero window
  // and the first project, stretched half a screen past it. Hidden, it stops drawing.
  const hero = document.querySelector('.hero'), first = document.querySelector('#work .project');
  let shown = 1;
  const fade = () => {
    if (!hero || !first) return;
    // b is where the section's content starts, below its top padding
    const a = hero.getBoundingClientRect().bottom;
    const b = first.getBoundingClientRect().top + parseFloat(getComputedStyle(first).paddingTop);
    // Starts as the hero's bottom edge rises past 80% of the viewport, ends as the project's content passes 30%
    const vh = innerHeight;
    shown = 1 - smooth(a - 0.3 * vh, b + 0.2 * vh, vh / 2);
    canvas.style.opacity = shown;
    canvas.style.visibility = shown ? '' : 'hidden';
  };
  addEventListener('scroll', fade, { passive: true });
  fade();

  let raf = 0, last = 0;
  const loop = (now) => {
    raf = requestAnimationFrame(loop);
    if (!shown || now - last < 1000 / FPS) return;
    last = now;
    draw(now / 1000);
  };
  const start = () => {
    bake();
    if (motion) { cancelAnimationFrame(raf); raf = requestAnimationFrame(loop); }
    else draw(40); // reduced motion: one still frame with the mist in place
  };

  // Mobile toolbars resize the viewport while scrolling; only rebake for real size changes
  let resizeTimer, bakedW = innerWidth, bakedH = innerHeight;
  addEventListener('resize', () => {
    if (innerWidth === bakedW && Math.abs(innerHeight - bakedH) < 120) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { bakedW = innerWidth; bakedH = innerHeight; start(); fade(); }, 150);
  });
  document.addEventListener('visibilitychange', () => {
    if (!motion) return;
    cancelAnimationFrame(raf);
    if (!document.hidden) raf = requestAnimationFrame(loop);
  });
  document.fonts.load(`${FONT}px "Fragment Mono"`).finally(start);
})();
