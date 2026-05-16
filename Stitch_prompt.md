# Stitch Prompt — Personal Website Wireframes / High-Fidelity Prototype (English)

Copy everything below into Stitch as your generation prompt.

---

## Role & Objective

You are an expert frontend engineer, UI/UX designer, visual design specialist, and typography specialist. Produce a **prototype** (interactive or multi-frame) for a **personal portfolio / personal homepage website** titled **Personal Website Construction** in intent: it should **showcase works** and make it easy for visitors to **contact the owner**.

**Deliverable**: A cohesive **prototype** across **four pages**. Use **Corporate Trust** (defined below) as the **exclusive visual language**. The prototype must feel **premium, trustworthy, and modern-enterprise**, not generic template UI.

---

## Mandatory Content & Information Architecture (from product brief)

- **Site purpose**: Personal homepage; emphasize **portfolio / works showcase** + **contact me**.
- **Brand mark**: Logo is a capital letter **“L”** (treat as a typographic/wordmark badge; **no illustrative logo raster**).

### Pages & required elements

1. **Home (`/` or “Home”)**
   - Header: **`L`** logo plus **navigation fixed to the top-right**.
   - **Hero headline** (exact copy): **`SHE HERE IS JINNY`**
   - Primary CTA beneath hero: **`Contact Me`** (label may also show Chinese **`联系我`** alongside if you localize UI labels—keep headline in English exactly as written).
   - Layout should be readable, spacious, responsive.

2. **About Me (“About”)**
   - **Creative freedom** on structure: tell a credible personal story section with placeholders for bio, highlights, timeline, skills—**no real personal data**.
   - **No photography**: use abstract shapes / icon placeholders / gradient panels instead of portraits.

3. **Contact (“Contact”)**
   - **No avatar / profile photo**: replace with **abstract placeholder** (e.g., initials **`J`** in an icon capsule, geometric glyph, or simple monogram)—**not a face**.
   - List **contact methods** as labeled rows/chips/pills (**text-first**): **WeChat**, **Phone**, **Xiaohongshu (Little Red Book)**. Use harmless placeholder strings like `your.wechat.id`, `+1 (000) 000-0000`, `@username`.

4. **Works / Portfolio (“Works”)**
   - **Creative freedom** on portfolio layout (grid/list/cards). Each item is a **generic project card**: title + short blurb + tags + pseudo metrics (e.g., “Role”, “Year”)—**no cover art photos** (use monochrome blocks, glyphs, wireframe rectangles, subtle patterns).

---

## Navigation & Routing Behavior

- **Navbar position**: Fixed **top-right** cluster (within a full-width header that still aligns to a standard page container/gutters—do **not** center-primary-nav; primary nav anchors live on the **right**).
- **Nav items**: **Home**, **About Me**, **Contact Me**, **Works** (clear active state styling).
- **Navigation model**: Classic multi-page framing (distinct screens/sections). Clicking nav items switches views.
- **Page transition**: **Fade in / fade out** between views (smooth opacity crossfade ~200–400ms—refined motion, never flashy).
- **Scrolling effects**: **None** requested—**avoid parallax**, sticky gimmicks beyond the fixed nav, or scroll-jacking.

---

## Visual Design System — “Corporate Trust” (must follow)

**Philosophy**: Modern enterprise SaaS aesthetic—**trustworthy yet vibrant**, **dimensional depth** (colored shadows, subtle pseudo-3D), **purposeful gradients** (indigo → violet signature), polished micro-interactions, generous whitespace.

### Tokens — Light Mode (default)

| Token | Hex / usage |
|------|----------------|
| **Page background** | `#F8FAFC` (Slate 50) |
| **Surface / cards** | `#FFFFFF` |
| **Primary** | `#4F46E5` (Indigo 600) |
| **Secondary / gradient end** | `#7C3AED` (Violet 600) |
| **Text main** | `#0F172A` (Slate 900) |
| **Text muted** | `#64748B` (Slate 500) |
| **Accent positive (optional sparingly)** | `#10B981` (Emerald 500) |
| **Border** | `#E2E8F0` (Slate 200) |

### Typography

- **Font**: **Plus Jakarta Sans** everywhere (simulate with closest system fallback in preview if unavailable, but spec the family).
- **Hierarchy**: Strong display weight for hero (ExtraBold/Bold headline feel), SemiBold section titles, Regular body (~1.6–1.7 line height).
- **Headline finesse**: Slight tight tracking on large headlines.
- **Gradient text rule**: Strategic **indigo→violet** gradient clip on emphasized words (respect contrast; pairing with solid supportive text elsewhere).

### Shapes & borders

- **Radii**: `12px`-class for cards (`rounded-xl`), `8px` for controls, primary buttons **`rounded-full` or `rounded-lg`**.
- **Borders**: 1px Slate-200-ish dividers.

### Signature effects (must appear somewhere tastefully)

1. **Colored shadows** (NOT neutral gray-only): subtle **indigo-tinted** elevation on cards and primary button.
2. **Soft blurred gradient “blobs”** in backgrounds (large, low-opacity, blurred orbs layering depth).
3. **Hover lift**: cards **translate up slightly** + **stronger tinted shadow**; buttons **tiny lift**.
4. **Optional subtle pseudo-isometric framing** on a hero “showcase plate” panel (tiny rotate-x/y—keep subtle, professional).

### Buttons

- **Primary CTA (“Contact Me”)**: **Indigo→Violet gradient** fill, white label, tinted shadow; hover lifts slightly.
- **Secondary**: White surface, Slate border, Slate-700 label; hover to Slate-50.

### Cards / inputs patterns

- **Cards**: White, `rounded-xl`, soft border + colored shadow baseline; heightened shadow on hover.
- If you include contact form fields later: classic corporate inputs (`rounded-lg`), indigo ring on focus (**do not invent extra fields unless they support the listed contact channels**).

### Iconography style

Use **minimal stroke icons** consistently (conceptually **`lucide-react` aesthetics**: ~2px stroke, rounded joins). Decorative icons only—**no raster social brand marks** unless you render them as monochrome simple glyphs—but **prefer generic icons** paired with labels.

---

## Interaction & Animation Spec

- **Transitions**: Prefer **`transition-all duration-200`** class feel for hovers (ease-out temperament).
- **Page switch**: Mandatory **fade in/out**.
- **Loading concept** (between route changes or global first paint): **Retro CRT / vintage TV warmup** motif—quick scanlines, slight vignette shrink, monochrome noise burst resolving into clean Corporate Trust UI. Keep it **short (≤900ms perceived)** and optionally **suppress or simplify under reduced-motion** semantics.
- **Mouse effects**: unspecified—if any, stay minimal (e.g., subtle button glow)—**no gimmicky trailing particles**.
- Respect **accessible focus rings** (`focus-visible` indigo ring + offset mentally).

---

## Responsive & Layout Rules

- **Mobile-first**, then **`sm/md/lg/xl`** breakpoints (640 / 768 / 1024 / 1280).
- **Main container**: around **`max-width ~1280px`** with **`px-4 sm:px-6`** gutters.
- **Hero**: Prefer **two-column on large**, stacked on mobile; maintain **solid typographic rhythm**.
- Minimum **44×44px** touch targets.
- Ensure **no horizontal overflow**.

---

## Hard Constraints — Assets & Imagery

- **Absolutely NO raster photos**, **NO realistic avatars**, **NO stock imagery**, **NO illustrated portraits**.
- Replace imagery with **vector UI**, **geometric placeholders**, **monogram typography**, subtle **patterns**, **`lucide`-style strokes**, tinted panels, blurred gradient blobs.
- **QR codes optional only as abstract bordered boxes** labeled “QR placeholder”—not real codes.

---

## Accessibility & Semantic Structure (conceptual)

- Logical heading ladder (`h1` once per screen).
- Landmark regions (`header/nav/main/footer`).
- Maintain **WCAG AA** contrast intentions for primary text combinations defined above.

---

## Output Expectations for Stitch

Create **four primary frames** (**Home**, **About**, **Contact**, **Works**) plus optionally:
- **`Home` scrolled state** showing next section teaser (still no forbidden imagery).
- **`Mobile`** variants for ≥2 breakpoints (at least **mobile 375–430** and **desktop 1440**).

Clearly annotate **interaction notes** overlays: **Fade transition**, **hover lift shadows**, **TV-style loader**, **fixed top-right navigation**.

Ensure the **overall look** unmistakably matches **Corporate Trust** (dual-tone gradients, Jakarta Sans, tinted shadows, luminous depth) rather than unrelated sci‑fi palettes.

---

## Optional One-Line Compression (if Stitch has tight token limits)

> Four-page personal site prototype (Home headline **SHE HERE IS JINNY** + Contact CTA **Contact Me**/联系我, About & Works creatively structured). Fixed **top-right** nav (**Home About Contact Works**). **Corporate Trust** visuals: Slate-50 BG, Indigo/Violet gradients, Plus Jakarta Sans, colored shadows, blurred gradient blobs, white elevated cards—**no raster photos or avatars** (abstract placeholders only). Transitions **fade in/out**. Add **retro TV scanline loader** motif. Responsive mobile-first containers.
