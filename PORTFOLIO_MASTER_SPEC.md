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

## 9. CURRENT CODE LOCK — 2026-09-22

The current portfolio code is the active implementation baseline. Future changes must start from the latest version of these files and must not revive older portfolio designs.

### Current source-of-truth files
- index.html — current homepage implementation and SEO/entity markup.
- assets/profile.jpg — canonical personal profile image source for the homepage.
- robots.txt — public crawler access policy and sitemap reference.
- sitemap.xml — canonical homepage sitemap.
- llms.txt — optional machine-readable portfolio summary for services that support it.
- .github/workflows/indexnow.yml — automatic IndexNow URL notification on main-branch changes.

### Current index.html implementation lock
- Current design remains the light reference-based system already approved by the user.
- Do not redesign the visual system unless explicitly requested.
- The profile photo source is assets/profile.jpg?v=2 with a GitHub avatar fallback only when the local file is unavailable.
- The page includes canonical URL, robots directives, Open Graph/Twitter metadata, and Schema.org ProfilePage, Person and WebSite entities.
- The canonical site URL for this GitHub Pages iteration is https://hritiksakpal.github.io/portfolio/.

### Current Git blob identifiers at lock time
- index.html: d4ae6da722bbf55cc567cdb72825e62f8724a528
- styles.css: 81a7d7128c6b7f2133c37b40ad66df5ca7184582
- script.js: 13b1dc8512bd9974781fd03fe54404b54cfb7cb2

These identifiers are reference markers, not substitutes for fetching the latest file state before editing. Always fetch the current file and use its latest SHA for subsequent GitHub edits.

## 10. SEARCH / AEO / GEO IMPLEMENTATION LOCK

The goal is to maximize legitimate discoverability for searches around Hritik Sakpal, Product Analyst, Business Analyst, Product Analyst portfolio, Product Management portfolio, Associate Product Manager / APM, product case studies, product analytics, PRDs, Jira, Agile/Scrum, UX workflows, and Hritik's named products.

The implementation must prioritize:
- people-first, first-hand portfolio content;
- strong entity identity and consistent official profile links;
- clear semantic page structure and descriptive headings;
- crawlability and indexability;
- canonicalization and sitemap hygiene;
- accurate structured data based only on facts shown on the page;
- high-quality project screenshots and case-study evidence;
- internal linking when additional case-study pages are created;
- Search Console and Bing Webmaster monitoring after deployment.

Do not use hidden keyword blocks, keyword stuffing, doorway pages, mass near-duplicate pages, fake mentions, fabricated metrics, or other ranking-manipulation tactics.

Google's current guidance explicitly states that SEO fundamentals remain relevant to generative AI search, that useful non-commodity content matters, and that indexing/serving are not guaranteed. Google also states that llms.txt is not used for Google Search ranking, although it may be maintained for other systems. OpenAI's current publisher guidance says public websites can appear in ChatGPT search and should not block OAI-SearchBot when they want content to be discovered and cited.

## 11. SEARCH VISIBILITY REALITY CHECK

No code or SEO configuration can guarantee that this portfolio will rank first for every query, on every platform, in every country, for every user, or in every AI system. Rankings depend on each platform's own crawling, indexing, relevance, quality, authority and personalization systems.

The operational target is to make the site technically eligible, semantically unambiguous, easy to crawl, rich in genuine first-hand evidence, and consistently connected to Hritik Sakpal's official identities across the web.


## 12. NOTIFYING.IN CASE STUDY — SCREENSHOT EVIDENCE LOCK

The Notifying.in case-study page now includes real product screenshots captured from the public product and admin system.

### Screenshot groups
- Public homepage — explains the product and gives users clear actions.
- State-filtered public events — shows state filtering, event category, dry-day status and applicability.
- Mobile homepage — shows the responsive public experience.
- Mobile notification opt-in — shows the permission/value explanation before subscription.
- Admin dashboard — shows events, notifications, delivery, traffic and audience/device information.
- Event Management — shows event search, filtering, creation and status controls.
- Event authoring — shows event details, dry-day handling, state targeting, notification text, links, images and live preview.
- Notification Logs — shows notification history and delivery results.
- Custom notifications — shows message creation, preview and audience/device checks.
- Ad Manager — shows ad inventory and Google AdSense controls.
- Ad inventory — shows ad type, placement, schedule, priority, status and actions.
- Ad targeting — shows state/category targeting, dates, priority and status.
- Ad setup — shows the ad-type and placement selection step.
- Ad content — shows headline, description, destination link, creative and preview.

### Caption language rule
Screenshot descriptions must use simple, direct language that a recruiter can understand quickly. Prefer plain words such as **shows, explains, lets the admin, choose, review, create, filter, send, track**. Avoid unnecessary technical jargon or long descriptions.

### Screenshot implementation
- The screenshots are embedded directly in notifying-in.html so the case study does not depend on separate image hosting.
- The gallery uses the existing case-study.css visual system: light background, white cards, 24px radius, restrained shadow, Inter/system typography, and responsive collapse.
- Do not replace the real screenshots with generic mockups where the screenshot is the evidence for a product claim.
- Do not expose private data, credentials, API keys, tokens or secrets in screenshots or case-study copy.

### Current case-study code markers
- notifying-in.html: 43a40e305031545827cdd388a338013cc83a6889
- case-study.css: 34ed1da4293a4848be90d87beb8905859a78598d
- Screenshots embedded: 14


## 13. MBA SOLUTIONS HUB — SCREEN / COPY LOCK

The MBA Solutions Hub case study must keep the product goal clear:

> **Help students find previous-year solved question papers so they can refer to them and study for exams.**

### Product-screen order
Use the main product screen first, then show the simple study flow:
1. **Main screen** — start with the exam material needed.
2. **Question paper list** — find previous-year papers in one place.
3. **Question paper** — open the paper and read the questions.
4. **Solution access** — choose how to view the solved answers.
5. **Unlock step** — complete a short access step to open the solution.

### Screenshot / screen-description language rule
All visible descriptions, captions and alt text for MBA Solutions Hub screens must be:
- short;
- plain English;
- easy for a recruiter to understand at a glance.

Prefer wording such as **find, open, read, view, choose, access, study, previous-year paper, solved answers**.

Avoid dense product jargon, long explanations, or clever marketing language.

### Content priority
- Previous-year solved papers and exam preparation are the **main product value**.
- Information architecture and navigation explain how students find the material.
- Monetisation is a **supporting business layer**, not the main purpose of the product.
