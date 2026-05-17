# Incomplete Request

_Started 2026-05-16 23:43 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "Cafe Soda"
Current date is now May 16, 2026
</system-info>

<default aesthetic>
If no references, art direction or design systems were provided, use this default professional modern, minimal aesthetic as a base. Declare your choice out loud so you stick to it. Guidance:
- Choose a type pairing from web-safe set or Google Fonts. Helvetica is a good choice. Avoid hard-to-read or overly stylized fonts. Use 1-3 fonts only.
- Foreground and background: choose a color tone (warm, cool, neutral, something in-between). Use subtly-toned whites and blacks; avoid saturations above 0.02 for whites.
- Accents: choose 0-2 additional accent colors using oklch. All accents should share same chroma and lightness; vary hue.
- NEVER write out an SVG yourself that's more complicated than a square, circle, diamond, etc.
- For imagery, never hand-draw SVGs; use subtly-striped SVG placeholders instead with monospace explainers for what should be dropped there (e.g. “product shot”)

CRITICAL: ignore default aesthetic entirely if given other aesthetic instructions like reference images, design systems or guidance, or if there are files in the project already.
</default aesthetic>

<pasted_text name="Pasted text (390 lines)">
# CAFE SODA — Website Design Prompt
### Drop this into any AI website builder, visual editor, or design tool (Framer, Webflow, Wix, Squarespace AI, Relume, Durable, etc.)

---

## THE BRIEF

Design and build a complete, production-ready website for **Cafe Soda** — a Vietnamese coffee shop located in Seattle, Washington's Little Saigon neighborhood (Chinatown–International District). The shop's name is a bilingual pun on *Cà Phê Sữa Đá* (Vietnamese iced milk coffee), cleverly anglicized to "Cafe Soda." The brand identity is **Traditional & Cultural** — deeply rooted in Vietnamese heritage, history, and aesthetics — while remaining welcoming and accessible to a broad audience including Vietnamese diaspora, general coffee enthusiasts, Gen Z consumers, and Pacific Northwest locals.

This is not a generic coffee shop website. Every design decision must communicate Vietnamese cultural depth, craft, and authenticity. Think of it as the "Cộng Cà Phê of Seattle" — immersive, story-driven, and visually unforgettable.

---

## BRAND IDENTITY

### Name
**Cafe Soda** (displayed in English)
Subline (always shown beneath the name): *Cà Phê Sữa Đá · Seattle*

### The Pun / Brand Story
The name "Cafe Soda" is a phonetic play on the Vietnamese phrase *Cà Phê Sữa Đá* (iced milk coffee). It's bilingual wordplay — the kind that makes both Vietnamese and non-Vietnamese customers smile. This pun is the heart of the brand and must be explained prominently on the homepage and the About/Story page.

### Brand Positioning
- **Vibe:** Traditional Vietnamese coffee culture meets the Pacific Northwest
- **Tone of Voice:** Warm, confident, poetic, culturally proud. Bilingual sprinkles throughout (Vietnamese phrases with English translations). Not ironic, not streetwear-coded. Think reverent and inviting.
- **Key Message:** "Every cup is a slow pour, a quiet ritual, a taste of Sài Gòn in the heart of Little Saigon."
- **Differentiator:** Seattle's only Vietnamese coffee shop that leads with cultural depth and the full tradition of *cà phê* — not just the drink, but the ritual, the history, and the meaning behind every cup.

---

## VISUAL DESIGN SYSTEM

### Color Palette
The palette is anchored in traditional Vietnamese cultural colors — lacquer red and imperial gold — with warm neutral backgrounds.

| Role | Color | Hex |
|---|---|---|
| Primary / Hero | Lacquer Red | `#B22234` |
| Primary Dark | Deep Red | `#8B1A1A` |
| Darkest Red | Ink Red | `#6B0F0F` |
| Accent / Gold | Imperial Gold | `#D4A017` |
| Gold Light | Bright Gold | `#F0C842` |
| Gold Pale | Parchment Gold | `#F5E8B0` |
| Background Light | Warm Cream | `#F8F2E4` |
| Background Mid | Rice Paper | `#EDE3CC` |
| Background Dark | Lacquered Ink | `#1A0A00` |
| Soft Body Text | Warm Brown | `#3D1A00` |
| Accent Secondary | Lotus Pink | `#E96A8D` |
| Accent Tertiary | Jade Green | `#2D7A5A` |

**Usage rules:**
- Dark sections (hero, menu, footer): use `#1A0A00` background with gold and cream text
- Light sections (story, intro): use `#F8F2E4` cream background with ink text
- Red sections (marquee strip, culture bar): use `#8B1A1A` or `#6B0F0F` background
- Never use pure white (`#FFFFFF`) or pure black (`#000000`) — always use the warm versions
- The Vietnamese flag's red and gold are referenced but never reproduced literally (avoid political connotation)

### Logo Mark — The Dragon-Lotus Hybrid
The centerpiece icon is a **custom emblem** where **lotus flower petals are arranged radially to form the silhouette of a Vietnamese dragon**. This is not two separate symbols — the lotus IS the dragon's body.

Design specs for the emblem:
- 8 elongated lotus petals arranged in a radial bloom, alternating red (`#B22234`) and gold (`#D4A017`) opacity, forming the dragon's outstretched body/wings
- A second inner ring of smaller petals in gold, forming the dragon's underbelly scales
- A **Vietnamese dragon head** (serpentine, not Chinese-style) emerging from the top-center of the lotus: elongated snout, curved horns (gold), glowing gold eyes with dark pupils and a tiny white gleam, flowing whisker tendrils extending outward
- The dragon's neck/body flows downward from the head into the center of the lotus bloom
- A golden center circle at the heart of the lotus (like the pollen center), glowing bright gold (`#F0C842`) — this is the coffee bean / sun symbol
- Concentric decorative rings in gold around the emblem, inspired by the Đông Sơn bronze drum motif
- Optional: arced Vietnamese text beneath the emblem reading "CÀ PHÊ SỮA ĐÁ · SEATTLE · LITTLE SAIGON" in a thin gold font at low opacity

The emblem should appear in three sizes:
1. **Full hero version** — large, detailed, used in the hero section and Story page (with glow/shadow effects)
2. **Medium version** — used in the Story section sidebar
3. **Favicon/nav version** — simplified, single-color, 40–50px, used in nav and footer

### Typography

**CRITICAL REQUIREMENT:** All fonts must fully support Vietnamese diacritics — the language uses stacked tone marks (ă, â, đ, ê, ô, ơ, ư plus five tones). Broken diacritics are a credibility-destroying mistake for this brand.

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Hero Headlines | Playfair Display | 700, 900 | Serif, editorial, grand |
| Section Headlines | Playfair Display | 700 | Same family, slightly smaller |
| Vietnamese Phrases & Pull Quotes | Cormorant Garamond | 300–600, Italic | Delicate, cultural, literary |
| Body / UI / Nav / Buttons | Be Vietnam Pro | 300, 400, 500, 600 | Purpose-built for Vietnamese text |
| Menu Prices | Be Vietnam Pro or Source Sans 3 | 700 | Clean, tabular |

**All Vietnamese text must be rendered with full diacritics** — never strip accents from words like Cà Phê, Sữa Đá, Hà Nội, Sài Gòn, etc.

### Decorative Motifs & Patterns
Use these as textures, backgrounds, dividers, and icon illustrations throughout the site:

1. **Đông Sơn Bronze Drum Pattern** — concentric circles with geometric stripes and stylized bird motifs. Use as subtle background watermark, section dividers, and the logo's outer rings.
2. **Lotus Flower Motifs** — standalone lotus icons as section markers, favicon, and decorative accents. Pink (`#E96A8D`) or gold versions.
3. **Bamboo Pattern** — thin vertical lines suggesting bamboo stalks. Use as a very subtle background texture on light sections.
4. **Đông Hồ Folk Art Style** — flat, bold, woodblock-print aesthetic for illustrated drink cards and seasonal campaign graphics. Bold outlines, flat colors, naïve charm.
5. **Phin Filter Silhouette** — a custom SVG illustration of a Vietnamese phin filter (the gravity-fed brewing device) with steam lines rising above it. This is the brand's secondary icon — as recognizable as the dragon-lotus.
6. **Crosshatch / Diamond Grid** — very subtle, low-opacity gold grid pattern for dark section backgrounds.
7. **Hanging Lanterns** — illustrated Hội An-style silk lanterns for event pages and Lunar New Year campaigns.

### Photography Direction
(For placeholder imagery and image art direction notes)
- Close-up of condensed milk slowly pouring into dark phin coffee (golden swirl into black)
- Hands cradling a glass of cà phê sữa đá against warm light
- A phin filter dripping, steam rising
- Overhead flat-lay of Vietnamese coffee spread with bánh mì, chè, and traditional ceramic cups
- The Little Saigon neighborhood — lantern-lit streets, Vietnamese signage
- Barista behind the bar with a warm smile
- Warm orange/amber tones throughout — avoid cool blue-white photography

---

## SITE ARCHITECTURE — ALL PAGES

### Page 1: Home (Landing Page)

**Section 1 — Fixed Navigation Bar**
- Dark background (`#1A0A00`), 90px height, fixed/sticky to top
- Left: Logo mark (small dragon-lotus icon) + "Cafe Soda" in Playfair Display 900 gold + subline "Cà Phê Sữa Đá · Seattle" in Be Vietnam Pro tiny gold
- Center/Right: Nav links — Menu, Our Story, Culture, Visit Us
- Far right: "Order Online" button in red with gold text, rounded-corner-free (square edges)
- Bottom border: 1px gold at 25% opacity

**Section 2 — Hero**
- Full-viewport-height (100vh) dark section (`#1A0A00`)
- Subtle diamond grid pattern at 4% opacity over background
- Radial red glow centered slightly right of middle
- Left side: Text content (60% width)
  - Eyebrow label: "Seattle · Little Saigon" with gold lines flanking it, all caps, small
  - Main headline: "Cafe" on line 1, "Soda" on line 2 — Playfair Display 900, massive (clamp 4rem to 7.5rem), white + gold italic
  - Vietnamese subline: "Cà Phê Sữa Đá — Seattle's Vietnamese Coffee House" in Cormorant Garamond italic, gold at 70% opacity
  - Description paragraph: 1–2 sentences about slow pour, ritual, Sài Gòn in Little Saigon
  - Two CTAs: "Explore the Menu" (red filled button with hover-gold fill animation) + "Our story →" (ghost text link)
- Right side: Large dragon-lotus emblem SVG, floating animation (gentle up-down), with red glow behind it and gold glow above
- Entry animations: staggered fade-up for all text elements (0.3s, 0.5s, 0.7s, 0.9s, 1.1s delays), emblem fades in at 0.8s

**Section 3 — Gradient Rule**
- Full-width 3px horizontal line: gradient from transparent → gold → red → gold → transparent

**Section 4 — Scrolling Marquee**
- Dark red background (`#8B1A1A`)
- Infinite-scroll ticker of Vietnamese coffee names in Cormorant Garamond italic:
  Cà Phê Trứng ✦ Cà Phê Sữa Đá ✦ Cà Phê Muối ✦ Cà Phê Dừa ✦ Cà Phê Đen ✦ Robusta Fine ✦ Phin Brewed ✦ Little Saigon Seattle ✦
- Gold dot separators (✦)

**Section 5 — Intro Split (Two Column)**
- Left: Cream background (`#F8F2E4`)
  - Section label: "The Tradition" in red, small caps with line
  - H2 headline: "Slow poured. / *Deep rooted.* / Boldly brewed." (italic word in red)
  - Two paragraphs about French colonial introduction of coffee to Vietnam (1857), the phin filter, condensed milk, robusta
  - Three stat boxes below a gold divider line: "1857 / Coffee arrives in Vietnam" | "#2 / Vietnam coffee exporter" | "∞ / Flavors in one phin"
- Right: Dark background with illustrated phin filter SVG centered (floating animation), caption below: "The phin — slow, patient, perfect"

**Section 6 — Menu Section**
- Full dark background (`#1A0A00`) with subtle dot pattern
- Header: "Cà Phê Classics" with "Classics" in italic gold
- Subheader: "Traditional Vietnamese drinks, brewed with phin-filtered robusta"
- Tab row: Traditional | Specialty | Seasonal | Bites (active tab = red background, inactive = ghost)
- 3-column grid of drink cards (6 cards visible by default). Each card:
  - Vietnamese drink name in Cormorant italic gold (small, top)
  - English drink name in Playfair Display white
  - Description in Be Vietnam Pro light gray
  - Price in Playfair Display gold + tag pill in red border (e.g., "Signature", "Hanoi Heritage", "Huế Style")
  - Hover: subtle gold background, animated underline from left in red-to-gold gradient
- Tab switching: smooth opacity transition, 200ms

**Traditional tab drinks:**
1. Cà Phê Sữa Đá / Cafe Soda Classic — $6 / Signature
2. Cà Phê Trứng / Egg Coffee — $7 / Hanoi Heritage
3. Cà Phê Muối / Salt Coffee — $6.50 / Huế Style
4. Cà Phê Dừa / Coconut Coffee — $7 / Crowd Favorite
5. Cà Phê Đen / Black Coffee — $5 / Purist
6. Cà Phê Sữa Chua / Yogurt Coffee — $7 / Hanoi Modern

**Specialty tab:** Jackfruit Coffee, Black Sesame Latte, Sea Salt Caramel Cold Brew, Guava Coffee, Pandan Coffee, Chrysanthemum Coffee

**Seasonal tab:** Lucky Red (Tết), Mooncake Latte (Mid-Autumn), Autumn Harvest, Winter Chai Phin, Summer Freeze, Spring Blossom

**Bites tab:** Bánh Mì ($10), Bánh Cuốn ($9), Chè rotating ($6), Bánh Tiêu ($5), Xôi Mặn ($11), Chả Giò ($8)

**Section 7 — Culture Strip (4 columns)**
- Deep red background (`#6B0F0F`), horizontal band
- 4 equal columns, each with: SVG icon + heading + 2-sentence description
  1. **The Phin** — gravity-fed filter icon — "A ritual, not just a method"
  2. **The Lotus** — lotus icon — "Vietnam's national flower. Our symbol of resilience."
  3. **The Dragon** — simplified dragon head icon — "Vietnam's celestial guardian — power, fortune, prosperity."
  4. **Robusta Soul** — coffee bean icon — "Vietnam's finest robusta — bolder, more caffeinated, and richer than arabica."
- Hover on each column: subtle gold background tint
- Bottom border on each column: none on last

**Section 8 — Story / About Preview**
- Two-column layout
- Left: Cream-dark background with large dragon-lotus emblem centered (watermark of Đông Sơn concentric rings in background), a circular badge bottom-right reading "Est. / 2025" slowly rotating in red
- Right: Cream background
  - Section label: "Our Story"
  - H2: "A pun born / from *love.* / A cup born / from *heritage.*"
  - 2 paragraphs explaining the bilingual pun + sourcing from Buôn Ma Thuột Central Highlands
  - Pull quote in Cormorant italic, left-bordered in gold: *"Every cup of cà phê sữa đá is a conversation between past and present — between Sài Gòn and Seattle."*
  - "Read Our Full Story" button in red

**Section 9 — Location & Hours**
- Dark background (`#1A0A00`)
- Two columns: Left = text details, Right = map embed (or map placeholder)
- Left:
  - H2: "Find Us in *Little Saigon*" 
  - Vietnamese subline: "Khu Phố Little Saigon — Seattle, Washington"
  - Three detail rows with circular gold icon containers:
    - 📍 Address: Little Saigon, Chinatown–International District, Seattle WA 98104
    - 🕐 Hours: Mon–Fri 7am–6pm | Sat–Sun 8am–7pm
    - 📞 Contact: hello@cafesodaseattle.com | (206) 555-SODA
  - "Get Directions" button in gold with dark text
- Right: Google Map embed (or styled placeholder with pin icon)

**Section 10 — Footer**
- Deepest red background (`#6B0F0F`), top border gold at 20% opacity
- 4-column grid:
  - Col 1 (wide): Logo mark + "Cafe Soda" + short brand description + italic tagline: *"Ngon. Bold. Yours. — Cafe Soda"*
  - Col 2: Menu links (Traditional Cà Phê, Specialty, Seasonal, Bites, Order Online)
  - Col 3: Explore links (Our Story, Vietnamese Coffee, Brewing Guide, Events, Press)
  - Col 4: Connect links (Instagram, TikTok, Newsletter, Wholesale, Catering)
- Footer bottom bar: copyright line left + social icon circles (IG, TK, FB) right
- Full Vietnamese tagline in tiny text: "© 2025 Cafe Soda · Cà Phê Sữa Đá · Little Saigon, Seattle · Made with ♥ & robusta"

---

### Page 2: Menu (Full Menu Page)

- Hero: short, dark, with marquee ticker of drink names
- Full categorized menu with same tab system as homepage, expanded to show all items
- Each drink gets its own full card with: Vietnamese name (with diacritics), English name, full description, prep notes (hot/iced/blended), allergen icons
- Seasonal drinks section with Lunar New Year and Mid-Autumn Festival callouts
- Food section: Bánh Mì, Bánh Cuốn, Chè, Bánh Tiêu, Xôi Mặn, Chả Giò
- Online ordering CTA panel at bottom (red background, gold text)
- Pricing displayed in Playfair Display gold

---

### Page 3: Our Story

- Full-page story layout
- Hero: dark full-width section with the large hero dragon-lotus emblem centered, glowing, with parallax effect
- Section 1 — The Name: Full explanation of the Cà Phê Sữa Đá → Cafe Soda pun. Bold pull quote, bilingual.
- Section 2 — The History of Vietnamese Coffee: Timeline layout
  - 1857: French missionaries introduce arabica to Vietnam
  - Early 1900s: Robusta cultivation begins in Central Highlands
  - 1920s: The phin filter is adapted from French drip devices
  - 1946: Egg coffee (cà phê trứng) invented in Hanoi during WWII food shortages
  - 1986: Đổi Mới economic reforms launch Vietnam's coffee export boom
  - 2010: Salt coffee (cà phê muối) invented in Huế
  - Today: Vietnam is the world's #2 coffee exporter, #1 in robusta
- Section 3 — Our Sourcing: Direct-trade robusta from Buôn Ma Thuột, Central Highlands. Map of Vietnam with Buôn Ma Thuột marked.
- Section 4 — Little Saigon: Seattle's Vietnamese community, the neighborhood, our place in it.
- Section 5 — The Founders: Founder photo + story (placeholder)
- Section 6 — Press Wall: Logos/mentions from Seattle Times, Seattle Met, Eater Seattle, etc.

---

### Page 4: Culture & Coffee Education

- Educational editorial page — think magazine layout
- Sections (each as a visual editorial card):
  1. **What is Cà Phê Sữa Đá?** — the drink explained
  2. **The Phin Filter** — how it works, illustrated step-by-step
  3. **Robusta vs Arabica** — Vietnam's choice and why
  4. **The Drinks Glossary** — all Vietnamese coffee types defined with diacritics
  5. **Vietnamese Coffee Timeline** — condensed version of the Story page timeline
  6. **Lunar New Year & Coffee** — cultural context
- Each section uses the Đông Hồ folk art illustration style for imagery
- CTA at bottom: "Taste the tradition. Visit us in Little Saigon."

---

### Page 5: Visit Us / Contact

- Large map embed (Google Maps, centered on Little Saigon Seattle)
- Address, hours, parking notes, transit directions
- Contact form: Name, Email, Message, Subject dropdown (General / Catering / Wholesale / Events / Press)
- Catering & Events section: Description, minimum orders, inquiry CTA
- Wholesale inquiry section for restaurants and cafes
- Newsletter signup: "Stay in the loop — Tết specials, new drinks, and Seattle Vietnamese community events"

---

### Page 6: Shop (E-Commerce)

- Whole-bean Vietnamese robusta (250g, 500g, 1kg bags)
- Phin filter kits (stainless steel phin + robusta starter pack)
- Condensed milk (house-made, jarred)
- Branded merch: tote bags, ceramic cups, enamel pins featuring the dragon-lotus mark
- Gift boxes (Lunar New Year themed)
- All product imagery uses the Đông Hồ folk art illustrated style for packaging mockups
- Shopify or Square Commerce integration

---

## INTERACTIONS & ANIMATIONS

- **Page load:** Staggered fade-up animations for hero text (0.3s increments), hero emblem fades in with glow at 0.8s
- **Scroll reveal:** All sections fade up and slide in (opacity 0→1, translateY 30px→0) as they enter viewport, using IntersectionObserver with 80ms stagger between elements
- **Hero emblem:** Continuous gentle float animation (up 12px, back, 5s cycle, ease-in-out)
- **Nav logo emblem:** Slow continuous spin (20s rotation on the "Est. 2025" badge)
- **Marquee:** Seamless infinite horizontal scroll at 24s loop
- **Buttons:** Primary button — fill sweeps from left in gold on hover, text shifts to ink color. Ghost buttons — text slides to gold.
- **Menu cards:** Animated bottom border draws left-to-right in red-to-gold gradient on hover
- **Menu tabs:** Smooth opacity cross-fade on tab switch (200ms)
- **Culture strip columns:** Subtle gold background tint on hover
- **All animations must be performant** — CSS transforms and opacity only, no layout-triggering properties

---

## COPY & CONTENT GUIDELINES

### Tone of voice
- Warm and proud, never pretentious
- Bilingual confidence — Vietnamese phrases are always presented in full diacritics, never stripped or anglicized mid-word
- Poetic but clear — not overwrought, not casual
- Community-first — Little Saigon, Vietnamese diaspora, and all of Seattle are equally welcomed

### Key phrases and copy to use throughout
- "Slow poured. Deep rooted. Boldly brewed."
- "Cà Phê Sữa Đá — reimagined for Seattle"
- "Where Sài Gòn meets Seattle"
- "Every cup is a ritual. Every ritual is a story."
- "Ngon. Bold. Yours." (footer tagline — *ngon* means delicious in Vietnamese)
- "Made with ♥ & robusta"
- "Little Saigon's Vietnamese coffee house"
- "Brewed through a phin. Poured with love."

### Vietnamese phrases with translations (display on site)
- Cà Phê Sữa Đá — Iced milk coffee
- Cà Phê Trứng — Egg coffee
- Cà Phê Muối — Salt coffee
- Cà Phê Dừa — Coconut coffee
- Cà Phê Đen — Black coffee
- Cà Phê Sữa Chua — Yogurt coffee
- Ngon — Delicious
- Phin — The Vietnamese drip filter
- Buôn Ma Thuột — Vietnam's coffee capital, Central Highlands
- Khu Phố — neighborhood/quarter (as in "Khu Phố Little Saigon")

---

## TECHNICAL REQUIREMENTS

- **Mobile-first responsive design** — all sections must adapt cleanly to 375px mobile viewports
- **Sticky navigation** fixed to top on scroll
- **Google Maps embed** on Location page and homepage footer area
- **Online ordering integration** — Square, Toast, or Clover POS compatible
- **Vietnamese diacritics must render correctly** in all browsers — use Google Fonts (Be Vietnam Pro + Playfair Display + Cormorant Garamond) loaded via CDN
- **Performance:** Lazy-load all images, preload hero fonts, minimize render-blocking resources
- **SEO:** Page titles formatted as "Page Name | Cafe Soda — Vietnamese Coffee · Seattle", meta descriptions for each page, Open Graph tags for social sharing
- **Accessibility:** WCAG AA contrast ratios on all text, alt text on all images, keyboard navigation on all interactive elements
- **Analytics:** Google Analytics 4 integration placeholder
- **Social:** Instagram and TikTok feed widget on homepage (or link-out)

---

## COMPETITIVE CONTEXT (for design inspiration)

Study these brands for reference, then design something that out-positions all of them in the traditional/cultural lane:

- **Nguyen Coffee Supply** (nguyencoffeesupply.com) — bold, Gen Z, streetwear-coded. Cafe Soda should feel more heritage-rooted than this.
- **Copper Cow Coffee** (coppercowcoffee.com) — playful, CPG, nón lá patterns. Good color reference.
- **Cộng Cà Phê** (congcaphe.com) — the gold standard for cultural immersion via bao cap nostalgia. Most similar in spirit to Cafe Soda.
- **Hello Em** (helloem.coffee) — Seattle's closest current competitor. Cafe Soda should feel more visually elaborate and culturally layered.
- **Phin Smith** (phinsmith.com) — clean Squarespace cafe site, good drink naming approach.

Cafe Soda should feel like a **high-end cultural experience** — think where a heritage restaurant brand and a specialty coffee roastery meet.

---

## SUMMARY CHECKLIST

- [ ] Dragon-lotus hybrid emblem in three sizes (hero, medium, favicon)
- [ ] Red `#B22234` + Gold `#D4A017` palette throughout, cream neutrals on light sections
- [ ] Playfair Display 900 for all major headlines
- [ ] Be Vietnam Pro for all body/UI text (Vietnamese diacritic support)
- [ ] Cormorant Garamond italic for Vietnamese phrases and pull quotes
- [ ] Full Vietnamese diacritics on ALL Vietnamese text — never stripped
- [ ] Phin filter SVG illustration as secondary brand icon
- [ ] Đông Sơn concentric ring motif as background/divider
- [ ] Bilingual brand voice (English + Vietnamese phrase drops)
- [ ] Scrolling marquee of Vietnamese coffee names
- [ ] Interactive menu with 4 tabs: Traditional, Specialty, Seasonal, Bites
- [ ] 4-column culture strip: The Phin / The Lotus / The Dragon / Robusta Soul
- [ ] Story section with "Café Soda = Cà Phê Sữa Đá" pun explanation
- [ ] Location section with Google Maps + hours + address
- [ ] Footer with brand tagline "Ngon. Bold. Yours."
- [ ] 6 full pages: Home, Menu, Our Story, Culture, Visit Us, Shop
- [ ] Scroll-reveal animations + floating emblem + marquee + button hover effects
- [ ] Mobile-first responsive, WCAG AA accessible, SEO-ready
</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Hi-fi design">
Create a high-fidelity, polished design. Follow the instructions about design in your system prompt, particularly the 'How to do design work' section. Use the design_canvas starter component, or make a full-bleed prototype and offer options via Tweaks.
</attached-skill>

<attached-skill name="Interactive prototype">
Create a fully interactive prototype with realistic state management and transitions. Use React useState/useEffect for dynamic behavior. Include hover states, click interactions, form validation, animated transitions, and multi-step navigation flows. It should feel like a real working app, not a static mockup.
</attached-skill>


<system-reminder>Auto-injected reminder (ignore if not relevant): do not recreate copyrighted or branded UI unless the user's email domain matches that company. Create original designs instead.</system-reminder>

## Assistant

_[tool: update_todos]_

_[tool: copy_starter_component]_

_[tool: write_file]_

_[tool: write_file]_

I'll commit to the aesthetic now: lacquer red `#B22234` + imperial gold `#D4A017` on lacquered ink and warm cream; Playfair Display + Cormorant Garamond italic + Be Vietnam Pro. The dragon-lotus emblem will be a **geometric placeholder** (8 radial petals, Đông Sơn concentric rings, glowing center) since hand-drawing a Vietnamese dragon in SVG isn't appropriate at this fidelity — the user should commission the final illustration.

Let me build it.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: done]_

_[tool: update_todos]_

_[tool: fork_verifier_agent]_

Built **Cafe Soda.html** — a single-page hi-fi prototype of the Vietnamese coffee shop site you specified.

**What's in there**
- Sticky nav with bilingual brand lockup, hero w/ floating dragon-lotus emblem, gradient rule, infinite marquee of cà phê names
- Two-column "The Tradition" intro with phin SVG + stats, dark menu with 4 working tabs (Traditional / Specialty / Seasonal / Bites — 24 drinks total with full diacritics)
- 4-column culture strip on deep red, Story section with rotating Est. 2025 badge + Đông Sơn concentric rings, Location with map placeholder, full footer
- Scroll-reveal everywhere, marquee, floating emblem, button fill-sweeps, animated card underlines

**Tweaks panel** (toolbar toggle): palette (Lacquer / Jade / Midnight), display font (Playfair / DM Serif / Bodoni), hero split-vs-centered, grid on/off, marquee speed.

**One honest caveat**: the dragon-lotus emblem is a **geometric placeholder** — radial petals, Đông Sơn ticks, a glowing center, and a subtle sinuous gold line as a dragon-spine hint. A real illustrated Vietnamese dragon head should be commissioned from an illustrator; faking that in code would look worse than a placeholder. Same for the map (stylized stub) and photography (the brief calls for real shots — I haven't faked them).

**Next steps if useful**: build out the other 5 pages (Menu / Story / Culture / Visit / Shop), swap the emblem placeholder for a real illustration when you have it, drop in a real Google Maps embed.

## User

Can you build out the rest of the 5 pages and fill them in

## Assistant

_[tool: update_todos]_

_[tool: write_file]_

First, extract Nav/Footer/Reveal into a shared file and make Nav cross-page aware.Now strip Nav/Footer/Reveal from sections.jsx (they're now in common.jsx), update Cafe Soda.html to load common.jsx, and update Nav-related styles for current state.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

Now load common.jsx in the home page, add an `is-current` style to nav, and pass `current="home"`.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: write_file]_

Now build the 5 pages. I'll add a shared page-styles file and build each page.

_[tool: write_file]_

_[tool: write_file]_

Now build each page. Menu first.

_[tool: write_file]_

_[tool: write_file]_

Now the Story page.

_[tool: write_file]_

_[tool: write_file]_

Now Culture.Now Visit Us.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now Shop — the final page.

_[tool: show_html]_

Quick check the home still works after the refactor, then run all pages.

_[tool: done]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: str_replace_edit]_

_[tool: grep]_

Let me check for the same bug pattern across files.

_[tool: grep]_

Those are fine — Reveal is the component. Let me check for the actual bug pattern: `<div>...</Reveal>` mismatches.

_[tool: show_html]_

Good. Let me verify the remaining pages.

_[tool: get_webview_logs]_

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: show_html]_

_[tool: get_webview_logs]_

Story page clean. Check Culture, Visit, and Shop.

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: show_html]_

_[tool: get_webview_logs]_

_[tool: show_html]_

_[tool: get_webview_logs]_

All 6 pages load clean. Open the home and fork the verifier.

_[tool: update_todos]_

_[tool: done]_

_[tool: fork_verifier_agent]_

All six pages built and linked through the nav. Summary of what landed:

**Home** (`Cafe Soda.html`) — original hero, marquee, intro, 4-tab menu preview, culture strip, story preview, location, footer + Tweaks panel.

**Menu** (`Menu.html`) — full categorized menu (Traditional / Specialty / Seasonal / Bites, ~30 items) with bilingual names, descriptions, Hot/Iced/Blended pills, signature tags, and an order-ahead panel.

**Our Story** (`Our Story.html`) — emblem hero, the name-pun equation (Cà Phê + Sữa + Đá = Cafe Soda), seven-step timeline on a vertical gold rail, sourcing section with an inline stylized Việt Nam map pinning Buôn Ma Thuột, Little Saigon section with a neighborhood-map placeholder, founder cards, press wall.

**Culture** (`Culture.html`) — magazine-style editorial: What is Cà Phê Sữa Đá, four-step phin guide with animated phin SVGs, side-by-side Robusta vs Arabica comparison, drinks glossary with pronunciations, timeline reprise, Tết section with hanging-lantern illustration.

**Visit Us** (`Visit Us.html`) — large stylized map with light-rail marker, address/hours/transit/contact rows, catering & wholesale tiles, working contact form with subject dropdown and submit confirmation, newsletter signup.

**Shop** (`Shop.html`) — filterable product grid (All / Coffee / Equipment / Merch / Gifts) with twelve products, each rendered with an inline folk-art-style SVG packaging illustration, floating cart pill that animates in on first add, shipping callout.

**Caveats** — illustrations across the site (the emblem, product packaging, Đông Hồ tiles, maps) are still geometric placeholders. They're crafted to read as deliberate brand artifacts rather than dummy boxes, but commission real illustrations for production. Photography spots in the brief (condensed-milk pour, founder photo, etc.) are noted as placeholders too.

## User

Verifier agent check completed

## Assistant

Verifier came back clean across all six pages.

