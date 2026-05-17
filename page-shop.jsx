const { useState: useStateS } = React;

/* Đông Hồ-style product illustrations as inline SVG placeholders */
const ProductIllo = ({ kind, color = "var(--cs-red)" }) => {
  if (kind === "bag") return (
    <svg viewBox="0 0 200 200" style={{ width: "70%", height: "70%" }}>
      <path d="M 50 50 L 150 50 L 160 170 L 40 170 Z" fill="var(--cs-red)" stroke="var(--cs-red-dkr)" strokeWidth="3" />
      <rect x="58" y="58" width="84" height="50" fill="var(--cs-cream)" />
      <text x="100" y="80" fontFamily="Playfair Display, serif" fontWeight="900" fontSize="18" fill="var(--cs-red-dk)" textAnchor="middle">CAFE</text>
      <text x="100" y="100" fontFamily="Playfair Display, serif" fontWeight="900" fontStyle="italic" fontSize="18" fill="var(--cs-red-dk)" textAnchor="middle">Soda</text>
      <rect x="56" y="116" width="88" height="2" fill="var(--cs-gold)" />
      <text x="100" y="135" fontFamily="Be Vietnam Pro, sans-serif" fontSize="8" letterSpacing="2.5" fill="var(--cs-gold-lt)" textAnchor="middle">ROBUSTA · BUÔN MA THUỘT</text>
      <text x="100" y="155" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="11" fill="var(--cs-gold-lt)" textAnchor="middle">whole bean · 250g</text>
      <path d="M 40 50 L 50 36 L 150 36 L 160 50" fill="none" stroke="var(--cs-red-dkr)" strokeWidth="2" />
    </svg>
  );
  if (kind === "phin") return (
    <svg viewBox="0 0 200 200" style={{ width: "55%", height: "75%" }}>
      <rect x="86" y="60" width="28" height="8" fill="var(--cs-gold)" />
      <rect x="78" y="68" width="44" height="6" fill="var(--cs-gold)" />
      <rect x="64" y="74" width="72" height="12" fill="var(--cs-gold)" stroke="var(--cs-red-dk)" strokeWidth="1.5" />
      <rect x="56" y="86" width="88" height="50" fill="var(--cs-cream)" stroke="var(--cs-red-dk)" strokeWidth="2" />
      <line x1="56" y1="100" x2="144" y2="100" stroke="var(--cs-red-dk)" strokeWidth="0.7" opacity="0.5" />
      <line x1="56" y1="115" x2="144" y2="115" stroke="var(--cs-red-dk)" strokeWidth="0.7" opacity="0.5" />
      <line x1="56" y1="125" x2="144" y2="125" stroke="var(--cs-red-dk)" strokeWidth="0.7" opacity="0.5" />
      <rect x="50" y="136" width="100" height="10" fill="var(--cs-gold)" />
      {/* steam */}
      <path d="M 80 58 C 76 50, 84 44, 80 36" fill="none" stroke="var(--cs-red-dk)" strokeWidth="1.5" opacity="0.6" />
      <path d="M 100 58 C 96 48, 104 42, 100 32" fill="none" stroke="var(--cs-red-dk)" strokeWidth="1.5" opacity="0.6" />
      <path d="M 120 58 C 116 50, 124 44, 120 36" fill="none" stroke="var(--cs-red-dk)" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
  if (kind === "jar") return (
    <svg viewBox="0 0 200 200" style={{ width: "55%", height: "80%" }}>
      <rect x="72" y="40" width="56" height="14" fill="var(--cs-gold)" stroke="var(--cs-red-dk)" strokeWidth="2" />
      <rect x="68" y="54" width="64" height="120" rx="6" fill="var(--cs-cream)" stroke="var(--cs-red-dk)" strokeWidth="2.5" />
      <rect x="72" y="58" width="56" height="60" fill="var(--cs-red)" opacity="0.06" />
      <rect x="72" y="100" width="56" height="50" fill="var(--cs-paper)" />
      <rect x="76" y="106" width="48" height="38" fill="var(--cs-red)" />
      <text x="100" y="120" fontFamily="Playfair Display, serif" fontWeight="900" fontStyle="italic" fontSize="11" fill="var(--cs-gold-lt)" textAnchor="middle">Sữa</text>
      <text x="100" y="134" fontFamily="Playfair Display, serif" fontWeight="900" fontStyle="italic" fontSize="11" fill="var(--cs-gold-lt)" textAnchor="middle">Đặc</text>
    </svg>
  );
  if (kind === "tote") return (
    <svg viewBox="0 0 200 200" style={{ width: "70%", height: "80%" }}>
      <path d="M 70 50 C 70 38, 85 30, 100 30 C 115 30, 130 38, 130 50" fill="none" stroke="var(--cs-red-dk)" strokeWidth="2.5" />
      <rect x="40" y="50" width="120" height="130" fill="var(--cs-paper)" stroke="var(--cs-red-dk)" strokeWidth="2.5" />
      <g transform="translate(100 120)">
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * 360) / 8;
          return (
            <g key={i} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-22" rx="6" ry="16" fill={i % 2 ? "var(--cs-gold)" : "var(--cs-red)"} opacity="0.85" />
            </g>
          );
        })}
        <circle r="6" fill="var(--cs-gold-lt)" />
      </g>
    </svg>
  );
  if (kind === "cup") return (
    <svg viewBox="0 0 200 200" style={{ width: "65%", height: "70%" }}>
      <path d="M 60 70 L 140 70 L 132 160 L 68 160 Z" fill="var(--cs-cream)" stroke="var(--cs-red-dk)" strokeWidth="2.5" />
      <ellipse cx="100" cy="70" rx="40" ry="6" fill="var(--cs-red)" opacity="0.4" />
      <path d="M 140 90 C 162 90, 162 130, 140 130" fill="none" stroke="var(--cs-red-dk)" strokeWidth="2.5" />
      <text x="100" y="120" fontFamily="Playfair Display, serif" fontWeight="900" fontStyle="italic" fontSize="22" fill="var(--cs-red-dk)" textAnchor="middle">Soda</text>
      <rect x="70" y="130" width="60" height="2" fill="var(--cs-gold)" />
    </svg>
  );
  if (kind === "pin") return (
    <svg viewBox="0 0 200 200" style={{ width: "70%", height: "70%" }}>
      <circle cx="100" cy="100" r="62" fill="var(--cs-red)" stroke="var(--cs-gold)" strokeWidth="3" />
      <circle cx="100" cy="100" r="56" fill="none" stroke="var(--cs-gold-lt)" strokeWidth="1" opacity="0.7" />
      <g transform="translate(100 100)">
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * 360) / 8;
          return (
            <g key={i} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-32" rx="6" ry="18" fill={i % 2 ? "var(--cs-gold)" : "var(--cs-gold-lt)"} opacity={i % 2 ? 0.95 : 0.75} />
            </g>
          );
        })}
        <circle r="8" fill="var(--cs-gold-lt)" />
      </g>
    </svg>
  );
  if (kind === "gift") return (
    <svg viewBox="0 0 200 200" style={{ width: "75%", height: "75%" }}>
      <rect x="36" y="60" width="128" height="110" fill="var(--cs-red)" stroke="var(--cs-red-dkr)" strokeWidth="2.5" />
      <rect x="36" y="60" width="128" height="22" fill="var(--cs-red-dk)" />
      <rect x="92" y="50" width="16" height="120" fill="var(--cs-gold)" />
      <rect x="36" y="92" width="128" height="6" fill="var(--cs-gold)" />
      {/* Bow */}
      <ellipse cx="80" cy="56" rx="14" ry="10" fill="var(--cs-gold)" stroke="var(--cs-gold-lt)" strokeWidth="1.5" />
      <ellipse cx="120" cy="56" rx="14" ry="10" fill="var(--cs-gold)" stroke="var(--cs-gold-lt)" strokeWidth="1.5" />
      <rect x="94" y="48" width="12" height="14" fill="var(--cs-gold-lt)" />
      <text x="100" y="135" fontFamily="Playfair Display, serif" fontStyle="italic" fontWeight="900" fontSize="16" fill="var(--cs-gold-lt)" textAnchor="middle">Tết</text>
      <text x="100" y="155" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="11" fill="var(--cs-gold-lt)" textAnchor="middle">Lunar New Year</text>
    </svg>
  );
  return null;
};

const PRODUCTS = {
  Coffee: [
    { kind: "bag", vi: "Cà Phê Hạt", name: "Robusta Whole Bean — 250g", desc: "Direct trade. Buôn Ma Thuột. Roasted weekly in Seattle.", price: "$18", bg: "var(--cs-paper)" },
    { kind: "bag", vi: "Cà Phê Hạt", name: "Robusta Whole Bean — 500g", desc: "The size we drink at home. Same bean, more of it.", price: "$32", bg: "var(--cs-cream)" },
    { kind: "bag", vi: "Cà Phê Hạt", name: "Robusta Whole Bean — 1kg", desc: "For the daily phin household. Saves ~15%.", price: "$58", bg: "var(--cs-paper)" },
  ],
  Equipment: [
    { kind: "phin", vi: "Bộ Phin", name: "Stainless Phin Filter — 4oz", desc: "Single-serving phin, food-grade stainless. Sized for one classic cà phê sữa đá.", price: "$28", bg: "var(--cs-cream)" },
    { kind: "phin", vi: "Bộ Phin", name: "Starter Phin Kit", desc: "Phin filter, 250g robusta, condensed milk jar, recipe card.", price: "$48", bg: "var(--cs-paper)" },
    { kind: "jar", vi: "Sữa Đặc", name: "House Condensed Milk — 14oz", desc: "Made in-house from grass-fed dairy & cane sugar. Cleaner than the can.", price: "$12", bg: "var(--cs-cream)" },
  ],
  Merch: [
    { kind: "tote", vi: "Túi Vải", name: "Lotus Tote", desc: "Heavy canvas, screen-printed dragon-lotus. Holds five baguettes.", price: "$24", bg: "var(--cs-paper)" },
    { kind: "cup", vi: "Ly Sứ", name: "Ceramic Phin Cup", desc: "12oz ceramic, gold script. Stackable. Dishwasher safe.", price: "$22", bg: "var(--cs-cream)" },
    { kind: "pin", vi: "Huy Hiệu", name: "Dragon-Lotus Enamel Pin", desc: "Hard enamel, gold plating. The full emblem in 1.5 inches.", price: "$14", bg: "var(--cs-paper)" },
  ],
  Gifts: [
    { kind: "gift", vi: "Quà Tết", name: "Tết Gift Box", desc: "500g robusta, phin, condensed milk, two lì xì envelopes, mooncake.", price: "$78", bg: "var(--cs-cream)" },
    { kind: "gift", vi: "Quà Tặng", name: "Phin Starter Gift", desc: "Phin, 250g robusta, ceramic cup, condensed milk. Wrapped in red.", price: "$64", bg: "var(--cs-paper)" },
    { kind: "gift", vi: "Quà Tặng", name: "Cafe Soda Sampler", desc: "Three roasts, recipe cards, tote. The whole Cafe Soda welcome.", price: "$54", bg: "var(--cs-cream)" },
  ],
};

const TOTAL_PRODUCTS = Object.values(PRODUCTS).flat().length;

function ShopPage() {
  React.useEffect(() => { applyTheme("lacquer", "Playfair Display"); }, []);
  const [cart, setCart] = useStateS(0);
  const [filter, setFilter] = useStateS("All");
  const cats = ["All", ...Object.keys(PRODUCTS)];
  const visible = filter === "All"
    ? PRODUCTS
    : { [filter]: PRODUCTS[filter] };

  return (
    <div className="cs-root">
      <Nav current="shop" />

      <header className="cs-pagehero">
        <div className="cs-pagehero-grid" />
        <div className="cs-pagehero-glow" />
        <div className="cs-pagehero-inner">
          <Reveal className="cs-eyebrow"><span className="cs-eyebrow-line" /> Cửa Hàng · The Shop <span className="cs-eyebrow-line" /></Reveal>
          <Reveal delay={150} as="div" className="cs-pagehero-vi">Mang Cafe Soda Về Nhà</Reveal>
          <Reveal delay={250} as="h1" className="cs-pagehero-title">Take it <em>home.</em></Reveal>
          <Reveal delay={400} as="p" className="cs-pagehero-lede">
            Robusta, phins, condensed milk, merch. Everything we use behind the bar — boxed up,
            shipped from Seattle, ready for your kitchen.
          </Reveal>
        </div>
      </header>

      <section className="cs-section-paper" style={{ paddingTop: 70 }}>
        <div className="cs-section-inner" style={{ maxWidth: 1480 }}>

          {/* Filter bar */}
          <Reveal className="cs-tabs" style={{ marginBottom: 50 }}>
            {cats.map((c) => (
              <button
                key={c}
                className={`cs-tab ${filter === c ? "is-active" : ""}`}
                onClick={() => setFilter(c)}
                style={{
                  background: filter === c ? "var(--cs-red)" : "transparent",
                  color: filter === c ? "var(--cs-gold-lt)" : "var(--cs-red-dk)",
                  borderColor: filter === c ? "var(--cs-red)" : "rgba(107,15,15,0.4)",
                }}
              >
                {c}
              </button>
            ))}
            <span style={{ alignSelf: "center", marginLeft: 12, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: "var(--cs-red-dk)", opacity: 0.6 }}>
              {filter === "All" ? `${TOTAL_PRODUCTS} items` : `${PRODUCTS[filter].length} items`}
            </span>
          </Reveal>

          {Object.entries(visible).map(([cat, items]) => (
            <div key={cat}>
              <Reveal as="h2" className="cs-shop-cat-h">
                {cat === "Coffee" && <>The <em>Beans</em></>}
                {cat === "Equipment" && <>The <em>Tools</em></>}
                {cat === "Merch" && <>The <em>Merch</em></>}
                {cat === "Gifts" && <>The <em>Gifts</em></>}
              </Reveal>
              <div className="cs-shop-grid">
                {items.map((p, i) => (
                  <Reveal key={p.name} delay={i * 70} className="cs-shop-card">
                    <div className="cs-shop-img" style={{ background: p.bg, display: "grid", placeItems: "center" }}>
                      <ProductIllo kind={p.kind} />
                    </div>
                    <div className="cs-shop-body">
                      <div className="cs-shop-vi">{p.vi}</div>
                      <h3 className="cs-shop-name">{p.name}</h3>
                      <p className="cs-shop-desc">{p.desc}</p>
                      <div className="cs-shop-foot">
                        <span className="cs-shop-price">{p.price}</span>
                        <button
                          className="cs-shop-add"
                          onClick={() => setCart((c) => c + 1)}
                          style={{ cursor: "pointer", background: "transparent", fontFamily: "inherit" }}
                        >
                          Add +
                        </button>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wholesale / shipping note */}
      <section className="cs-section-dark" style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div className="cs-section-inner" style={{ textAlign: "center" }}>
          <Reveal as="div" className="cs-eyebrow cs-eyebrow-gold" style={{ justifyContent: "center" }}>
            <span className="cs-eyebrow-line" /> Free shipping over $50 <span className="cs-eyebrow-line" />
          </Reveal>
          <Reveal delay={120} as="h2" className="cs-h2 cs-h2-light" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginTop: 12 }}>
            Roasted weekly. <em>Shipped Mondays.</em>
          </Reveal>
          <Reveal delay={220} as="p" className="cs-body" style={{ color: "var(--cs-cream)", opacity: 0.7, maxWidth: 580, margin: "0 auto 30px" }}>
            Beans never sit. Orders placed by Sunday noon ship the same week from our Seattle roaster.
          </Reveal>
          <Reveal delay={320}>
            <a href="Visit Us.html" className="cs-btn cs-btn-gold">Wholesale inquiries →</a>
          </Reveal>
        </div>
      </section>

      {/* Floating cart pill */}
      <div style={{
        position: "fixed",
        right: 28, bottom: 28,
        background: "var(--cs-red)",
        color: "var(--cs-gold-lt)",
        padding: "14px 22px",
        border: "1px solid var(--cs-gold)",
        fontSize: 13, letterSpacing: 1.6, textTransform: "uppercase", fontWeight: 600,
        boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
        transform: cart > 0 ? "translateY(0)" : "translateY(120%)",
        transition: "transform 0.4s cubic-bezier(.2,.7,.2,1)",
        zIndex: 900,
        display: "flex", alignItems: "center", gap: 14,
        cursor: "pointer",
      }}>
        <span style={{ background: "var(--cs-gold)", color: "var(--cs-ink)", width: 26, height: 26, borderRadius: "50%", display: "grid", placeItems: "center", fontWeight: 700 }}>{cart}</span>
        <span>View Cart</span>
      </div>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ShopPage />);
