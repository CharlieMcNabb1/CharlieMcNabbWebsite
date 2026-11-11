---
name: Charlie McNabb
description: Black and white, a CSS laptop that opens and zooms into a black project stage, and a pink to purple shimmer that sweeps through text once and settles.
colors:
  white: "#ffffff"
  black: "#000000"
  ink: "#171717"
  ink-2: "#575757"
  ink-dim: "#8c8c8c"
  rule: "rgba(0, 0, 0, 0.12)"
  mist: "#f5f5f5"
  paper: "#f5f5f5"
  paper-2: "#a3a3a3"
  paper-3: "#929292"
  rule-dark: "rgba(255, 255, 255, 0.14)"
  surface-dark: "#0d0d0d"
  fill-dark: "rgba(255, 255, 255, 0.06)"
  shell: "#1d1d1f"
  pink: "#ff6fa8"
  purple: "#a06bff"
  steady: "#34d27a"
typography:
  display:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(32px, 4.6vw, 68px)"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(32px, 3.6vw, 52px)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  statement:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(26px, 3.6vw, 52px)"
    fontWeight: 300
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  footer-name:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(48px, 13.4vw, 208px)"
    fontWeight: 300
    lineHeight: 0.9
    letterSpacing: "-0.05em"
  title:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lede:
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
  link:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
  detail:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
  label:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
  value:
    fontFamily: "Fragment Mono, ui-monospace, monospace"
    fontSize: "14px"
    fontWeight: 400
  figure:
    fontFamily: "Fragment Mono, ui-monospace, monospace"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1
rounded:
  bar: "2px"
  inner: "4px"
  control: "8px"
  panel: "12px"
  dot: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  gutter: "24px"
  xl: "32px"
  2xl: "48px"
  gap-wide: "72px"
  section: "96px"
components:
  button:
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-solid:
    backgroundColor: "{colors.black}"
    textColor: "{colors.white}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-solid-hover:
    backgroundColor: "#323232"
    textColor: "{colors.white}"
  button-solid-on-dark:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.black}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-solid-on-dark-hover:
    backgroundColor: "#d4d4d4"
    textColor: "{colors.black}"
  button-in-demo:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.black}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "36px"
  nav:
    backgroundColor: "{colors.black}"
    textColor: "{colors.paper}"
    typography: "{typography.link}"
    height: "72px"
  tab:
    textColor: "{colors.paper-3}"
    typography: "{typography.link}"
    height: "64px"
  tab-active:
    textColor: "{colors.paper}"
  laptop-lid:
    backgroundColor: "{colors.shell}"
    rounded: "calc(var(--w) * 0.022)"
  laptop-display:
    backgroundColor: "{colors.black}"
  statement-panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.statement}"
    rounded: "{rounded.panel}"
  panel-mist:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
  demo-panel:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.paper}"
    typography: "{typography.detail}"
    rounded: "{rounded.panel}"
    padding: "24px"
  check-row:
    backgroundColor: "{colors.fill-dark}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "40px"
  check-row-hover:
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  check-row-off:
    backgroundColor: "{colors.fill-dark}"
    textColor: "{colors.paper-3}"
  segment-track:
    backgroundColor: "{colors.fill-dark}"
    rounded: "{rounded.control}"
    padding: "4px"
  segment:
    textColor: "{colors.paper-2}"
    rounded: "{rounded.inner}"
    height: "36px"
  segment-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.black}"
    rounded: "{rounded.inner}"
  meter:
    backgroundColor: "{colors.fill-dark}"
    rounded: "{rounded.bar}"
    height: "4px"
  status-dot:
    backgroundColor: "{colors.steady}"
    rounded: "{rounded.dot}"
    size: "8px"
  demo-figure:
    textColor: "{colors.pink}"
    typography: "{typography.figure}"
---

# Design System: Charlie McNabb

## Overview

**Creative North Star: "Open the Laptop, Operate the Work"**

The page is black and white. A black nav band leads into a black hero where a laptop, built entirely in CSS 3D, sits closed under the headline. Scrolling opens its lid, its display wakes in a pink to purple glow, and the view then zooms into that display until it fills the screen and goes dark. The dark lands on the project stage, where each project's demo arrives tilted in space and then turns toward its text. After the stage come a white About statement, a pale grey links panel and a black footer.

The projects are shown as instruments, not screenshots. Each demo is a dark panel that behaves like a small piece of the real app: tick rows to change a total, pick a refresh rate, drag control rods and watch a controller step them back. They stay fully operable while tilted. Every demo is captioned as an illustration with sample values.

Colour is held back to one moment. Text arrives as a pink and purple sweep the first time it appears and then settles to its own black, white or grey. Pink and purple otherwise appear only in the laptop's display glow and on each demo's key figure.

The user first asked for the 3D to be generated with Higgsfield. The account could not run generations, so the laptop and the demo depth are built in CSS. This is a record of how the build was made, not a rule.

**Key Characteristics:**
- Black and white for nearly everything; pink and purple only in the shimmer, the display glow and the demo figures
- A CSS 3D space black laptop (lid, deck, keys, trackpad, front lip) that opens and zooms into its display over a 320vh pinned hero
- A pinned project stage where each demo arrives centred and tilted, then slides left and turns toward its text
- Demo panels that are operable with native checkboxes, radios, a toggle button and a range input, tilted or not
- Light (300) display type with tight tracking; mono for values and the terminal demo only
- 8px controls, 12px panels, 1px hairlines
- Reduced motion: no hero pin, no shimmer, nothing hidden

## Colors

Neutral greys on white and black, one laptop shell grey, a two-colour shimmer, and one small signal.

### Primary
- **Shimmer Pink** (pink) and **Shimmer Purple** (purple): the moving band in the text shimmer, the 115deg gradient on the laptop display while it is open, and (pink alone) the key figure in each demo. Pink is also the text selection background, with black text.

### Tertiary
- **Steady Green** (steady): the 8px status dot on each ticked cleaner row and beside the ScreenLink connection state. An unticked row turns its dot Paper 3.

### Neutral
- **White** (white): the page under About, the statement panel.
- **Black** (black): the nav band, the hero and stage (one continuous dark run), the laptop display, the footer, and the solid button on light surfaces.
- **Ink** (ink): text on white and Mist, and the lit words of the statement.
- **Ink 2** (ink-2): the paragraph on the Mist panel.
- **Ink Dim** (ink-dim): statement words not yet lit.
- **Rule** (rule): the 1px button outline on light surfaces.
- **Mist** (mist): the links panel background.
- **Paper** (paper): primary text on black, the solid button on black, the selected segment, the meter fill, the native control accent.
- **Paper 2** (paper-2): secondary text on black: the hero lede, bullet points, unselected segments, footer links, nav link hover.
- **Paper 3** (paper-3): quiet text on black: stack lines, labels, captions, demo head bands, inactive tabs, unticked rows.
- **Rule Dark** (rule-dark): every hairline on black and the outline button there.
- **Surface Dark** (surface-dark): the demo panel body.
- **Fill Dark** (fill-dark): rows, the segment track and the meter track. Row hover raises it to white at 0.1 alpha.
- **Shell** (shell): the laptop's lid and deck, in near-black greys from `#2c2c2f` to `#121213`.

### Named Rules
**The Shimmer Colour Rule.** Pink and purple appear only in the text shimmer, the laptop display glow and the demo key figures (plus text selection). They are never a button, link, border, heading fill or hover colour.

**The Green Dot Rule.** Steady Green is only ever an 8px dot that reports a state.

## Typography

**Display Font:** Host Grotesk (with system-ui), weights 300 to 500 loaded
**Body Font:** Host Grotesk
**Mono Font:** Fragment Mono (with ui-monospace)

**Character:** One grotesk does almost everything, light and tight when large, regular when small. The mono is the voice of the instruments.

### Hierarchy
- **Display** (h1): the hero headline, centred, max 15em.
- **Headline** (h2): project names and the Mist panel heading.
- **Statement**: the About paragraph, max 23em.
- **Footer Name**: the name at the foot of the page, one line, as large as the width allows.
- **Title**: the host name in the ScreenLink demo.
- **Lede**: the hero lede (max 30rem, Paper 2), the project pitch and the Mist paragraph. The hero lede drops to 16px on 24px under 720px.
- **Body**: base text and bullet points.
- **Control**: button text. The wordmark is the same weight at 18px.
- **Link**: nav links, project tabs, footer links, the "Source is private" note.
- **Detail**: the stack line and text inside demos.
- **Label**: labels, demo head bands and captions. Never uppercase, never tracked out.
- **Value**: numbers, sizes and addresses in demos, tabular numerals.
- **Figure**: each demo's key figure in pink, 24px under 420px.

h1 and h2 share weight 300, negative tracking and balanced wrapping. Paragraphs and list items use pretty wrapping.

### Named Rules
**The Mono Is Values Rule.** Fragment Mono is used only for values inside demos and for the whole ComputerCraft terminal demo. Labels, links and prose stay in Host Grotesk.

**The No Kicker Rule.** No kicker or eyebrow label sits above a heading. Metadata goes below: the stack line follows the project name.

## Layout

The page reads top to bottom: nav band, hero, stage, About, footer.

- **Wrap:** content capped at 1408px with 24px gutters (nav, stage, About, footer).
- **Nav band:** 72px tall on black (64px under 720px), extended edge to edge with a spread box-shadow and clip-path. Wordmark, section links (hidden under 720px), then LinkedIn and a solid GitHub button. It scrolls away.
- **Hero:** with motion and JavaScript, 320vh tall with a 100vh sticky frame. Over the first half of its scroll the lid opens (eased with a cubic out); over the second half the laptop scales about the display's centre until the display covers the viewport by 10% and squares up to the camera. The headline overlays the scene and fades out over the first 12%. At rest (no motion or no JavaScript) the hero is one screen tall with the headline above an open laptop.
- **Laptop size:** `min(84vw, 80vh, 880px)` wide, lid aspect 1.545, with room below for the deck.
- **Stage:** below the pin breakpoint the three projects stack with 96px padding (72px under 720px), hairlines between them and the demo 48px under the text.
- **Pinned stage:** at least 1024px wide and 720px tall, with JavaScript. The stage is 490vh with a sticky 100vh frame: a 64px tab row on a hairline, then the projects stacked in place, one shown at a time. Each project is a 6fr/5fr grid with a 72px gap, demo left and text right. With motion, the stage starts 100vh early (overlapping the hero by one screen) so the first demo appears where the display was, and it fades in once the stage is live.
- **About:** a 16px inset column (8px under 720px) of two 12px panels with a 16px gap: the statement on white, then the Mist links panel.
- **Footer:** black, 48px top and 24px bottom. Links, then the name 64 to 176px below.

Spacing steps in use: 4, 8, 12, 16, 24, 32, 48, 72 and 96px. Text columns are capped at 34rem (pitch, points, Mist paragraph) and 30rem (hero lede). Breakpoints: 720px, 420px, and the pin condition of 1024 by 720.

## Elevation & Depth

Surfaces are flat and separated by tone and hairlines. Depth exists in two places, both in CSS 3D:

- **The laptop:** a `preserve-3d` model under 1800px perspective. The lid hinges from its bottom edge (-90deg shut, +6deg past upright when open, squaring up during the zoom), the deck lies flat behind it with a keyboard drawn as repeating gradients and an outlined trackpad, and a front lip stands up from the deck's near side. Only the lid's inner face shows the display (`backface-visibility: hidden`). Lid and deck carry a faint white hairline and a vertical shell gradient.
- **The tilted demos (pinned stage only):** each demo panel arrives centred with `perspective(1600px) rotateX(10deg) scale(1.04)`, then moves to its column with `rotateY(11deg) rotateX(2deg)`. Its near edge is drawn with a stack of five 1px offset box-shadows in falling greys, standing in for panel thickness.

The display glow is a 115deg pink to purple gradient whose opacity follows the lid opening and falls to zero over the first 40% of the zoom.

## Shapes

Two corner sizes: 12px for panels (About panels, demo panels) and 8px for controls (buttons, rows, segment track, skip link). Nested parts step down: 4px for a segment and the focus ring, 2px for the meter. The laptop lid and deck round at 2.2% of its width. The status dot is a circle.

Lines are 1px solid hairlines: Rule on light, Rule Dark on black. Bullets are 8px by 1px dashes. The active tab gets a 1px Paper line on the tab row's hairline. Checkboxes, radios and the range input are native controls tinted Paper.

## Components

### Buttons
- **Shape:** 8px corners, 44px tall, 20px side padding, 15px medium text, optional 16px trailing arrow icon with an 8px gap.
- **Outline:** no fill, inherited text colour. Border is Rule on light surfaces and Rule Dark on black; hover brings it to the text colour.
- **Solid:** black with white text on light surfaces (hover `#323232`); Paper with black text on black (hover `#d4d4d4`). One solid button per group at most.
- **Active / Focus:** active scales to 0.98 (off under reduced motion). Transitions run 160ms on the shared easing. Focus is a 2px outline in the current text colour, 3px off.
- **In a demo:** 36px tall with 16px padding (the Connect toggle).
- **Note:** where an action is missing, a 44px line of Paper 3 text with a lock icon ("Source is private"). Not a control.

### Navigation
- **Nav band:** 15px links on black with a 44px hit height; hover is Paper 2.
- **Project tabs:** pinned stage only. 15px Paper 3 text on a 64px line with a 32px gap; hover and current (`aria-current`) are Paper, and current gets the 1px Paper underline. Clicking a tab scrolls just past that project's 30% mark so it arrives with its text showing.
- **Footer links:** 15px Paper 2, hover Paper, 44px hit height.
- **Skip link:** white with black text, 8px corners, top left on focus.

### Laptop (signature)
Decorative and `aria-hidden`. Lid (shell gradient, display inset 2.2% / 1.6% / 3%), deck (keys, trackpad), front lip. Driven by custom properties `--open`, `--zoom`, `--s` and `--fade`, set by site.js from the hero's scroll progress. Defaults are lid open, no zoom.

### Text shimmer
Applied to `.reveal` elements (h1, hero lede, Mist heading and paragraph, footer name) and to each project's h2, paragraphs and list. The text is clipped to a 100deg gradient (current colour, then pink at 42%, purple at 52%, transparent at 62%) sized 300% wide; it starts showing the transparent end and slides over 1300ms to the solid current colour, staggered 110ms per line. It runs once, when an IntersectionObserver sees 20% of the element or when a pinned project opens.

### Statement
The About paragraph's words light from Ink Dim to Ink as it scrolls from 85% to 45% of the viewport, with a 400ms colour transition. Only with motion; otherwise it is plain Ink.

### Demo panel
A working sample of the app's interface inside a `figure`.
- **Body:** Surface Dark, 12px corners, Rule Dark border, 24px padding (16px under 420px), 16px gap, 14px text with tabular numerals.
- **Head band:** app name and context in 13px Paper 3 over a hairline.
- **Foot band:** a hairline above, the labelled key figure left, a status or action right.
- **Key figure:** 13px label over a 32px mono value in pink.
- **Caption:** 13px Paper 3 below the panel, beginning "Fig. n · Illustration with sample values", then what to operate.

The three panels:
- **Cleaner rows:** five 40px Fill Dark rows, 8px corners, 4px gap, each a label wrapping a native checkbox, a status dot, a name and a mono size. Unticking dims the row and dot to Paper 3 and re-adds the total.
- **Refresh rate:** a four-part radio track (Fill Dark, 8px, 4px padding) with 36px segments at 4px. Selected is Paper with black text. Choosing one rewrites the stream figure. Connect toggles to Disconnect (`aria-pressed`) and Paired to Streaming.
- **Reactor terminal:** all Fragment Mono. Efficiency figure, a 4px meter, a two-column reading list over a hairline and a full-width range input for the control rods. Every 500ms, once 1.2 seconds have passed since the last input, the controller steps the rods toward 42: by 4 when more than 8 away ("Coarse"), otherwise by 1 ("Fine-tune").

### Pinned project sequence
For each project: the demo arrives centred over the empty text column, tilted up. At 30% of that project's share of the stage scroll it slides left over 900ms and turns toward the text; the text shimmers in; the buttons fade in over 600ms after a 600ms delay. Projects cross-fade over 400ms.

## Motion

One easing curve, `cubic-bezier(0.22, 1, 0.36, 1)`. State changes 160ms, meter 300ms, statement words 400ms, project cross-fade 400ms, stage fade 500ms, button fade 600ms, demo slide and turn 900ms, shimmer 1300ms. Smooth scrolling is on with motion.

Under `prefers-reduced-motion: reduce`: the hero is not pinned and the laptop rests open, there is no shimmer, the statement is not split into words, and transitions on the meter and press scale are off.

### Named Rules
**The Motion-Only Hidden State Rule.** A hidden or transparent start state exists only when motion is welcome. Without motion, every piece of content is visible from the start.

## Do's and Don'ts

### Do:
- **Do** keep the page black and white, and let pink and purple arrive only through the shimmer, the display glow and the demo figures.
- **Do** build a new showcase as a demo panel: Surface Dark, 12px corners, Rule Dark hairline, head band, labelled key figure, caption below.
- **Do** make a demo operable with native inputs tinted Paper and keep its starting state in the markup. It must stay operable when tilted.
- **Do** caption every demo "Fig. n · Illustration with sample values". Demo values are labelled samples.
- **Do** use 8px corners for controls and 12px for panels, with 1px hairlines.
- **Do** set large type in Host Grotesk at weight 300 with negative tracking.
- **Do** keep hidden start states inside `prefers-reduced-motion: no-preference`.
- **Do** keep page-level links and buttons at a 44px hit height.

### Don't:
- **Don't** use pink or purple as a button, link, border, hover or resting text colour.
- **Don't** use Steady Green as anything but the 8px status dot.
- **Don't** put kickers or eyebrow labels above headings.
- **Don't** set labels, links or prose in Fragment Mono.
- **Don't** run the shimmer more than once on an element; it settles to solid colour.
