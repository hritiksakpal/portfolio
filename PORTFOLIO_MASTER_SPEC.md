# Hritik Sakpal Portfolio — Master Homepage Specification

> **Status:** Locked baseline for the next homepage changes.
>
> **Important:** The supplied reference HTML is the visual/design source of truth. Do **not** redesign, restyle, reinterpret, or replace the visual language unless explicitly requested.

## 1. Homepage content requirements

The homepage must contain the following information from Hritik Sakpal's current resume/profile:

### Identity
- Name: **Hritik Sakpal**
- Profile image: use Hritik's actual profile image when the image asset is provided/available.
- Primary positioning: **Product Analyst / Business Analyst / Product Builder**
- MBA in **Business Analytics**
- BSc in **Information Technology**

### Projects
The homepage must prominently show:
1. **Notifying.in** — flagship / 0→1 product
2. **FreeSplit** — expense splitting/shared money management product
3. **MBA Solutions Hub** — education/content product
4. **Doctor Computer** — service/product experience
5. **CDigital Bundles** — supporting digital product work

Do not invent additional project features, metrics, outcomes, or responsibilities that are not supported by the resume/project evidence.

### Experience
The homepage must show the user's relevant professional experience, including:
- **Associate Product Analyst — Disclosure 360 Solution Pvt. Ltd.**
  - Oct 2025 – Apr 2026
  - Jira, Scrum meetings, product logic, PRD/product documentation, requirements/product workflows.
- Other resume experience can be shown in the background/experience section in a compact way, using the latest approved resume as the source of truth.

**Do not re-add Micra Circuit Systems.**

### Case studies
The homepage must contain a dedicated **Case Studies** area, with the main case-study projects centered on:
- Notifying.in
- FreeSplit
- MBA Solutions Hub

Case studies should communicate problem, product thinking, workflows/logic, decisions, and available evidence. Do not fabricate business metrics.

### Education
Show the education details from the approved resume:
- **MBA — Business Analytics**
  - Sinhgad Institute of Business Administration & Computer Application, Lonavala
  - Aug 2023 – May 2025
  - CGPA: 7.18 / 10
  - Minor: **Operations & Supply Chain Management (OSCM)**
- **BSc — Information Technology**
  - Use the exact institution, dates, percentage/CGPA and wording from the latest approved resume when the detailed education block is populated.

### Other resume details
Include relevant, recruiter-useful information from the approved resume, such as:
- Product skills
- Business analysis skills
- Product/analytics tools
- Certifications
- Leadership / extracurricular professional responsibilities
- LinkedIn / GitHub / email contact

Do not overload the homepage. Details should be organized into clear sections.

## 2. REFERENCE HTML DESIGN — SOURCE OF TRUTH

The supplied HTML is a clean, modern product-portfolio design with these characteristics:

### Global visual system
- Background: #f7f7f4
- Surface/cards: #ffffff
- Main text: #161616
- Muted text: #656565
- Borders: #deded8
- Primary accent: #3f3cfa
- Accent soft: #ecebff
- Dark CTA: #151515
- Rounded cards: 24px
- Main max content width: 1160px
- Main width behavior: min(1160px, 92vw)
- Soft card shadow: 0 18px 60px rgba(0,0,0,.08) where appropriate
- Font family in the reference: **Inter**, with system fallbacks.

### Header / navigation
- Sticky header.
- Height: approximately 72px desktop, 64px mobile.
- Semi-transparent light background with backdrop blur.
- Thin bottom border.
- Left: **Hritik Sakpal** wordmark/name.
- Right: simple text navigation.
- Reference navigation: Work, Approach, Experience, Contact.
- Keep navigation minimal and horizontally aligned.

### Hero
Reference structure:
1. Small rounded status badge with a green status dot.
2. Very large headline.
3. Supporting paragraph.
4. Action buttons.
5. Skill/product-focus pill strip.

Reference headline: **Product thinking for real-world problems.**

The exact copy can be updated later, but the **layout, hierarchy, spacing, scale and visual treatment must remain based on this reference HTML**.

### Primary button language
- Dark filled button.
- White/light text.
- Rounded corners around 13px.
- Secondary buttons are white/light with a subtle border.
- Buttons have restrained hover movement.

### Capability strip
- Small rounded pills.
- White surface.
- Light border.
- Compact typography.
- Example capabilities from reference: Product Discovery; PRDs & User Stories; Jira / Agile / Scrum; Business Analysis; Product Analytics; UX & Workflows.

### Featured work section
Reference pattern:
- Section kicker in uppercase accent color.
- Large section heading.
- Supporting section description.
- Grid/card system.
- Featured project cards use a split layout: left = project content, right = product visual/system visualization.
- Cards have white surface, light border and rounded 24px corners.

### Notifying.in
This should remain the strongest/flagship homepage project.

Reference content structure:
- “Flagship case study” kicker
- Notifying.in title
- Concise product explanation
- Tags
- Visit product button
- Case study button
- Visual panel on the right

The visual should look like a **product/system visualization**, not a generic decorative graphic.

### Other projects
Use the same visual language and card system for FreeSplit, MBA Solutions Hub, Doctor Computer and CDigital Bundles.

The hierarchy can vary by importance, but the styling must remain consistent with the reference HTML.

### Case-study cards
Reference case-study pattern:
- Rounded white card.
- Section kicker.
- Large case-study title.
- Short problem/product summary.
- Four-column stat/information row on desktop.
- On smaller screens, columns collapse naturally.

The four information blocks should be factual and project-specific, e.g. Problem, User, Core loop, Systems, Product lens, Artifacts, Success criteria, Monetisation.

Only include information supported by actual project work.

### Product approach
Reference structure:
- Section kicker: “03 / Product approach”
- Large heading: “How I work.”
- Short explanation.
- Five-step process cards: 01 Understand; 02 Analyse; 03 Define; 04 Build; 05 Measure.

This is part of the reference design and can remain on the homepage after the core resume content has been integrated.

### Experience section
Reference layout:
- Section heading and description.
- Main experience card.
- Individual role rows.
- Date aligned separately.
- Supporting detail cards can sit beside the primary experience card.

The layout should be simple, recruiter-readable and not visually crowded.

### Education section
Education should use the same card/grid visual language as Experience. Do not create a completely different visual theme for education.

### Skills / credentials
The reference uses compact list cards. Use these for Product, Analysis, Tools, Certifications and Leadership.

### Contact / CTA
Reference:
- Full-width dark rounded card.
- Large headline.
- Short recruiter-facing message.
- Email and LinkedIn buttons.

### Footer
- Minimal.
- Thin top border.
- Copyright + product-role positioning.
- No excessive links.

## 3. Responsive behavior — keep the reference behavior

Desktop:
- 1160px maximum content width.
- 12-column/card grid where used.
- Large hero headline.
- Split project visuals.

Tablet:
- Project split layouts collapse to one column.
- Multi-column supporting layouts reduce cleanly.

Mobile:
- Navigation becomes minimal/hidden as in the reference.
- Hero typography scales down.
- Project cards become one column.
- Case-study stat grids collapse.
- Experience rows stack.
- No horizontal overflow.

## 4. Typography rule

For the next implementation, the reference HTML's typography is the baseline:

**Primary site font: Inter**

Use it consistently across headings, body copy, nav, buttons, project metadata, tags, cards and footer.

Do **not** introduce an editorial serif font, mono-heavy typography system, Swiss-style typography, or another redesign unless explicitly requested.

The supplied HTML currently uses the Inter/system fallback stack.

## 5. Design rules for future changes

### DO
- Preserve the exact reference HTML's visual direction.
- Preserve spacing rhythm and rounded card language.
- Preserve the light neutral background.
- Preserve the blue/purple accent.
- Preserve the clean recruiter-friendly hierarchy.
- Integrate the resume information into this design.
- Use real project evidence.
- Use Hritik's actual profile image once supplied.
- Keep the homepage visually polished but easy to scan.

### DO NOT
- Do not return to the previous cream/black editorial serif design.
- Do not add heavy 3D effects.
- Do not add unnecessary animations.
- Do not use decorative visuals that overpower the content.
- Do not invent achievements or metrics.
- Do not add Micra Circuit Systems.
- Do not make Hritik appear to have held a Product Manager title when the actual title was Product Analyst / Associate Product Analyst.
- Do not replace the reference HTML with a completely different layout.

## 6. Current implementation instruction

Before making the next visual/content changes:
1. Treat the supplied reference HTML as the **master visual template**.
2. Rebuild/adapt the portfolio homepage around that exact design language.
3. First integrate: Name, Profile image, Projects, Experience, Case Studies, Education and other important resume details.
4. Only after that should additional visual refinement be considered.
5. Any future change should be judged against the supplied HTML screenshot/design, not against the older portfolio versions.

## 7. Reference source

The supplied HTML contains the exact baseline styling, layout, responsive rules and initial content structure. Its core design declarations include the light neutral palette, 1160px content width, Inter typography, sticky navigation, hero, 12-column card grid, rounded project cards, case-study blocks, five-step process, experience/education cards, CTA and footer. fileciteturn71file0L14-L30

The corresponding HTML structure defines the homepage order as navigation → hero → featured work → selected work → case studies → product approach → experience/education → skills/credentials → contact → footer. fileciteturn71file0L33-L90

## 8. Locked decision

**For this portfolio iteration, the supplied HTML is the design source of truth.**

Content should change to accurately represent Hritik Sakpal.

The design should **not** change unless the user explicitly asks for a design change.