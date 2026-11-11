# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS with two small vanilla JS files (`site.js` for scroll, the laptop and the demos), no build step. Hosted on Vercel, deployed with the Vercel CLI (`vercel --prod`).

## Users

Two audiences, weighted equally:
- Recruiters and hiring managers for internships and jobs, skimming quickly to judge what Charlie can build.
- Other developers who might use or try the projects (WinFastCleaner users, Better Fusion Reactors players).

## Product Purpose

A personal portfolio for Charlie McNabb, a fourth-year computer science student at Colorado School of Mines focused on AI and robotics. It shows three projects: the two public repositories and one private app. Success means a visitor understands what each project does and follows through to GitHub (source, release, or profile) or LinkedIn.

## Positioning

The projects are real, working systems software: a Windows disk cleaner that reads the NTFS Master File Table directly, a PC-to-laptop game streaming app, and a Minecraft fusion reactor controller. The portfolio shows each one working instead of describing skills in the abstract.

Confirmed thesis (2026-10-30): careful systems software and feedback controllers. The Fusion Reactor Controller is framed as control-loop work, which is the evidence for Charlie's AI and robotics focus.

## Capabilities and Constraints

- Projects shown, in order: WinFastCleaner (Rust, public, v0.1.0 release), ScreenLink (Rust + Tauri + TypeScript, **private source**: never link to its repository), Fusion Reactor Controller (Lua, public).
- Not shown: the GitHub profile README repo and all other private repositories.
- Contact is GitHub (https://github.com/CharlieMcNabb1) and LinkedIn (https://www.linkedin.com/in/charlie-mcnabb) only. No email or other contact methods (updated 2026-10-30).

## Brand Commitments

Binding visual constraints from Charlie:
- Black and white for nearly everything, with a pink and purple shimmer that sweeps through text as it first appears, the laptop's display glow, and pink on each demo's key figure (changed 2026-11-10; the earlier green and sand panels and the ASCII mountains are gone).
- The start page is a space black laptop that opens and zooms into its screen as you scroll, landing on the projects. Each demo arrives centred, then slides left as its text shimmers in beside it, as on scale.com.
- A background that stands out.
- Demos the visitor can operate, on a stage that pins while the three projects swap.
- Clean overall look.
- Motion must respect `prefers-reduced-motion`.

## Evidence on Hand

- Project facts come from each repository's README (WinFastCleaner, ScreenLink, Better-Fusion-Reactor-Automation-Logic-Script).
- No screenshots, testimonials, download counts, or stars to cite. The demo cards contain illustrative mock values (file sizes, IP address, telemetry), not real measurements. Do not present invented numbers as real results.

## Product Principles

- Show the project working, not a list of skills.
- Every claim traces to a project README.
- Get a skimming recruiter to the three projects in one scroll.
- Respect the private repository: describe ScreenLink, never expose its source.
