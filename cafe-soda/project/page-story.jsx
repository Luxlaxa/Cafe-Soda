const FOUNDERS = [
  { name: "Linh Trần", role: "Founder · Head of Coffee", bio: "Born in Sài Gòn, raised in Seattle. Spent five years working at family-run cà phê stands in Hà Nội and Đà Nẵng before opening Cafe Soda. Sources every bean by hand." },
  { name: "Minh Phạm", role: "Co-founder · Kitchen", bio: "Third-generation bánh mì baker from Westminster, CA. Runs the kitchen, develops the chè rotation, and makes the pâté from his grandmother's recipe — unchanged since 1968." },
];

const PRESS = [
  { logo: "Seattle Times", quote: "The most ambitious Vietnamese coffee program in the Pacific Northwest.", date: "Apr 2026" },
  { logo: "Seattle Met", quote: "Cafe Soda has rewritten what Little Saigon could be.", date: "Mar 2026" },
  { logo: "Eater Seattle", quote: "Phin-brewed perfection — and the egg coffee is unreal.", date: "Feb 2026" },
  { logo: "The Stranger", quote: "A love letter to cà phê sữa đá that reads in two languages.", date: "Jan 2026" },
];

function StoryPage() {
  React.useEffect(() => { applyTheme("lacquer", "Playfair Display"); }, []);
  return (
    <div className="cs-root">
      <Nav current="story" />

      {/* HERO with floating emblem */}
      <header className="cs-storyhero">
        <div className="cs-storyhero-rings">
          {[800, 640, 480, 340, 220].map((s, i) => (
            <div key={i} className="cs-storyhero-ring" style={{ width: s, height: s, opacity: 0.15 - i * 0.02 }} />
          ))}
        </div>
        <Reveal className="cs-eyebrow"><span className="cs-eyebrow-line" /> Our Story <span className="cs-eyebrow-line" /></Reveal>
        <Reveal delay={150} as="div" className="cs-pagehero-vi">Câu Chuyện Của Chúng Tôi</Reveal>
        <Reveal delay={250} as="h1" className="cs-pagehero-title">A pun. A bean.<br /><em>A coffee house.</em></Reveal>
        <Reveal delay={400} className="cs-storyhero-emblem cs-float"><Emblem size={360} /></Reveal>
        <Reveal delay={550} as="p" className="cs-pagehero-lede">
          Cafe Soda was named in a kitchen in Beacon Hill, brewed first
          in a Buôn Ma Thuột phin, and opened in Little Saigon in 2025.
          This is how it happened.
        </Reveal>
      </header>

      {/* Section 1 — The Name */}
      <section className="cs-name-section">
        <Reveal className="cs-section-label" style={{ justifyContent: "center" }}>
          <span className="cs-label-line" /> The Name
        </Reveal>
        <Reveal delay={100} as="h2" className="cs-name-big">
          Say it fast.<br /><em>"Cà Phê Sữa Đá."</em>
        </Reveal>
        <Reveal delay={200} className="cs-name-equation">
          <div className="cs-name-eq-block">
            <div className="cs-name-eq-vi">Cà Phê</div>
            <div className="cs-name-eq-en">Coffee</div>
          </div>
          <div className="cs-name-eq-op">+</div>
          <div className="cs-name-eq-block">
            <div className="cs-name-eq-vi">Sữa</div>
            <div className="cs-name-eq-en">Milk</div>
          </div>
          <div className="cs-name-eq-op">+</div>
          <div className="cs-name-eq-block">
            <div className="cs-name-eq-vi">Đá</div>
            <div className="cs-name-eq-en">Ice</div>
          </div>
          <div className="cs-name-eq-op">=</div>
          <div className="cs-name-eq-block" style={{ background: "var(--cs-red)", borderColor: "var(--cs-gold)" }}>
            <div className="cs-name-eq-vi" style={{ color: "var(--cs-gold-lt)" }}>Cafe Soda</div>
            <div className="cs-name-eq-en" style={{ color: "var(--cs-gold)" }}>Our Name</div>
          </div>
        </Reveal>
        <Reveal delay={350} as="p" className="cs-name-body">
          Run <em>"Cà Phê Sữa Đá"</em> through an American ear and you'll hear it: <em>cafe soda</em>.
          A bilingual joke that works in both languages, that costs nothing to explain,
          and that has been sitting there for a hundred years waiting for someone to bottle it.
        </Reveal>
        <Reveal delay={500} as="p" className="cs-name-body" style={{ marginTop: 20 }}>
          We didn't invent the drink. We didn't invent the pun. We just opened the door.
        </Reveal>
      </section>

      {/* Section 2 — Timeline */}
      <section className="cs-section-dark">
        <div className="cs-section-inner" style={{ textAlign: "center" }}>
          <Reveal className="cs-eyebrow cs-eyebrow-gold"><span className="cs-eyebrow-line" /> A Brief History <span className="cs-eyebrow-line" /></Reveal>
          <Reveal delay={100} as="h2" className="cs-h2 cs-h2-light" style={{ marginBottom: 18 }}>
            Vietnamese coffee, <em>in seven beats.</em>
          </Reveal>
          <Reveal delay={200} as="p" style={{ maxWidth: 600, margin: "0 auto 20px", color: "var(--cs-cream)", opacity: 0.7, fontSize: 16, lineHeight: 1.7, fontWeight: 300 }}>
            One country, two centuries, four wars, one bean. A short version.
          </Reveal>
        </div>
        <div className="cs-timeline">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 80} className="cs-timeline-item">
              <div className="cs-timeline-year">{t.year}</div>
              <div className="cs-timeline-text">{t.text}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Section 3 — Sourcing */}
      <section className="cs-sourcing">
        <Reveal>
          <div className="cs-section-label"><span className="cs-label-line" /> Our Sourcing</div>
          <h2 className="cs-h2">From <em>Buôn Ma Thuột</em><br />to Little Saigon.</h2>
          <p className="cs-body">
            Every bean in our phin comes from family-owned farms in
            <em> Buôn Ma Thuột</em> — the highland city Vietnamese coffee people
            simply call <em>the coffee capital</em>.
          </p>
          <p className="cs-body">
            We work direct: no broker, no middleman. We pay a premium that goes
            to the growers, and we taste every harvest before we buy.
            Roasted in small batches in our Seattle roaster, ground per cup, brewed through a phin.
          </p>
          <p className="cs-body" style={{ marginTop: 26 }}>
            <strong style={{ color: "var(--cs-red-dk)" }}>Robusta, not arabica.</strong> Bolder, darker, more caffeine.
            The bean Việt Nam built its coffee culture around.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="cs-vn-map">
            <svg viewBox="0 0 200 240" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid meet">
              {/* Stylized Vietnam silhouette — simple S-curve shape */}
              <path
                d="M 100 18 C 110 30, 105 50, 118 64 C 132 76, 128 90, 120 100 C 110 112, 116 122, 118 132 C 122 148, 110 158, 108 172 C 104 184, 90 192, 80 200 C 68 208, 60 218, 56 224 C 60 216, 56 210, 64 200 C 72 188, 80 178, 86 168 C 92 156, 92 144, 90 134 C 88 124, 92 116, 100 108 C 110 96, 96 86, 90 76 C 84 66, 86 52, 92 38 C 96 28, 96 22, 100 18 Z"
                fill="rgba(178,34,52,0.16)"
                stroke="var(--cs-red-dk)"
                strokeWidth="1.4"
              />
              {/* Buôn Ma Thuột pin */}
              <circle cx="106" cy="138" r="8" fill="var(--cs-red)" />
              <circle cx="106" cy="138" r="3" fill="var(--cs-gold-lt)" />
              <line x1="106" y1="138" x2="142" y2="120" stroke="var(--cs-red-dk)" strokeWidth="0.8" opacity="0.6" />
              <text x="146" y="118" fontFamily="Playfair Display, serif" fontWeight="700" fontSize="9" fill="var(--cs-red-dk)">Buôn Ma Thuột</text>
              <text x="146" y="129" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="7" fill="var(--cs-body)" opacity="0.7">Central Highlands</text>
              {/* Hà Nội, Sài Gòn for reference */}
              <circle cx="98" cy="62" r="2" fill="var(--cs-body)" opacity="0.5" />
              <text x="78" y="62" fontFamily="Be Vietnam Pro, sans-serif" fontSize="6" fill="var(--cs-body)" opacity="0.55" letterSpacing="1">HÀ NỘI</text>
              <circle cx="90" cy="186" r="2" fill="var(--cs-body)" opacity="0.5" />
              <text x="64" y="186" fontFamily="Be Vietnam Pro, sans-serif" fontSize="6" fill="var(--cs-body)" opacity="0.55" letterSpacing="1">SÀI GÒN</text>
            </svg>
            <div style={{ position: "absolute", bottom: 16, left: 18, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--cs-gold)", fontSize: 14, opacity: 0.85 }}>
              Việt Nam — single origin
            </div>
          </div>
        </Reveal>
      </section>

      {/* Section 4 — Little Saigon */}
      <section className="cs-section-paper">
        <div className="cs-section-inner">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <Reveal>
              <div className="cs-section-label"><span className="cs-label-line" /> Khu Phố Little Saigon</div>
              <h2 className="cs-h2">A <em>neighborhood</em><br />before a brand.</h2>
              <p className="cs-body">
                Little Saigon — the southeastern edge of Chinatown–ID — has been the heart of Seattle's
                Vietnamese community for forty years. Phở on Jackson, tofu on King, the New Year parade
                that closes 12th Avenue every February.
              </p>
              <p className="cs-body">
                We built Cafe Soda here on purpose. We're a coffee shop, but we're also a part of a
                neighborhood that has been quietly feeding this city since 1985. We hire from it, source
                from it, and host events for it.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div style={{
                aspectRatio: "1/1",
                background: "var(--cs-cream)",
                border: "1px solid rgba(212,160,23,0.4)",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(rgba(212,160,23,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,0.12) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }} />
                <div style={{ position: "absolute", inset: "10% 12%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  {["S Jackson St", "S King St", "S Weller St", "S Dearborn St"].map((s, i) => (
                    <div key={i} style={{
                      fontSize: 10, letterSpacing: 2, textTransform: "uppercase",
                      color: "var(--cs-body)", opacity: 0.5,
                      borderTop: "1px dashed rgba(107,15,15,0.3)",
                      paddingTop: 6,
                    }}>{s}</div>
                  ))}
                </div>
                <div style={{ position: "absolute", left: "44%", top: "32%", transform: "translate(-50%,-100%)", textAlign: "center" }}>
                  <svg viewBox="0 0 40 50" width="40" height="50">
                    <path d="M20 1 C 30 1, 38 9, 38 19 C 38 32, 20 49, 20 49 C 20 49, 2 32, 2 19 C 2 9, 10 1, 20 1 Z" fill="var(--cs-red)" stroke="var(--cs-gold)" strokeWidth="1.4" />
                    <circle cx="20" cy="19" r="6" fill="var(--cs-cream)" />
                  </svg>
                  <div style={{ marginTop: 6, fontFamily: "var(--cs-display)", fontWeight: 700, color: "var(--cs-red-dk)", fontSize: 14 }}>Cafe Soda</div>
                </div>
                <div style={{ position: "absolute", bottom: 18, right: 22, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--cs-red-dk)", fontSize: 16, opacity: 0.85 }}>
                  Little Saigon · Seattle
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 5 — Founders */}
      <section className="cs-section-light">
        <div className="cs-section-inner">
          <Reveal style={{ textAlign: "center", marginBottom: 30 }}>
            <div className="cs-section-label" style={{ justifyContent: "center" }}><span className="cs-label-line" /> Who We Are</div>
            <h2 className="cs-h2" style={{ textAlign: "center" }}>The <em>founders.</em></h2>
          </Reveal>
          <div className="cs-founders-grid">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.name} delay={i * 120} className="cs-founder-card">
                <div className="cs-founder-photo">Photo placeholder</div>
                <h3 className="cs-founder-name">{f.name}</h3>
                <div className="cs-founder-role">{f.role}</div>
                <p className="cs-founder-bio">{f.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Press wall */}
      <section className="cs-section-dark">
        <div className="cs-section-inner">
          <Reveal style={{ textAlign: "center" }}>
            <div className="cs-eyebrow cs-eyebrow-gold" style={{ justifyContent: "center" }}><span className="cs-eyebrow-line" /> Press <span className="cs-eyebrow-line" /></div>
            <h2 className="cs-h2 cs-h2-light" style={{ textAlign: "center", marginBottom: 0 }}>
              In <em>good company.</em>
            </h2>
          </Reveal>
          <div className="cs-press-grid">
            {PRESS.map((p, i) => (
              <Reveal key={p.logo} delay={i * 80} className="cs-press-card">
                <div className="cs-press-logo">{p.logo}</div>
                <div className="cs-press-quote">"{p.quote}"</div>
                <div className="cs-press-date">{p.date}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<StoryPage />);
