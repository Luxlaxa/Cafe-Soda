const { useState, useEffect, useRef } = React;

/* ---------- HERO ---------- */
const Hero = () => (
  <section className="cs-hero" id="top">
    <div className="cs-hero-grid" aria-hidden="true" />
    <div className="cs-hero-glow" aria-hidden="true" />
    <div className="cs-hero-inner">
      <div className="cs-hero-text">
        <Reveal delay={200} className="cs-eyebrow">
          <span className="cs-eyebrow-line" /> Seattle · Little Saigon <span className="cs-eyebrow-line" />
        </Reveal>
        <Reveal delay={400} as="h1" className="cs-hero-title">
          <span className="cs-title-line">Cafe</span>
          <span className="cs-title-line cs-title-italic">Soda</span>
        </Reveal>
        <Reveal delay={600} className="cs-hero-sub">
          Cà Phê Sữa Đá — Seattle's Vietnamese Coffee House
        </Reveal>
        <Reveal delay={800} as="p" className="cs-hero-desc">
          Every cup is a slow pour, a quiet ritual, a taste of Sài Gòn
          in the heart of Little Saigon. Phin-brewed robusta, condensed
          milk, generations of craft.
        </Reveal>
        <Reveal delay={1000} className="cs-hero-ctas">
          <a href="#menu" className="cs-btn cs-btn-primary">Explore the Menu</a>
          <a href="#story" className="cs-btn cs-btn-ghost">Our story →</a>
        </Reveal>
      </div>
      <Reveal delay={700} className="cs-hero-emblem">
        <div className="cs-hero-emblem-glow" aria-hidden="true" />
        <div className="cs-float">
          <Emblem size={520} />
        </div>
      </Reveal>
    </div>
    <div className="cs-hero-scroll">
      <span>scroll</span>
      <span className="cs-hero-scroll-line" />
    </div>
  </section>
);

/* ---------- Gradient rule + Marquee ---------- */
const GradientRule = () => <div className="cs-rule" aria-hidden="true" />;

const Marquee = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="cs-marquee">
      <div className="cs-marquee-track">
        {items.map((it, i) => (
          <span key={i} className="cs-marquee-item">
            <span>{it}</span>
            <span className="cs-marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ---------- Intro split ---------- */
const Intro = () => (
  <section className="cs-intro">
    <div className="cs-intro-left">
      <Reveal className="cs-section-label">
        <span className="cs-label-line" /> The Tradition
      </Reveal>
      <Reveal delay={120} as="h2" className="cs-h2">
        Slow poured.<br />
        <em>Deep rooted.</em><br />
        Boldly brewed.
      </Reveal>
      <Reveal delay={240} as="p" className="cs-body">
        Coffee arrived in Việt Nam in 1857 with French missionaries
        and stayed for a reason: the climate of the Central Highlands
        produces a robusta unlike anywhere else — bolder, more
        caffeinated, almost chocolatey.
      </Reveal>
      <Reveal delay={320} as="p" className="cs-body">
        The phin — a small metal drip filter — turned that bean into a
        ritual. Slow drops, condensed milk waiting at the bottom of
        the glass, ice that cracks as the coffee finally hits it.
      </Reveal>
      <div className="cs-divider-gold" />
      <Reveal delay={400} className="cs-stat-row">
        <div className="cs-stat"><div className="cs-stat-num">1857</div><div className="cs-stat-lbl">Coffee arrives in Việt Nam</div></div>
        <div className="cs-stat"><div className="cs-stat-num">#2</div><div className="cs-stat-lbl">World coffee exporter</div></div>
        <div className="cs-stat"><div className="cs-stat-num">∞</div><div className="cs-stat-lbl">Flavors in one phin</div></div>
      </Reveal>
    </div>
    <div className="cs-intro-right">
      <div className="cs-intro-phin cs-float-slow">
        <PhinIcon size={210} />
      </div>
      <div className="cs-intro-caption">The phin — slow, patient, perfect</div>
    </div>
  </section>
);

/* ---------- MENU ---------- */
const Menu = () => {
  const tabs = ["Traditional", "Specialty", "Seasonal", "Bites"];
  const [active, setActive] = useState("Traditional");
  return (
    <section className="cs-menu" id="menu">
      <div className="cs-menu-bg" aria-hidden="true" />
      <Reveal className="cs-menu-head">
        <div className="cs-eyebrow cs-eyebrow-gold">
          <span className="cs-eyebrow-line" /> Thực Đơn · The Menu <span className="cs-eyebrow-line" />
        </div>
        <h2 className="cs-h2 cs-h2-light">
          Cà Phê <em>Classics</em>
        </h2>
        <p className="cs-menu-sub">
          Traditional Vietnamese drinks, brewed with phin-filtered robusta
          sourced direct from Buôn Ma Thuột.
        </p>
      </Reveal>

      <div className="cs-tabs">
        {tabs.map((t) => (
          <button
            key={t}
            className={`cs-tab ${active === t ? "is-active" : ""}`}
            onClick={() => setActive(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="cs-menu-grid" key={active}>
        {MENU[active].map((d, i) => (
          <Reveal key={d.en} delay={i * 60} className="cs-card">
            <div className="cs-card-vi">{d.vi}</div>
            <div className="cs-card-en">{d.en}</div>
            <p className="cs-card-desc">{d.desc}</p>
            <div className="cs-card-foot">
              <span className="cs-card-price">{d.price}</span>
              <span className="cs-card-tag">{d.tag}</span>
            </div>
            <span className="cs-card-underline" aria-hidden="true" />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

/* ---------- Culture strip ---------- */
const Culture = () => {
  const cols = [
    { Icon: PhinIcon, title: "The Phin", body: "A ritual, not just a method. Gravity, patience, robusta — the slow pour at the heart of every cup." },
    { Icon: LotusIcon, title: "The Lotus", body: "Việt Nam's national flower. A symbol of resilience — beauty rising from still water." },
    { Icon: DragonIcon, title: "The Dragon", body: "Việt Nam's celestial guardian — power, fortune, and prosperity coiled in one curving line." },
    { Icon: BeanIcon, title: "Robusta Soul", body: "Việt Nam's finest robusta — bolder, more caffeinated, richer than arabica. The bean we built around." },
  ];
  return (
    <section className="cs-culture" id="culture">
      <div className="cs-culture-grid">
        {cols.map(({ Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 100} className="cs-culture-col">
            <div className="cs-culture-icon"><Icon size={64} color="#F0C842" /></div>
            <h3 className="cs-culture-title">{title}</h3>
            <p className="cs-culture-body">{body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

/* ---------- Story preview ---------- */
const Story = () => (
  <section className="cs-story" id="story">
    <div className="cs-story-left">
      <div className="cs-story-rings" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="cs-ring" style={{ inset: `${i * 18}px` }} />
        ))}
      </div>
      <div className="cs-float">
        <Emblem size={380} />
      </div>
      <div className="cs-est-badge">
        <svg viewBox="0 0 160 160" width="140" height="140">
          <defs>
            <path id="badgeArc" d="M 80,80 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
          </defs>
          <text fill="#F0C842" fontSize="13" letterSpacing="6" fontFamily="'Be Vietnam Pro', sans-serif">
            <textPath href="#badgeArc" startOffset="0">
              CAFE SODA · EST · 2025 · LITTLE SAIGON · CAFE SODA · EST · 2025 · LITTLE SAIGON ·
            </textPath>
          </text>
        </svg>
      </div>
    </div>
    <div className="cs-story-right">
      <div className="cs-section-label cs-label-dark">
        <span className="cs-label-line cs-label-line-dark" /> Our Story
      </div>
      <h2 className="cs-h2">
        A pun born<br />
        from <em>love.</em><br />
        A cup born<br />
        from <em>heritage.</em>
      </h2>
      <p className="cs-body">
        <strong>Cafe Soda</strong> is a bilingual joke that became a
        love letter. Say <em>"Cà Phê Sữa Đá"</em> fast in an American
        ear and you'll hear it — <em>cafe soda</em> — the drink, the
        name, the wink between two languages.
      </p>
      <p className="cs-body">
        We source robusta direct from family farms in Buôn Ma Thuột,
        the coffee capital of the Central Highlands. We brew through
        a phin, one cup at a time, and we serve it the way it has
        been served for a century: poured over ice, sweetened with
        condensed milk, never rushed.
      </p>
      <blockquote className="cs-quote">
        "Every cup of cà phê sữa đá is a conversation between past
        and present — between Sài Gòn and Seattle."
      </blockquote>
      <a href="#" className="cs-btn cs-btn-primary cs-btn-on-light">Read Our Full Story</a>
    </div>
  </section>
);

/* ---------- Location ---------- */
const Location = () => (
  <section className="cs-location" id="visit">
    <div className="cs-loc-left">
      <div className="cs-eyebrow cs-eyebrow-gold">
        <span className="cs-eyebrow-line" /> Visit Us
      </div>
      <h2 className="cs-h2 cs-h2-light">
        Find Us in <em>Little Saigon</em>
      </h2>
      <p className="cs-loc-sub">Khu Phố Little Saigon — Seattle, Washington</p>
      <div className="cs-loc-rows">
        <div className="cs-loc-row">
          <div className="cs-loc-ico">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1A0A00" strokeWidth="1.8">
              <path d="M12 21s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>
          <div>
            <div className="cs-loc-label">Address</div>
            <div className="cs-loc-val">1212 S Jackson St · Chinatown–International District<br />Seattle, WA 98104</div>
          </div>
        </div>
        <div className="cs-loc-row">
          <div className="cs-loc-ico">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1A0A00" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
          </div>
          <div>
            <div className="cs-loc-label">Hours</div>
            <div className="cs-loc-val">Mon–Fri · 7:00 am – 6:00 pm<br />Sat–Sun · 8:00 am – 7:00 pm</div>
          </div>
        </div>
        <div className="cs-loc-row">
          <div className="cs-loc-ico">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1A0A00" strokeWidth="1.8">
              <path d="M4 5l4 0 2 5-3 2c1 3 3 5 6 6l2-3 5 2 0 4c0 1-1 2-2 2-9 0-16-7-16-16 0-1 1-2 2-2z" />
            </svg>
          </div>
          <div>
            <div className="cs-loc-label">Contact</div>
            <div className="cs-loc-val">hello@cafesodaseattle.com<br />(206) 555-SODA</div>
          </div>
        </div>
      </div>
      <a href="#" className="cs-btn cs-btn-gold">Get Directions</a>
    </div>
    <div className="cs-loc-right">
      <div className="cs-map-stub" aria-label="Map placeholder">
        <div className="cs-map-grid" />
        <div className="cs-map-pin">
          <svg viewBox="0 0 40 50" width="44" height="56">
            <path d="M20 1 C 30 1, 38 9, 38 19 C 38 32, 20 49, 20 49 C 20 49, 2 32, 2 19 C 2 9, 10 1, 20 1 Z"
                  fill="#B22234" stroke="#F0C842" strokeWidth="1.5" />
            <circle cx="20" cy="19" r="6" fill="#F8F2E4" />
          </svg>
          <span className="cs-map-pin-label">Cafe Soda</span>
        </div>
        <div className="cs-map-street cs-map-street-h" style={{ top: "32%" }}>S Jackson St</div>
        <div className="cs-map-street cs-map-street-h" style={{ top: "68%" }}>S Dearborn St</div>
        <div className="cs-map-street cs-map-street-v" style={{ left: "28%" }}>12th Ave S</div>
        <div className="cs-map-street cs-map-street-v" style={{ left: "62%" }}>14th Ave S</div>
        <div className="cs-map-note">Little Saigon · Seattle</div>
      </div>
    </div>
  </section>
);

Object.assign(window, {
  Hero, GradientRule, Marquee, Intro, Menu, Culture, Story, Location,
});
