---
name: Corporate Trust Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464555'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#712ae2'
  on-secondary: '#ffffff'
  secondary-container: '#8a4cfc'
  on-secondary-container: '#fffbff'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#eaddff'
  secondary-fixed-dim: '#d2bbff'
  on-secondary-fixed: '#25005a'
  on-secondary-fixed-variant: '#5a00c6'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-section:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-card:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  section-padding: 96px
  card-padding: 32px
---

## Brand & Style
The design system is engineered for a professional personal portfolio that balances enterprise-grade reliability with the vibrant energy of modern SaaS. The aesthetic is rooted in **Corporate Modernism** with a high-fidelity finish. It avoids the dryness of traditional corporate design by employing dimensional depth, purposeful gradients, and fluid background elements. 

The emotional goal is to evoke "Innovative Competence"—the feeling that the work is technically rigorous but creatively inspired. The UI uses a "Glass-on-Canvas" metaphor, where stark white surfaces float over a soft, muted slate background, punctuated by energetic indigo-to-violet accents. 

**Visual Principles:**
- **Dimensionality:** Use of tinted shadows and hover-state lifts to create a tangible physical hierarchy.
- **Abstract Representation:** Strictly no raster imagery. Brand identity and project visualization rely on geometric patterns, sophisticated monograms, and vector-based compositions.
- **Precision:** High attention to stroke weights (2px) and generous whitespace to signify premium quality.

## Colors
The palette is anchored in the **Slate** scale for structural elements, providing a neutral, stable foundation. The **Indigo-to-Violet** gradient serves as the primary driver of action and focal points, representing the "vibrant" aspect of the brand philosophy.

- **Primary Gradient:** A linear 135° gradient from `#4F46E5` to `#7C3AED` should be used for hero buttons, active states, and key decorative accents.
- **Background Strategy:** The page background is kept at a very light slate (`#F8FAFC`) to allow white surface cards (`#FFFFFF`) to pop with a subtle contrast.
- **Functional Accents:** Use Emerald (`#10B981`) sparingly for positive indicators, such as "Available for Work" badges or success states.
- **Gradients Blobs:** Use low-opacity (10-15%) blurred circles of Indigo and Violet in the background to break the grid and add organic movement.

## Typography
The typography relies exclusively on **Plus Jakarta Sans** to maintain a modern, friendly yet professional voice. 

- **Weight Hierarchy:** Use *ExtraBold (800)* for top-level hero statements to command attention. *SemiBold (600)* is reserved for section headers and UI titles to ensure scannability. *Regular (400)* is used for all body text.
- **Readability:** A generous line height of 1.6 is applied to body text to facilitate long-form reading on technical case studies.
- **Special Formatting:** Use the `label-caps` style for small eyebrow text above headlines or for section tags to add a "designer" touch to the information architecture.

## Layout & Spacing
The layout follows a **Fixed Grid** approach for desktop, centering content within a 1200px container to maintain a clean, organized "corporate" feel.

- **Grid System:** A 12-column grid is used for desktop. Components like project cards should typically span 4 or 6 columns.
- **Rhythm:** An 8px base unit drives all spacing. Consistent vertical rhythm is maintained with 96px gaps between major sections to provide "breathing room" and emphasize the premium nature of the content.
- **Mobile Adaptation:** On mobile, margins shrink to 20px, and the 12-column grid collapses to a single-column flow. Headers scale down significantly to ensure they don't dominate the viewport.

## Elevation & Depth
Elevation in this design system is conveyed through a combination of **Tonal Layers** and **Indigo-Tinted Shadows**.

- **Surface Levels:** 
  - Level 0: Page Background (`#F8FAFC`).
  - Level 1: Main Cards/Content Blocks (`#FFFFFF`).
- **Shadows:** Avoid pure black/gray shadows. Use a soft, diffused shadow with an Indigo tint (`hex: #4F46E5`, alpha: 8-12%).
- **Interactive Depth:** When a user hovers over a card or interactive element, apply a `translate-y-[-4px]` transform and increase the shadow's blur and spread. This creates a "hover lift" effect that signals interactivity.
- **Glassmorphism:** Use background-blur (12px to 20px) on navigation bars and modal overlays to maintain context while focusing the user's attention.

## Shapes
The shape language is sophisticated and approachable. 

- **Cards:** Use `rounded-xl` (12px) for all primary content containers.
- **Form Controls:** Inputs and smaller interactive components use `rounded-md` (8px).
- **Buttons:** Primary call-to-actions use a `rounded-full` (pill) shape to stand out against the more structured rectangular cards. Secondary buttons may use `rounded-lg` (8px).
- **Icons:** Use Lucide-style icons with a 2px stroke weight and rounded joins/caps to match the typography’s soft geometric nature.

## Components
- **Buttons:** 
  - *Primary:* Gradient background (Indigo to Violet), white text, pill-shaped, strong indigo shadow.
  - *Secondary:* White background, 1px slate-200 border, slate-900 text, no shadow.
- **Project Cards:** White background, 12px radius, subtle border. On hover, the border color shifts to Indigo and the card lifts.
- **Chips/Badges:** Small, `label-sm` text, light indigo tint background (5% opacity) with dark indigo text.
- **Input Fields:** 1px border (`#E2E8F0`), transitions to 2px Indigo border on focus with a soft indigo outer glow (ring).
- **Abstract Placeholders:** For "images," use 45-degree CSS stripes, nested geometric circles, or monograms in the primary gradient. Avoid any photography or realistic illustrations.
- **Lists:** Use custom bullet points (small 4px indigo squares) instead of standard browser circles.