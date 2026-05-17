const { useState: useStateC, useEffect: useEffectC, useRef: useRefC } = React;

const Reveal = ({ children, delay = 0, as: Tag = "div", style = {}, ...props }) => {
  const ref = useRefC(null);
  const [shown, setShown] = useStateC(false);
  useEffectC(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold: 0.12 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.9s ease ${delay}ms, transform 0.9s cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

const NAV_ITEMS = [
  { label: "Menu",      href: "Menu.html",      key: "menu" },
  { label: "Our Story", href: "Our Story.html", key: "story" },
  { label: "Culture",   href: "Culture.html",   key: "culture" },
  { label: "Visit Us",  href: "Visit Us.html",  key: "visit" },
  { label: "Shop",      href: "Shop.html",      key: "shop" },
];

const Nav = ({ current = "home" }) => (
  <nav className="cs-nav">
    <div className="cs-nav-inner">
      <a href="Cafe Soda.html" className="cs-brand">
        <span className="cs-brand-mark">
          <Emblem size={48} glow={false} />
        </span>
        <span className="cs-brand-text">
          <span className="cs-brand-name">Cafe Soda</span>
          <span className="cs-brand-sub">Cà Phê Sữa Đá · Seattle</span>
        </span>
      </a>
      <div className="cs-nav-links">
        {NAV_ITEMS.filter(n => n.key !== "shop").map(n => (
          <a key={n.key} href={n.href} className={current === n.key ? "is-current" : ""}>{n.label}</a>
        ))}
      </div>
      <a href="Menu.html" className="cs-nav-cta">Order Online</a>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="cs-footer">
    <div className="cs-footer-grid">
      <div className="cs-footer-col cs-footer-brand">
        <div className="cs-footer-brand-row">
          <Emblem size={56} glow={false} />
          <span className="cs-brand-name">Cafe Soda</span>
        </div>
        <p className="cs-footer-desc">
          Little Saigon's Vietnamese coffee house — phin-brewed robusta,
          served with the patience it deserves.
        </p>
        <p className="cs-footer-tagline"><em>"Ngon. Bold. Yours. — Cafe Soda"</em></p>
      </div>
      <div className="cs-footer-col">
        <div className="cs-footer-h">Menu</div>
        <a href="Menu.html">Traditional Cà Phê</a>
        <a href="Menu.html">Specialty</a>
        <a href="Menu.html">Seasonal</a>
        <a href="Menu.html">Bites</a>
        <a href="Menu.html">Order Online</a>
      </div>
      <div className="cs-footer-col">
        <div className="cs-footer-h">Explore</div>
        <a href="Our Story.html">Our Story</a>
        <a href="Culture.html">Vietnamese Coffee</a>
        <a href="Culture.html">Brewing Guide</a>
        <a href="Visit Us.html">Events</a>
        <a href="Our Story.html">Press</a>
      </div>
      <div className="cs-footer-col">
        <div className="cs-footer-h">Connect</div>
        <a href="Shop.html">Shop</a>
        <a href="#">Instagram</a>
        <a href="#">TikTok</a>
        <a href="Visit Us.html">Newsletter</a>
        <a href="Visit Us.html">Wholesale / Catering</a>
      </div>
    </div>
    <div className="cs-footer-bottom">
      <span>© 2025 Cafe Soda · Cà Phê Sữa Đá · Little Saigon, Seattle · Made with ♥ &amp; robusta</span>
      <div className="cs-socials">
        {["IG", "TK", "FB"].map((s) => (
          <span key={s} className="cs-social">{s}</span>
        ))}
      </div>
    </div>
  </footer>
);

/* Cross-page theming (palette/font from localStorage + defaults from TWEAK markers) */
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
const applyTheme = (palKey, font) => {
  const pal = PALETTES[palKey] || PALETTES.lacquer;
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
  r.setProperty("--cs-display", FONT_PAIRS[font] || FONT_PAIRS["Playfair Display"]);
};

Object.assign(window, { Reveal, Nav, Footer, NAV_ITEMS, PALETTES, FONT_PAIRS, applyTheme });
