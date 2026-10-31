---
name: Charlie McNabb
description: A desktop of open windows on a blue-black canvas, lit from above, with one pink italic word.
colors:
  bg: "#060a16"
  text: "#eef2ff"
  text-2: "#b3bfdc"
  muted: "#8593b5"
  line: "rgba(200, 215, 255, 0.12)"
  line-strong: "rgba(200, 215, 255, 0.22)"
  fill: "rgba(200, 215, 255, 0.05)"
  window: "#0b1124"
  steel: "#313c5b"
  steel-sheen: "#5f6e8f"
  pink: "#d6246e"
  pink-ink: "#c81e64"
  pink-bright: "#ff6fa8"
  on-pink: "#ffffff"
  safe: "#34d27a"
  light-close: "#ff5f57"
  light-min: "#febc2e"
  light-zoom: "#28c840"
typography:
  display:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(42px, 6vw, 80px)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(32px, 3.6vw, 44px)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  statement:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(26px, 3.2vw, 40px)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  lede:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  pitch:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "28px"
  body:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  control:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
  label:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
  accent-serif:
    fontFamily: "Bodoni Moda, Didot, serif"
    fontSize: "1.06em"
    fontWeight: 650
    letterSpacing: "-0.01em"
  figure:
    fontFamily: "Fragment Mono, ui-monospace, monospace"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "tnum"
rounded:
  bar: "2px"
  focus: "6px"
  row: "8px"
  segment: "10px"
  window-inner: "19px"
  window: "26px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  gutter: "40px"
  gap-wide: "72px"
  section: "112px"
  section-lg: "144px"
components:
  button:
    backgroundColor: "{colors.fill}"
    textColor: "{colors.text}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-hover:
    backgroundColor: "rgba(200, 215, 255, 0.1)"
    textColor: "{colors.text}"
  button-primary:
    backgroundColor: "{colors.pink}"
    textColor: "#ffffff"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.pink-ink}"
    textColor: "#ffffff"
  note:
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  pill-nav:
    backgroundColor: "rgba(12, 18, 36, 0.78)"
    rounded: "{rounded.pill}"
    padding: "5px"
  pill-nav-tab:
    textColor: "{colors.text-2}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "40px"
  pill-nav-tab-active:
    backgroundColor: "rgba(200, 215, 255, 0.1)"
    textColor: "{colors.text}"
  window:
    backgroundColor: "rgba(200, 215, 255, 0.025)"
    rounded: "{rounded.window}"
    padding: "7px"
  window-inner:
    backgroundColor: "{colors.window}"
    rounded: "{rounded.window-inner}"
  titlebar:
    backgroundColor: "{colors.steel}"
    textColor: "rgba(225, 233, 255, 0.72)"
    typography: "{typography.label}"
    padding: "0 16px"
    height: "40px"
  demo-row:
    backgroundColor: "{colors.fill}"
    rounded: "{rounded.row}"
    padding: "0 12px"
    height: "36px"
  segmented:
    backgroundColor: "rgba(200, 215, 255, 0.06)"
    rounded: "{rounded.segment}"
    padding: "4px"
  segmented-indicator:
    backgroundColor: "{colors.pink}"
    textColor: "#ffffff"
    rounded: "{rounded.focus}"
    height: "36px"
---

# Design System: Charlie McNabb

## Overview

**Creative North Star: "The Desktop of Open Windows"**

The site is a dark desktop. Everything worth looking at sits in an app window: the hero is one large window, and each project gets its own window holding a working mock of the app. The canvas is a deep blue-black lit from above by a soft blue glow. The windows float over that light, so depth comes from the chrome and from long ambient shadows, not from cards or panels.

Type does the talking. Host Grotesk carries everything in white and cool grey-blues. One word per block is set in Bodoni Moda italic, in bright pink, and in the shipped build that word is "careful" both times. Fragment Mono is used only inside the windows, for numbers and for the ComputerCraft terminal. Pink is the only saturated colour on the page. The window's own devices (the traffic lights and a green status dot) are the one exception.

Motion explains the windows. The hero powers on when the page loads. Each project window unrolls from its title bar as it scrolls into view, and then its demo plays. With reduced motion turned on, every window is open and every demo is in its final state from the start.

**Key Characteristics:**
- Blue-black canvas, with a fixed radial blue light from above that the windows scroll over
- Double-bezel windows with a steel title bar, traffic lights and hairline borders
- Fully round controls everywhere (999px): buttons, the pill nav, the note chip
- White display type with a soft glow; one pink Bodoni italic word
- Mono only for data inside windows
- Motion that only hides content when motion is welcome

## Colors

A cold, nearly monochrome blue-black range with a single hot pink voice.

### Primary
- **Signal Pink** (pink): fills the primary button, the skip link, text selection and the selected segment in the ScreenLink demo. White text sits on it.
- **Pressed Pink** (pink-ink): the hover state of anything filled with Signal Pink.
- **Neon Pink** (pink-bright): pink used as text or light. It colours the Bodoni accent word, the demo figures, link hover, the focus ring and the text caret.

### Neutral
- **Night Canvas** (bg): the page background, behind the fixed overhead light `radial-gradient(70% 55% at 50% -12%, rgba(78,118,255,0.26), transparent 70%)`.
- **Window Ink** (window): the floor of a window's body. It sits under a top gradient from `#0f1730`.
- **Frost White** (text): primary text and active nav. The h1 uses a slightly brighter `#f6f8ff`.
- **Mist** (text-2): secondary prose (pitch, points, statement) and inactive pill tabs.
- **Slate Haze** (muted): metadata, labels, figcaptions, footer and the second line of the lede.
- **Hairline / Hairline Strong** (line, line-strong): dividers inside windows, and borders on window bodies, buttons and the pill.
- **Frost Fill** (fill): resting fill for buttons and demo rows.
- **Blue Steel / Steel Sheen** (steel, steel-sheen): the title bar, as a horizontal gradient from steel to sheen and back to steel.

### Window devices (semantic, not accent)
- **Traffic lights** (light-close, light-min, light-zoom): exactly three 12px dots on every title bar. They are not used anywhere else.
- **Safe Green** (safe): the 8px status dot (safe items, "Paired"). It is not used anywhere else.

### Named Rules
**The One Saturated Voice Rule.** Pink is the only saturated colour on content. Saturated colours outside pink belong only to the window's native devices (traffic lights, status dot) and the blue overhead light. Never use them as text, fills or decoration.

**The Frost Ladder Rule.** Translucent surfaces are built from one tint, `rgba(200, 215, 255, a)`. Steps in the build: 0.025 for the window bezel, 0.05 for fills, 0.06 for the segmented track, 0.09 for the bezel border, 0.1 for hover and active fills, 0.12 for lines, 0.22 for strong lines, 0.34 for the hover border. Do not add a new tint hue.

## Typography

**Display Font:** Host Grotesk (with system-ui), weights 400 to 600 loaded
**Accent Font:** Bodoni Moda italic (with Didot), optical size 6 to 96
**Mono Font:** Fragment Mono (with ui-monospace)

**Character:** The grotesk is set tight and quiet at size, with medium weight and negative tracking. The didone italic adds one flash of something hand-finished. The mono is used only where the page pretends to be software.

### Hierarchy
- **Display** (h1): the hero thesis, balanced, max 12.5em wide. It carries a double glow, `0 0 28px rgba(160,190,255,0.32), 0 0 2px rgba(255,255,255,0.35)`. The pink word glows pink instead.
- **Headline** (h2): project names.
- **Statement**: the About paragraph, max 24em, in Mist.
- **Lede**: the hero sub-lede. It sits 36% from the left on desktop. Its second line is set as a block in Slate Haze.
- **Pitch**: the one-paragraph project description, in Mist.
- **Body**: base text and bullet points.
- **Control**: buttons, nav links and pill tabs.
- **Label**: metadata, demo labels, title-bar titles and figcaptions, always in Slate Haze. Never uppercase, never tracked out.
- **Figure**: the big number in each demo, in Neon Pink. It is 24px under 420px wide.

### Named Rules
**The One Careful Word Rule.** The Bodoni italic is reached only through `em`, in Neon Pink at weight 650. Use at most one per block. It is an accent inside a sentence, never a heading face.

**The Mono Is Data Rule.** Fragment Mono appears only inside demo windows: values, IPs and figures, plus everything in the terminal mock. Product names and the window's own UI text stay in Host Grotesk, even inside a window. All demo text uses tabular numerals.

## Layout

Content sits in a 1200px wrap with 40px gutters (20px under 860px). The header is 104px tall (88px on mobile), with the wordmark on the left and outbound links on the right. The pill nav is fixed and centred in that band. Under 860px it moves to the bottom edge, within thumb reach, and the footer gains 104px of bottom padding to clear it.

The hero window is centred and capped at 980px, so canvas shows on both sides. Its body fills `100svh - 176px`, and its lower 22% fades into the canvas through a mask.

Projects are 5fr/7fr splits with a 72px gap and 112px vertical padding. The text and demo sides alternate on every even section. Under 860px the text column flattens (`display: contents`), so the demo window lands right after the pitch and the points and actions follow it. Sections scroll to 64px below the top.

Vertical rhythm: 8, 12, 16, 20, 24 and 32px inside components; 72, 112 and 144px between sections. Breakpoints are 860px (layout) and 420px (demo density).

## Elevation & Depth

Depth comes from light, not stacking. The canvas is lit from above. Windows float on long, soft, very dark ambient shadows. The only other lift is the floating pill. All shadows are diffuse and none is offset hard.

### Shadow Vocabulary
- **Window float** (`box-shadow: 0 48px 96px -24px rgba(0,0,0,0.75)`): every window.
- **Pill float** (`box-shadow: 0 12px 32px rgba(0,0,0,0.45)` with `backdrop-filter: blur(14px)`): the fixed nav only.
- **Rim light** (`box-shadow: 0 2px 10px 1px rgba(150,180,255,0.7)`): the 18x2px sliver on the pill's rim above the active tab. It moves to the bottom rim on mobile.
- **Display glow** (text-shadow, see Typography): h1 only.

### Named Rules
**The Lit From Above Rule.** New depth is either an ambient drop shadow or a cool blue glow. There are no hard offset shadows, no inner-shadow embossing and no stacked card piles.

## Shapes

There are two families. Controls are fully round pills (999px). Windows are generous rounded rectangles: the 26px outer bezel holds a 19px inner body 7px inside it, so the two corners stay concentric. Small parts inside a window step down: demo rows 8px, the segmented track 10px with a 6px indicator, progress bars 2px. Dots (traffic lights, status, bullets) are circles. Borders are 1px hairlines everywhere, and a dashed hairline marks the one "not available" note.

## Components

### Buttons
Quiet frosted pills, with one hot one.
- **Shape:** fully round (999px), 44px tall, 20px side padding, with a 14px trailing arrow icon.
- **Default:** Frost Fill with a Hairline Strong border and Frost White text.
- **Primary:** Signal Pink fill and border, white text. Used once, for GitHub in About.
- **Hover / Focus / Active:** hover raises the fill to 0.1 and the border to 0.34. Primary goes to Pressed Pink. Active scales to 0.98. Transitions run at 160ms on `--ease`. The focus ring is a 2px Neon Pink outline at 3px offset, and Frost White on the primary button.
- **Note chip:** the same pill shape with a dashed Hairline Strong border, Slate Haze text and a lock icon. It is a statement, not a control.

### Navigation
- **Pill nav:** fixed and centred, with a 5px padding track. The fill is `rgba(12,18,36,0.78)` with a 14px blur and a Hairline Strong border. Tabs are 40px tall with 22px side padding, in Mist. The active tab (`aria-current`, set by scroll position) gets Frost White text, a 0.1 frost fill and the rim-light sliver. State changes take 200ms.
- **Header links:** 15px medium text, 44px hit area, with a trailing outbound arrow. Hover turns them Neon Pink.

### Window (signature)
- **Bezel:** 7px padding, 26px radius, a 0.09 frost border and a 0.025 frost fill, with the window float shadow.
- **Body:** 19px radius, Hairline Strong border, a vertical gradient from `#0f1730` to Window Ink at 55%, clipped.
- **Title bar:** 40px tall, a three-column grid (lights, centred title, trailing icon), the Blue Steel gradient, a `rgba(0,0,0,0.55)` bottom rule, and 13px medium title text.
- **Demo body:** 24px padding and a 16px gap (18px padding under 420px). It has head and foot bands with hairline rules, and holds 36px rows, 4px progress bars, a segmented control and a telemetry definition list.

### Motion
- **Easing:** one curve, `cubic-bezier(0.22, 1, 0.36, 1)`, used for everything.
- **Power-on:** the hero fades in from 24px down and 0.985 scale over 1200ms.
- **Reveal:** elements rise 14px and clear a 6px blur over 700ms, with a 300ms delay plus 120ms per step.
- **Unroll:** a scroll-driven `clip-path` runs from the title bar (56px showing) to fully open, while the window rises 48px and grows from 0.95 scale. It runs from `entry 0%` to `cover 30%`. The side and bottom insets are negative so the shadow is not clipped. Browsers without `animation-timeline` show the window already open.
- **Live demos:** once 60% of a window is in view, its demo plays. The bar fills (900ms), rows stagger in (300ms, 60ms apart, starting at 700ms), the segment slides (800ms), and figures count up over 1s with an ease-out-cubic curve. Scrolling back down past a window replays it; windows above the viewport are shown finished.
- **Reduced motion:** every hidden start state lives inside `prefers-reduced-motion: no-preference`. Under `reduce`, content and demos are in their final state, there is no count-up or unroll, and smooth scrolling is off.

## Do's and Don'ts

### Do:
- **Do** put any new showcase surface in a window: bezel, steel title bar, three traffic lights.
- **Do** keep every control fully round (999px) and at least 44px tall when it is interactive.
- **Do** build translucent surfaces from the `rgba(200, 215, 255, a)` frost ladder.
- **Do** keep hidden start states inside `prefers-reduced-motion: no-preference`, so the reduced-motion page is the finished page.
- **Do** label demo values as illustrations with sample values (figcaption "Fig. n · Illustration with sample values").

### Don't:
- **Don't** add a second saturated accent. Traffic-light colours and Safe Green stay inside window devices.
- **Don't** use Bodoni Moda outside a single `em` word, or as a heading face.
- **Don't** use Fragment Mono outside demo windows.
- **Don't** use hard offset shadows or stacked cards for depth.
- **Don't** put kickers or eyebrow labels above headings. Metadata (the stack line) sits below the h2 in Slate Haze.
