const { useState: useStateM } = React;

const MENU_EXTRA = {
  Traditional: {
    vi: "Truyền Thống",
    intro: "The classics — drinks that have been brewing since the first phin dripped in 1920s Sài Gòn.",
    items: [
      { vi: "Cà Phê Sữa Đá", en: "Cafe Soda Classic", desc: "Phin-brewed robusta, sweetened condensed milk, ice. The namesake.", price: "$6", prep: ["Iced"], tag: "Signature" },
      { vi: "Cà Phê Sữa Nóng", en: "Hot Milk Coffee", desc: "Same robusta and condensed milk, served hot through the phin.", price: "$5.50", prep: ["Hot"], tag: "Classic" },
      { vi: "Cà Phê Trứng", en: "Egg Coffee", desc: "Whipped egg yolk, condensed milk, dark robusta. A Hà Nội original from 1946.", price: "$7", prep: ["Hot", "Iced"], tag: "Hà Nội Heritage" },
      { vi: "Cà Phê Muối", en: "Salt Coffee", desc: "Huế-style salted cream foam over phin-brewed robusta.", price: "$6.50", prep: ["Iced"], tag: "Huế Style" },
      { vi: "Cà Phê Dừa", en: "Coconut Coffee", desc: "Coconut cream blended with robusta over crushed ice.", price: "$7", prep: ["Blended"], tag: "Crowd Favorite" },
      { vi: "Cà Phê Đen", en: "Black Coffee", desc: "Just robusta, slow phin pour. No sugar, no apology.", price: "$5", prep: ["Hot", "Iced"], tag: "Purist" },
      { vi: "Cà Phê Sữa Chua", en: "Yogurt Coffee", desc: "Tangy yogurt layered with sweet phin coffee.", price: "$7", prep: ["Iced"], tag: "Hà Nội Modern" },
      { vi: "Bạc Xỉu", en: "White Coffee", desc: "More condensed milk, less coffee — Sài Gòn's gentler cousin.", price: "$5.50", prep: ["Hot", "Iced"], tag: "Sài Gòn" },
    ],
  },
  Specialty: {
    vi: "Đặc Biệt",
    intro: "House blends and seasonal-fruit pairings — modern Vietnamese coffee, rooted in tradition.",
    items: [
      { vi: "Cà Phê Mít", en: "Jackfruit Coffee", desc: "Ripe jackfruit syrup, phin robusta, oat milk.", price: "$7.50", prep: ["Iced"], tag: "Tropical" },
      { vi: "Cà Phê Mè Đen", en: "Black Sesame Latte", desc: "Toasted black sesame paste, robusta espresso, steamed milk.", price: "$7", prep: ["Hot", "Iced"], tag: "Nutty" },
      { vi: "Cold Brew Caramel Muối", en: "Sea Salt Caramel Cold Brew", desc: "16-hour cold brew, house caramel, flaked sea salt.", price: "$7", prep: ["Iced"], tag: "Slow Brewed" },
      { vi: "Cà Phê Ổi", en: "Guava Coffee", desc: "Pink guava purée, phin pour, condensed milk swirl.", price: "$7", prep: ["Iced"], tag: "Tropical" },
      { vi: "Cà Phê Lá Dứa", en: "Pandan Coffee", desc: "House pandan syrup, robusta, coconut foam.", price: "$7", prep: ["Hot", "Iced"], tag: "Aromatic" },
      { vi: "Cà Phê Cúc", en: "Chrysanthemum Coffee", desc: "Chrysanthemum-infused robusta, raw honey, lemon zest.", price: "$7.50", prep: ["Hot"], tag: "Floral" },
      { vi: "Cà Phê Sầu Riêng", en: "Durian Latte", desc: "Fresh durian, robusta, condensed milk. Yes, really.", price: "$8", prep: ["Iced", "Blended"], tag: "Bold" },
      { vi: "Cà Phê Cốt Dừa", en: "Coconut Cold Brew", desc: "Cold brew over coconut cream, fresh young coconut shaved on top.", price: "$7.50", prep: ["Iced"], tag: "Cooling" },
    ],
  },
  Seasonal: {
    vi: "Theo Mùa",
    intro: "Limited drinks tied to the Vietnamese calendar — Tết, Mid-Autumn, harvest, winter chai.",
    items: [
      { vi: "Lucky Red", en: "Tết Red Lacquer", desc: "Hibiscus, lychee, robusta. Served through Lunar New Year.", price: "$8", prep: ["Iced"], tag: "Tết" },
      { vi: "Bánh Trung Thu Latte", en: "Mooncake Latte", desc: "Lotus seed paste, salted yolk foam, robusta. Mid-Autumn only.", price: "$8", prep: ["Hot"], tag: "Mid-Autumn" },
      { vi: "Mùa Thu Phin", en: "Autumn Harvest", desc: "Roasted chestnut syrup, cinnamon, phin pour.", price: "$7.50", prep: ["Hot", "Iced"], tag: "Fall" },
      { vi: "Phin Chai Đông", en: "Winter Chai Phin", desc: "Cardamom, star anise, ginger, robusta, oat milk.", price: "$7.50", prep: ["Hot"], tag: "Winter" },
      { vi: "Mùa Hè Đá Bào", en: "Summer Freeze", desc: "Shaved ice, condensed milk, phin shot poured tableside.", price: "$8", prep: ["Iced", "Blended"], tag: "Summer" },
      { vi: "Hoa Xuân", en: "Spring Blossom", desc: "Jasmine cold brew, fresh peach, gold leaf garnish.", price: "$8", prep: ["Iced"], tag: "Spring" },
    ],
  },
  Bites: {
    vi: "Đồ Ăn Vặt",
    intro: "Vietnamese sandwiches, rice rolls, and sweets — built for a long coffee.",
    items: [
      { vi: "Bánh Mì", en: "Saigon Sandwich", desc: "House pâté, pickled daikon & carrot, cilantro, jalapeño on baguette.", price: "$10", prep: [], tag: "Lunch" },
      { vi: "Bánh Cuốn", en: "Steamed Rice Rolls", desc: "Pork & wood-ear mushroom in soft rice sheets, nước chấm.", price: "$9", prep: [], tag: "Morning" },
      { vi: "Chè (Rotating)", en: "Sweet Soup of the Day", desc: "Ask the bar — coconut, mung bean, taro, or longan.", price: "$6", prep: [], tag: "Dessert" },
      { vi: "Bánh Tiêu", en: "Hollow Donut", desc: "Sesame-crusted, golden fried, served warm.", price: "$5", prep: [], tag: "Sweet" },
      { vi: "Xôi Mặn", en: "Savory Sticky Rice", desc: "Chinese sausage, dried shrimp, scallion oil, fried shallot.", price: "$11", prep: [], tag: "Hearty" },
      { vi: "Chả Giò", en: "Crispy Spring Rolls", desc: "Pork & shrimp, lettuce, herbs, nước chấm.", price: "$8", prep: [], tag: "Crispy" },
      { vi: "Bánh Bao", en: "Steamed Pork Buns", desc: "Pork, quail egg, Chinese sausage in pillowy bun.", price: "$7", prep: [], tag: "Steamed" },
      { vi: "Bánh Flan Cà Phê", en: "Coffee Flan", desc: "Vietnamese flan with caramelized phin coffee on top.", price: "$6", prep: [], tag: "Dessert" },
    ],
  },
};

const PrepPill = ({ type }) => {
  const cls = {
    Hot: "cs-menupage-pill-hot",
    Iced: "cs-menupage-pill-iced",
    Blended: "cs-menupage-pill-blend",
  }[type] || "";
  return <span className={`cs-menupage-pill ${cls}`}>{type}</span>;
};

function MenuPage() {
  React.useEffect(() => { applyTheme("lacquer", "Playfair Display"); }, []);
  return (
    <div className="cs-root">
      <Nav current="menu" />

      <header className="cs-pagehero">
        <div className="cs-pagehero-grid" />
        <div className="cs-pagehero-glow" />
        <div className="cs-pagehero-inner">
          <Reveal className="cs-eyebrow"><span className="cs-eyebrow-line" /> Thực Đơn · The Full Menu <span className="cs-eyebrow-line" /></Reveal>
          <Reveal delay={150} as="div" className="cs-pagehero-vi">Cà Phê Sữa Đá · Đặc Biệt · Theo Mùa · Đồ Ăn Vặt</Reveal>
          <Reveal delay={250} as="h1" className="cs-pagehero-title">Every cup, <em>every season.</em></Reveal>
          <Reveal delay={400} as="p" className="cs-pagehero-lede">
            Phin-brewed robusta from Buôn Ma Thuột. Sweetened condensed milk poured slowly. Heat, ice, fruit, herb — the full range of cà phê.
          </Reveal>
        </div>
      </header>

      <Marquee />

      <section className="cs-menupage-section">
        {Object.entries(MENU_EXTRA).map(([cat, data]) => (
          <div key={cat} className="cs-menupage-cat">
            <Reveal className="cs-menupage-cat-head">
              <div>
                <div className="cs-menupage-cat-vi">{data.vi}</div>
                <h2 className="cs-menupage-cat-title">{cat} <em>· {data.items.length}</em></h2>
              </div>
              <div style={{ maxWidth: 360, color: "rgba(248,242,228,0.65)", fontSize: 14.5, lineHeight: 1.6, fontWeight: 300 }}>
                {data.intro}
              </div>
            </Reveal>
            <div className="cs-menupage-grid">
              {data.items.map((d, i) => (
                <Reveal key={d.en} delay={i * 40} className="cs-menupage-item">
                  <div>
                    <div className="cs-menupage-item-h">
                      <span className="cs-menupage-item-vi">{d.vi}</span>
                      <span className="cs-menupage-item-en">{d.en}</span>
                    </div>
                    <p className="cs-menupage-item-desc">{d.desc}</p>
                    <div className="cs-menupage-item-meta">
                      {d.prep.map(p => <PrepPill key={p} type={p} />)}
                      <span className="cs-menupage-pill cs-menupage-pill-tag">{d.tag}</span>
                    </div>
                  </div>
                  <div className="cs-menupage-item-price">{d.price}</div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="cs-orderpanel">
        <Reveal as="h2" className="cs-orderpanel-h">Order ahead. <em>Skip the line.</em></Reveal>
        <Reveal delay={150} className="cs-orderpanel-sub">Pickup ready in 8–12 minutes · Delivery via Toast</Reveal>
        <Reveal delay={300} className="cs-orderpanel-btns">
          <a href="#" className="cs-btn cs-btn-gold">Order Pickup</a>
          <a href="#" className="cs-btn cs-btn-ghost" style={{ color: "var(--cs-cream)" }}>Order Delivery →</a>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MenuPage />);
