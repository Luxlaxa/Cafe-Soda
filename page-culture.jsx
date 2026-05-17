const GLOSSARY = [
  { vi: "Cà Phê Sữa Đá", en: "Iced Milk Coffee", pron: "kah fey suh-uh dah", desc: "Phin-brewed robusta poured over sweetened condensed milk and ice. The default order." },
  { vi: "Cà Phê Sữa Nóng", en: "Hot Milk Coffee", pron: "kah fey suh-uh nong", desc: "Same drink, hot. Common in northern Việt Nam in winter." },
  { vi: "Cà Phê Đen", en: "Black Coffee", pron: "kah fey den", desc: "Just robusta, just phin, no milk. Hot or iced — đá or nóng." },
  { vi: "Cà Phê Trứng", en: "Egg Coffee", pron: "kah fey choong", desc: "Invented in Hà Nội in 1946 to cope with milk shortages. Whipped egg yolk in place of cream." },
  { vi: "Cà Phê Muối", en: "Salt Coffee", pron: "kah fey moo-ee", desc: "Huế invention from 2010 — salted cream foam over phin coffee." },
  { vi: "Cà Phê Dừa", en: "Coconut Coffee", pron: "kah fey zuh-uh", desc: "Coconut cream blended with robusta over crushed ice." },
  { vi: "Bạc Xỉu", en: "More Milk Than Coffee", pron: "bahk see-oo", desc: "Sài Gòn's mellower cousin: heavy on sweetened condensed milk, light on coffee." },
  { vi: "Phin", en: "Drip Filter", pron: "fin", desc: "Small metal gravity filter adapted from French drip in 1920s Việt Nam. The single most important object in this menu." },
  { vi: "Robusta", en: "The Bean", pron: "roh-bus-tuh", desc: "Coffea canephora. Higher caffeine, lower acidity, darker chocolate-cocoa flavor than arabica." },
];

const PHIN_STEPS = [
  { title: "Grind coarse", desc: "Coarser than espresso, finer than French press. Robusta only." },
  { title: "Layer the milk", desc: "Sweetened condensed milk in the glass. Set the phin on top." },
  { title: "Bloom for thirty", desc: "Add a splash of water. Let the grounds bloom for 30 seconds." },
  { title: "Slow drip", desc: "Fill the phin, set the press. Watch four minutes pass." },
];

function CulturePage() {
  React.useEffect(() => { applyTheme("lacquer", "Playfair Display"); }, []);
  return (
    <div className="cs-root">
      <Nav current="culture" />

      <header className="cs-pagehero">
        <div className="cs-pagehero-grid" />
        <div className="cs-pagehero-glow" />
        <div className="cs-pagehero-inner">
          <Reveal className="cs-eyebrow"><span className="cs-eyebrow-line" /> Culture & Coffee <span className="cs-eyebrow-line" /></Reveal>
          <Reveal delay={150} as="div" className="cs-pagehero-vi">Văn Hoá Cà Phê</Reveal>
          <Reveal delay={250} as="h1" className="cs-pagehero-title">A field guide<br /><em>to the phin.</em></Reveal>
          <Reveal delay={400} as="p" className="cs-pagehero-lede">
            What you're drinking, how it's made, and where it comes from. Everything we tell ourselves
            about Vietnamese coffee, written down.
          </Reveal>
        </div>
      </header>

      {/* Section 1 — What is Cà Phê Sữa Đá */}
      <section className="cs-culturepage-section">
        <div className="cs-editorial">
          <Reveal className="cs-editorial-text">
            <div className="cs-section-label"><span className="cs-label-line" /> 01 · The Drink</div>
            <h2 className="cs-h2">What is <em>Cà Phê Sữa Đá?</em></h2>
            <p className="cs-body">
              Three Vietnamese words: <em>cà phê</em> (coffee), <em>sữa</em> (milk),
              <em> đá</em> (ice). Together they name Việt Nam's most popular coffee drink —
              and the drink we anglicize for our name.
            </p>
            <p className="cs-body">
              The recipe is the same since the 1920s: a tablespoon of sweetened condensed milk
              at the bottom of a glass, robusta brewed slowly through a phin filter on top of the glass,
              ice added when the drip is done.
            </p>
            <p className="cs-body">
              The condensed milk replaced fresh milk because the colonial dairy supply chain in Việt Nam
              was patchy. The robusta replaced arabica because robusta grew better in the highland climate.
              Both substitutions became the recipe — bolder, sweeter, more caffeinated than the French original.
            </p>
          </Reveal>
          <Reveal delay={200} className="cs-editorial-img">
            <div className="cs-dongho">
              <svg viewBox="0 0 240 180" style={{ width: "85%", height: "85%" }}>
                {/* Folk-art style glass + phin */}
                <rect x="90" y="20" width="60" height="14" fill="var(--cs-gold)" />
                <rect x="84" y="34" width="72" height="8" fill="var(--cs-gold)" />
                <rect x="78" y="42" width="84" height="36" fill="none" stroke="var(--cs-red-dk)" strokeWidth="2.2" />
                <rect x="72" y="78" width="96" height="8" fill="var(--cs-gold)" />
                {/* drips */}
                <line x1="120" y1="86" x2="120" y2="108" stroke="var(--cs-red-dk)" strokeWidth="1.8" strokeDasharray="3 4" />
                {/* glass */}
                <path d="M 86 110 L 154 110 L 144 162 L 96 162 Z" fill="rgba(178,34,52,0.85)" stroke="var(--cs-red-dk)" strokeWidth="2" />
                <rect x="96" y="148" width="48" height="14" fill="var(--cs-cream)" opacity="0.45" />
                {/* steam */}
                <path d="M 95 18 C 92 12, 100 8, 96 0" fill="none" stroke="var(--cs-red-dk)" strokeWidth="1.4" opacity="0.7" />
                <path d="M 120 18 C 117 10, 124 6, 120 -2" fill="none" stroke="var(--cs-red-dk)" strokeWidth="1.4" opacity="0.7" />
                <path d="M 145 18 C 142 12, 150 8, 146 0" fill="none" stroke="var(--cs-red-dk)" strokeWidth="1.4" opacity="0.7" />
              </svg>
              <div className="cs-dongho-caption">Đông Hồ style · folk illustration</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 2 — Phin filter step-by-step */}
      <section className="cs-culturepage-section-dark">
        <div className="cs-section-inner" style={{ textAlign: "center" }}>
          <Reveal className="cs-eyebrow cs-eyebrow-gold" style={{ justifyContent: "center" }}>
            <span className="cs-eyebrow-line" /> 02 · The Phin Filter <span className="cs-eyebrow-line" />
          </Reveal>
          <Reveal delay={120} as="h2" className="cs-h2 cs-h2-light" style={{ marginBottom: 22 }}>
            Four minutes. <em>Four steps.</em>
          </Reveal>
          <Reveal delay={220} as="p" className="cs-body" style={{ color: "var(--cs-cream)", opacity: 0.78, maxWidth: 600, margin: "0 auto" }}>
            The phin is a single-serve metal drip filter. Gravity does the work. Patience does the rest.
          </Reveal>
        </div>
        <div className="cs-phin-steps" style={{ maxWidth: 1200, margin: "60px auto 0" }}>
          {PHIN_STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="cs-phin-step">
              <div className="cs-phin-step-icon">
                <PhinIcon size={70} color="#F0C842" steam={i >= 2} />
              </div>
              <div className="cs-phin-step-num">0{i + 1}</div>
              <h3 className="cs-phin-step-title">{s.title}</h3>
              <p className="cs-phin-step-desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Section 3 — Robusta vs Arabica */}
      <section className="cs-culturepage-section">
        <div className="cs-section-inner" style={{ textAlign: "center" }}>
          <Reveal className="cs-section-label" style={{ justifyContent: "center" }}>
            <span className="cs-label-line" /> 03 · The Bean
          </Reveal>
          <Reveal delay={100} as="h2" className="cs-h2">
            Robusta vs. <em>Arabica.</em>
          </Reveal>
          <Reveal delay={200} as="p" className="cs-body" style={{ maxWidth: 640, margin: "0 auto" }}>
            The bean Vietnam built around — and why. Robusta isn't a budget arabica;
            it's a different bean with a different temperament.
          </Reveal>
        </div>
        <div className="cs-vs">
          <Reveal delay={100} className="cs-vs-col cs-vs-col-robusta">
            <div className="cs-vs-label">Vietnam's choice</div>
            <h3 className="cs-vs-name">Robusta</h3>
            <div className="cs-vs-row"><span className="cs-vs-row-k">Caffeine</span><span>2.2 – 2.7%</span></div>
            <div className="cs-vs-row"><span className="cs-vs-row-k">Flavor</span><span>Earthy, chocolate, woody, low acid</span></div>
            <div className="cs-vs-row"><span className="cs-vs-row-k">Crema</span><span>Thick, golden, persistent</span></div>
            <div className="cs-vs-row"><span className="cs-vs-row-k">Climate</span><span>Low elevation, hot &amp; humid</span></div>
            <div className="cs-vs-row"><span className="cs-vs-row-k">Yield</span><span>High — hardy plant</span></div>
            <div className="cs-vs-row"><span className="cs-vs-row-k">Use</span><span>Phin, espresso blends, condensed milk drinks</span></div>
          </Reveal>
          <Reveal delay={220} className="cs-vs-col cs-vs-col-arabica">
            <div className="cs-vs-label">The familiar one</div>
            <h3 className="cs-vs-name">Arabica</h3>
            <div className="cs-vs-row"><span className="cs-vs-row-k">Caffeine</span><span>1.2 – 1.5%</span></div>
            <div className="cs-vs-row"><span className="cs-vs-row-k">Flavor</span><span>Bright, fruity, floral, higher acid</span></div>
            <div className="cs-vs-row"><span className="cs-vs-row-k">Crema</span><span>Thin, light, dissipates fast</span></div>
            <div className="cs-vs-row"><span className="cs-vs-row-k">Climate</span><span>High elevation, mild &amp; dry</span></div>
            <div className="cs-vs-row"><span className="cs-vs-row-k">Yield</span><span>Lower — sensitive plant</span></div>
            <div className="cs-vs-row"><span className="cs-vs-row-k">Use</span><span>Pour-over, single-origin specialty</span></div>
          </Reveal>
        </div>
      </section>

      {/* Section 4 — Glossary */}
      <section className="cs-culturepage-section">
        <div className="cs-section-inner">
          <Reveal style={{ textAlign: "center" }}>
            <div className="cs-section-label" style={{ justifyContent: "center" }}>
              <span className="cs-label-line" /> 04 · Drinks Glossary
            </div>
            <h2 className="cs-h2" style={{ textAlign: "center" }}>How to <em>order</em> like a regular.</h2>
            <p className="cs-body" style={{ maxWidth: 600, margin: "0 auto 0" }}>
              Pronunciation included. Diacritics intact. No need to whisper.
            </p>
          </Reveal>
          <div className="cs-gloss-grid">
            {GLOSSARY.map((g, i) => (
              <Reveal key={g.vi} delay={i * 50} className="cs-gloss-item">
                <div className="cs-gloss-vi">{g.vi}</div>
                <div className="cs-gloss-en">{g.en}</div>
                <div className="cs-gloss-pron">/ {g.pron} /</div>
                <p className="cs-gloss-desc">{g.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Timeline reprise */}
      <section className="cs-culturepage-section-dark">
        <div className="cs-section-inner" style={{ textAlign: "center" }}>
          <Reveal className="cs-eyebrow cs-eyebrow-gold" style={{ justifyContent: "center" }}>
            <span className="cs-eyebrow-line" /> 05 · Timeline <span className="cs-eyebrow-line" />
          </Reveal>
          <Reveal delay={100} as="h2" className="cs-h2 cs-h2-light">
            A century of <em>cà phê.</em>
          </Reveal>
        </div>
        <div className="cs-timeline">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 70} className="cs-timeline-item">
              <div className="cs-timeline-year">{t.year}</div>
              <div className="cs-timeline-text">{t.text}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Section 6 — Lunar New Year */}
      <section className="cs-culturepage-section">
        <div className="cs-editorial cs-editorial-rev">
          <Reveal className="cs-editorial-img">
            <div className="cs-dongho">
              {/* Lanterns illustration */}
              <svg viewBox="0 0 240 180" style={{ width: "85%", height: "85%" }}>
                {/* hanging strings */}
                <line x1="40" y1="0" x2="40" y2="40" stroke="var(--cs-red-dk)" strokeWidth="1" />
                <line x1="120" y1="0" x2="120" y2="30" stroke="var(--cs-red-dk)" strokeWidth="1" />
                <line x1="200" y1="0" x2="200" y2="40" stroke="var(--cs-red-dk)" strokeWidth="1" />
                {/* three lanterns */}
                {[[40,75,28],[120,65,36],[200,75,28]].map(([cx,cy,r], i) => (
                  <g key={i}>
                    <ellipse cx={cx} cy={cy} rx={r} ry={r * 1.15} fill="var(--cs-red)" stroke="var(--cs-red-dk)" strokeWidth="2" />
                    <line x1={cx - r} y1={cy} x2={cx + r} y2={cy} stroke="var(--cs-gold)" strokeWidth="1" opacity="0.7" />
                    <rect x={cx - 8} y={cy - r - 4} width="16" height="6" fill="var(--cs-gold)" />
                    <rect x={cx - 8} y={cy + r * 1.15 - 2} width="16" height="6" fill="var(--cs-gold)" />
                    <line x1={cx} y1={cy + r * 1.15 + 4} x2={cx} y2={cy + r * 1.15 + 18} stroke="var(--cs-gold)" strokeWidth="1.4" />
                  </g>
                ))}
              </svg>
              <div className="cs-dongho-caption">Tết · Lunar New Year</div>
            </div>
          </Reveal>
          <Reveal delay={150} className="cs-editorial-text">
            <div className="cs-section-label"><span className="cs-label-line" /> 06 · Lunar New Year &amp; Coffee</div>
            <h2 className="cs-h2">Tết at <em>Cafe Soda.</em></h2>
            <p className="cs-body">
              Tết Nguyên Đán — the Lunar New Year — is the most important
              holiday in Việt Nam. It's the spring festival, the family reunion, the
              fifteen-day reset that re-starts the calendar.
            </p>
            <p className="cs-body">
              Every Tết, we hang silk lanterns, run our Lucky Red drink, hand out
              lì xì (red envelopes) to kids, and stay open late for the parade through 12th Avenue.
              First week of Tết is the busiest week of our year — come early, stay long.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="cs-orderpanel">
        <Reveal as="h2" className="cs-orderpanel-h">Taste the <em>tradition.</em></Reveal>
        <Reveal delay={150} className="cs-orderpanel-sub">Visit us in Little Saigon · Open 7 days</Reveal>
        <Reveal delay={300} className="cs-orderpanel-btns">
          <a href="Visit Us.html" className="cs-btn cs-btn-gold">Find Us</a>
          <a href="Menu.html" className="cs-btn cs-btn-ghost" style={{ color: "var(--cs-cream)" }}>See the menu →</a>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CulturePage />);
