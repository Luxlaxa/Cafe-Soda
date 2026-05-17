const { useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "lacquer",
  "displayFont": "Playfair Display",
  "showGrid": true,
  "marqueeSpeed": 28,
  "heroTreatment": "split"
}/*EDITMODE-END*/;

const PALETTES = {
  lacquer:  { red: "#B22234", redDk: "#8B1A1A", redDkr: "#6B0F0F", gold: "#D4A017", goldLt: "#F0C842", cream: "#F8F2E4", paper: "#EDE3CC", ink: "#1A0A00", body: "#3D1A00" },
  jade:     { red: "#A8362F", redDk: "#7E2724", redDkr: "#5C1A18", gold: "#D4A017", goldLt: "#F0C842", cream: "#F4EFD8", paper: "#E6DDB8", ink: "#0F2018", body: "#1F3329" },
  midnight: { red: "#B22234", redDk: "#8B1A1A", redDkr: "#6B0F0F", gold: "#E5C158", goldLt: "#F7DC78", cream: "#F1E8D2", paper: "#E0D3AE", ink: "#0A0810", body: "#2A1B05" },
};

const FONT_PAIRS = {
  "Playfair Display": "'Playfair Display', serif",
  "DM Serif Display": "'DM Serif Display', serif",
  "Bodoni Moda": "'Bodoni Moda', serif",
};

function App() {
  const t = useTweaks(TWEAK_DEFAULTS);
  const pal = PALETTES[t.palette] || PALETTES.lacquer;

  useEffectApp(() => {
    const r = document.documentElement.style;
    r.setProperty("--cs-red", pal.red);
    r.setProperty("--cs-red-dk", pal.redDk);
    r.setProperty("--cs-red-dkr", pal.redDkr);
    r.setProperty("--cs-gold", pal.gold);
    r.setProperty("--cs-gold-lt", pal.goldLt);
    r.setProperty("--cs-cream", pal.cream);
    r.setProperty("--cs-paper", pal.paper);
    r.setProperty("--cs-ink", pal.ink);
    r.setProperty("--cs-body", pal.body);
    r.setProperty("--cs-display", FONT_PAIRS[t.displayFont] || FONT_PAIRS["Playfair Display"]);
    r.setProperty("--cs-marquee-dur", `${t.marqueeSpeed}s`);
    r.setProperty("--cs-grid-opacity", t.showGrid ? "0.045" : "0");
  }, [t]);

  return (
    <div className="cs-root">
      <Nav current="home" />
      <Hero />
      <GradientRule />
      <Marquee />
      <Intro />
      <Menu />
      <Culture />
      <Story />
      <Location />
      <Footer />

      <TweaksPanel title="Tweaks" defaultOpen={false}>
        <TweakSection title="Palette">
          <TweakSelect
            label="Theme"
            value={t.palette}
            onChange={(v) => t.setTweak("palette", v)}
            options={[
              { value: "lacquer", label: "Lacquer Red & Imperial Gold (default)" },
              { value: "jade", label: "Jade Mountain — green ink, dust gold" },
              { value: "midnight", label: "Midnight Sài Gòn — deep ink, soft gold" },
            ]}
          />
        </TweakSection>

        <TweakSection title="Display Font">
          <TweakRadio
            value={t.displayFont}
            onChange={(v) => t.setTweak("displayFont", v)}
            options={[
              { value: "Playfair Display", label: "Playfair" },
              { value: "DM Serif Display", label: "DM Serif" },
              { value: "Bodoni Moda", label: "Bodoni" },
            ]}
          />
        </TweakSection>

        <TweakSection title="Hero">
          <TweakRadio
            label="Treatment"
            value={t.heroTreatment}
            onChange={(v) => t.setTweak("heroTreatment", v)}
            options={[
              { value: "split", label: "Split" },
              { value: "centered", label: "Centered" },
            ]}
          />
          <TweakToggle
            label="Background grid"
            value={t.showGrid}
            onChange={(v) => t.setTweak("showGrid", v)}
          />
        </TweakSection>

        <TweakSection title="Motion">
          <TweakSlider
            label="Marquee speed"
            min={12} max={60} step={1}
            value={t.marqueeSpeed}
            onChange={(v) => t.setTweak("marqueeSpeed", v)}
            unit="s/loop"
          />
        </TweakSection>
      </TweaksPanel>

      <style>{`
        body[data-hero="centered"] .cs-hero-inner { grid-template-columns: 1fr; text-align: center; justify-items: center; }
        body[data-hero="centered"] .cs-hero-text { max-width: 880px; }
        body[data-hero="centered"] .cs-hero-emblem { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; opacity: 0.18; pointer-events: none; }
        body[data-hero="centered"] .cs-hero-ctas { justify-content: center; }
        body[data-hero="centered"] .cs-eyebrow { justify-content: center; }
      `}</style>

      <SyncHeroAttr value={t.heroTreatment} />
    </div>
  );
}

const SyncHeroAttr = ({ value }) => {
  useEffectApp(() => {
    document.body.setAttribute("data-hero", value);
  }, [value]);
  return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
