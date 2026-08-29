# Methodology

This is the binding method for the Casa Buena visual-improvement phase. It is
based on verified public Codex workflows: establish art direction first,
generate and reject visual concepts before coding, implement one approved
target faithfully, then compare the result against that target at fixed
viewports. A better prompt alone is not considered a design process.

The public brand is a reliable operational vehicle service, not a luxury or
aspirational automotive brand. Casa Buena s.r.o. is its legal operator, not the
public name. Design quality must come from an ownable idea, clarity, hierarchy
and exact execution—not glamour or a generic visual shorthand for reliability.

## Roles

- Jan is the art director and approval authority. He chooses or rejects visual
  directions and approves the complete visual specification before coding.
- Codex researches references, decomposes why they work, generates distinct
  options, records decisions, implements the approved option and runs visual
  and technical QA.
- `frontend-design` is a craft aid for typography, composition, hierarchy,
  motion and detail. It may not introduce a new direction after approval.
- `imagegen` may produce a bounded raster asset, texture or illustration after
  its role and composition are specified. It must not generate a complete page,
  choose the interface composition or typeset final copy. Full-page generative
  mock-ups repeatedly collapsed into recognisable template language.
- Concept surfaces are hand-authored as non-production HTML/CSS or another
  precisely controllable layout, then rendered at fixed viewports. They remain
  design targets, not production implementation.

## Non-negotiable sequence

### 0. Freeze the brief and truth boundary

Read `BRIEF.md`, `METHODOLOGY.md`, `STATE.md` and `HANDOFF.md`. Confirm the
business job, audience, conversion action, content constraints, technical
constraints and what must remain recognisably Casa Buena. Do not weaken the
service boundary to make a design concept easier.

Output: a compact design frame containing the job, audience, visual thesis,
anti-direction and measurable acceptance conditions.

### 0.5. Resolve brand architecture and public name

Treat Casa Buena s.r.o. as the legal operator. Define the customer-facing
category and naming brief, explore genuinely different naming territories, and
screen finalists for Czech/English pronunciation, meaning, category confusion,
obvious current web collisions and preliminary domain/trademark risk.

Do not claim legal clearance from a preliminary screen. Domain purchase,
trademark filing, company-name changes, DNS and email changes are separate
external actions.

Output: `BRAND_NAMING.md` with the naming brief, rejected patterns, candidates,
evidence, risks and one recommendation.

**Gate N — Jan selects the public brand or rejects the naming set. No new visual
direction is produced before this decision.**

### 1. Build a reference board by forensic decomposition

Collect a small, high-quality set of real references led by authentic physical
or operational artifacts from the service world, not by generic website
layouts. Category websites may validate information needs but may not supply
the composition. For each reference record:

- the exact element or principle worth borrowing;
- why it works for Casa Buena;
- what must not be copied;
- whether it applies to typography, composition, colour, imagery, interaction
  or information hierarchy.

References are ingredients, not templates. Do not copy one site wholesale and
do not use vague labels such as "premium" without concrete visual evidence.

Output: `REFERENCE_BOARD.md` and a viewable contact sheet or equivalent.

### 2. Explore materially different concepts before code

Use the approved name, content and constraints to produce two or three
high-fidelity desktop homepage directions. Hand-author the concept surfaces in
non-production HTML/CSS so composition and typography are intentional at every
layer. `imagegen` may supply only a named component asset. The directions must
differ in their central physical/operational metaphor, composition, typography,
image treatment and rhythm—not merely colour.

Each direction needs a one-sentence thesis, its artifact lineage, intended
emotional effect, strongest advantage, principal risk and explicit
anti-patterns. Reject generic dashboard cards, default gradients, arbitrary
rounded boxes, interchangeable sans-serif layouts, decorative motion, glossy
vehicle advertising, horizontal four-step process lines with catalog icons,
condensed all-caps display headlines and every luxury or exclusivity cue.

**Gate A — Jan selects one direction, requests a deliberate hybrid or rejects
all directions. No production code is written before this decision.**

### 3. Resolve the selected direction into a complete visual target

Create the mobile homepage, necessary section-level close-ups and the actual
image/texture/icon assets needed to judge the whole surface. Resolve navigation,
responsive hierarchy, real copy lengths, hover/focus states and reduced-motion
behaviour. A single attractive hero image is not a complete site design.

Record the approved system in `DESIGN.md`: type scale, fonts, grid, spacing,
colour tokens, image treatment, line and shape language, motion rules,
responsive changes, component anatomy, prohibited patterns and permitted
deviations from the mock-ups.

**Gate B — Jan approves the desktop and mobile visual target and `DESIGN.md`.
Only then may implementation begin.**

### 4. Implement the approved target faithfully

Treat the selected mock-ups and `DESIGN.md` as the source of visual truth. Use
the smallest production architecture that expresses them. Preserve semantic
HTML, accessibility, shared content structure, equivalent English and Czech
meaning, correct metadata and the direct-email conversion path.

Do not improvise a new aesthetic during implementation. If the approved target
is technically impractical or conflicts with the brief, stop at the exact
conflict and return to Gate B rather than silently simplifying it.

### 5. Run evidence-based visual QA

Capture the approved target and the implementation in the same states at fixed
desktop and mobile viewports, including at least 1440 × 900 and 390 × 844.
Compare them directly and maintain a prioritised mismatch log. Iterate on one
family of deviations at a time: composition and hierarchy first, then type and
spacing, then colour/assets, then motion and polish.

Also verify both language routes, real content overflow, keyboard focus,
contrast, reduced motion, responsive transitions, metadata, console output,
lint and the production build/test suite. An independent pass checks for
generic AI-design signatures, accessibility problems and fidelity drift.

**Gate C — Jan reviews the verified local desktop and mobile build. The design
is not approved merely because tests pass or a generated mock-up looks good.**

### 6. Keep deployment separate

Production deployment is a separate, explicit operator-approved action. Before
deployment, preserve the verified production baseline and state exactly what
will change. After deployment, repeat the fixed-viewport and functional checks
on the live hostnames before claiming completion.

## Drift controls

- Every working session starts by reading the four governing documents in
  Stage 0 and the current `REFERENCE_BOARD.md` or `DESIGN.md` when present.
- Accepted and rejected decisions are recorded immediately; rejected concepts
  are not quietly resurrected in later iterations.
- A rejected visual grammar is banned as a whole. Renaming its sections,
  changing its accent colour or combining fragments does not create a new
  direction.
- Each gate is explicit. Silence, partial praise or passing tests are not
  approval.
- New references after Gate A may solve a specific problem but may not replace
  the approved visual thesis without returning to that gate.
- Prompts must name concrete references, constraints and prohibited patterns;
  "make it more premium" is not an actionable direction and conflicts with the
  service position.
- Vehicles may appear only as the subject of work or evidence of service, not
  as objects of desire. Full-bleed glamour, dramatic studio light, magazine-
  cover automotive culture and prestige styling are prohibited.
- The process does not adopt a large third-party taste system wholesale.
  External systems supply tested principles; Casa Buena keeps its own art
  direction and truth boundary.
- Production website code, production assets and production state remain
  unchanged through Gate N and Stages 0–2 unless Jan explicitly changes the
  sequence.

## Completion standard

The phase is complete only when the built English and Czech pages preserve the
business truth, closely match the Jan-approved desktop and mobile targets,
survive the visual and technical checks, and pass Jan's review on the real
surface. Distinctiveness without fidelity, fidelity without usability, or
technical correctness without visual quality is incomplete.
