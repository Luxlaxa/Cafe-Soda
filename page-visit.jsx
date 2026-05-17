const { useState: useStateV } = React;

function VisitPage() {
  React.useEffect(() => { applyTheme("lacquer", "Playfair Display"); }, []);
  const [form, setForm] = useStateV({ name: "", email: "", subject: "General", message: "" });
  const [submitted, setSubmitted] = useStateV(false);
  const [newsletter, setNewsletter] = useStateV("");
  const [subscribed, setSubscribed] = useStateV(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="cs-root">
      <Nav current="visit" />

      <header className="cs-pagehero">
        <div className="cs-pagehero-grid" />
        <div className="cs-pagehero-glow" />
        <div className="cs-pagehero-inner">
          <Reveal className="cs-eyebrow"><span className="cs-eyebrow-line" /> Visit Us <span className="cs-eyebrow-line" /></Reveal>
          <Reveal delay={150} as="div" className="cs-pagehero-vi">Khu Phố Little Saigon — Seattle, Washington</Reveal>
          <Reveal delay={250} as="h1" className="cs-pagehero-title">Find us<br /><em>on Jackson.</em></Reveal>
          <Reveal delay={400} as="p" className="cs-pagehero-lede">
            We're at the corner of 12th &amp; Jackson, in the heart of Little Saigon. Open seven days, busy on weekends, friendly always.
          </Reveal>
        </div>
      </header>

      {/* Big map + details */}
      <section className="cs-visit-info">
        <div className="cs-visit-info-left">
          <Reveal>
            <div className="cs-section-label"><span className="cs-label-line" /> The Address</div>
            <h2 className="cs-h2" style={{ marginBottom: 12 }}>Little Saigon, <em>Seattle.</em></h2>
            <p className="cs-body" style={{ marginBottom: 32 }}>
              Walk in, sit down, order at the bar. We don't take reservations —
              we save seats for regulars who haven't shown up yet.
            </p>
          </Reveal>
          <Reveal delay={120} className="cs-visit-detail-row">
            <div className="cs-visit-detail-ico">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#F0C842" strokeWidth="1.8">
                <path d="M12 21s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div>
              <div className="cs-visit-detail-label">Address</div>
              <div className="cs-visit-detail-val">1212 S Jackson St<br />Chinatown–International District<br />Seattle, WA 98104</div>
            </div>
          </Reveal>
          <Reveal delay={180} className="cs-visit-detail-row">
            <div className="cs-visit-detail-ico">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#F0C842" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>
            <div>
              <div className="cs-visit-detail-label">Hours</div>
              <div className="cs-visit-detail-val">
                Mon–Fri · 7:00 am – 6:00 pm<br />
                Sat–Sun · 8:00 am – 7:00 pm<br />
                <span style={{ color: "var(--cs-red)", fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif", fontSize: 16 }}>
                  Tết hours: extended late Feb 8–14
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={240} className="cs-visit-detail-row">
            <div className="cs-visit-detail-ico">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#F0C842" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M3 8l9 6 9-6" />
              </svg>
            </div>
            <div>
              <div className="cs-visit-detail-label">Contact</div>
              <div className="cs-visit-detail-val">
                hello@cafesodaseattle.com<br />
                (206) 555-SODA
              </div>
            </div>
          </Reveal>
          <Reveal delay={300} className="cs-visit-detail-row">
            <div className="cs-visit-detail-ico">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#F0C842" strokeWidth="1.6">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
              </svg>
            </div>
            <div>
              <div className="cs-visit-detail-label">Getting Here</div>
              <div className="cs-visit-detail-val">
                <strong style={{ color: "var(--cs-red)" }}>Light rail:</strong> 4 min walk from Chinatown–ID Station<br />
                <strong style={{ color: "var(--cs-red)" }}>Bus:</strong> 7, 14, 36 stop at 12th &amp; Jackson<br />
                <strong style={{ color: "var(--cs-red)" }}>Parking:</strong> Street parking on Jackson; lot on 14th
              </div>
            </div>
          </Reveal>
          <Reveal delay={360} style={{ marginTop: 36 }}>
            <a href="https://maps.google.com" target="_blank" rel="noopener" className="cs-btn cs-btn-primary cs-btn-on-light">Get Directions</a>
          </Reveal>
        </div>

        {/* Big stylized map */}
        <div className="cs-visit-info-right">
          <div className="cs-map-stub" style={{ position: "absolute", inset: 0 }}>
            <div className="cs-map-grid" />
            {/* streets */}
            <div className="cs-map-street cs-map-street-h" style={{ top: "22%" }}>S Main St</div>
            <div className="cs-map-street cs-map-street-h" style={{ top: "42%" }}>S Jackson St</div>
            <div className="cs-map-street cs-map-street-h" style={{ top: "62%" }}>S King St</div>
            <div className="cs-map-street cs-map-street-h" style={{ top: "82%" }}>S Weller St</div>
            <div className="cs-map-street cs-map-street-v" style={{ left: "22%" }}>10th Ave S</div>
            <div className="cs-map-street cs-map-street-v" style={{ left: "44%" }}>12th Ave S</div>
            <div className="cs-map-street cs-map-street-v" style={{ left: "68%" }}>14th Ave S</div>
            {/* pin */}
            <div className="cs-map-pin" style={{ left: "44%", top: "42%" }}>
              <svg viewBox="0 0 40 50" width="56" height="70">
                <path d="M20 1 C 30 1, 38 9, 38 19 C 38 32, 20 49, 20 49 C 20 49, 2 32, 2 19 C 2 9, 10 1, 20 1 Z" fill="var(--cs-red)" stroke="var(--cs-gold-lt)" strokeWidth="1.5" />
                <circle cx="20" cy="19" r="6" fill="var(--cs-cream)" />
              </svg>
              <span className="cs-map-pin-label">Cafe Soda</span>
            </div>
            <div className="cs-map-note">Khu Phố Little Saigon · CID Seattle</div>
            {/* Light rail marker */}
            <div style={{ position: "absolute", left: "12%", top: "28%", textAlign: "center" }}>
              <div style={{
                width: 22, height: 22, borderRadius: "50%",
                background: "var(--cs-gold)", border: "2px solid var(--cs-ink)",
                margin: "0 auto",
                fontSize: 11, fontWeight: 700, color: "var(--cs-ink)",
                lineHeight: "18px",
              }}>L</div>
              <div style={{ marginTop: 4, fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--cs-gold)", opacity: 0.8 }}>CID Station</div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering + Wholesale tiles */}
      <section className="cs-section-light">
        <div className="cs-section-inner">
          <Reveal style={{ textAlign: "center" }}>
            <div className="cs-section-label" style={{ justifyContent: "center" }}>
              <span className="cs-label-line" /> Beyond the Counter
            </div>
            <h2 className="cs-h2" style={{ textAlign: "center" }}>
              We can <em>cater that.</em>
            </h2>
            <p className="cs-body" style={{ maxWidth: 600, margin: "0 auto" }}>
              Phin bars at weddings, robusta wholesale for restaurants, drink boxes for offices.
              Tell us what you need — we'll build it.
            </p>
          </Reveal>
          <div className="cs-tiles">
            <Reveal delay={120} className="cs-tile">
              <h3 className="cs-tile-h">Catering &amp; Events</h3>
              <p className="cs-tile-body">
                Full phin bar set-up for weddings, openings, and corporate events. Min. 40 guests.
                We bring the phins, the milk, the ice, and a barista per 30 guests.
                Drink boxes available for groups of 10+ with 48-hr notice.
              </p>
              <a href="#" className="cs-btn" style={{ background: "var(--cs-gold)", color: "var(--cs-ink)", borderColor: "var(--cs-gold)" }}>Request a Quote</a>
            </Reveal>
            <Reveal delay={220} className="cs-tile" style={{ background: "var(--cs-red-dkr)" }}>
              <h3 className="cs-tile-h">Wholesale</h3>
              <p className="cs-tile-body">
                Whole-bean Vietnamese robusta for cafés, restaurants, and grocers across the
                PNW. Roasted weekly, delivered fresh, priced fair. 5lb min. order. Phin training
                and recipe kits included with first order.
              </p>
              <a href="#" className="cs-btn" style={{ background: "var(--cs-gold)", color: "var(--cs-ink)", borderColor: "var(--cs-gold)" }}>Become a Partner</a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="cs-contact">
        <div className="cs-contact-inner">
          <Reveal style={{ textAlign: "center", marginBottom: 50 }}>
            <div className="cs-section-label" style={{ justifyContent: "center" }}>
              <span className="cs-label-line" /> Get In Touch
            </div>
            <h2 className="cs-h2" style={{ textAlign: "center" }}>
              Send us a <em>note.</em>
            </h2>
            <p className="cs-body" style={{ maxWidth: 580, margin: "0 auto" }}>
              Catering, wholesale, press, or just hello. We answer within two business days.
            </p>
          </Reveal>
          {submitted ? (
            <Reveal style={{ textAlign: "center", padding: 60, background: "var(--cs-cream)", border: "1px solid var(--cs-gold)" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "var(--cs-red)", fontSize: 22, marginBottom: 10 }}>Cảm ơn — thank you.</div>
              <h3 className="cs-h2" style={{ fontSize: "2.4rem", marginBottom: 16 }}>Your note is on the bar.</h3>
              <p className="cs-body" style={{ margin: "0 auto 24px" }}>We'll write back within two business days, usually faster.</p>
              <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "General", message: "" }); }}
                      className="cs-btn cs-btn-primary cs-btn-on-light" style={{ cursor: "pointer", fontFamily: "inherit" }}>
                Send another
              </button>
            </Reveal>
          ) : (
            <Reveal as="form" className="cs-form-grid" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="cs-form-field">
                <label className="cs-form-label">Name</label>
                <input className="cs-form-input" required value={form.name} onChange={update("name")} placeholder="Linh Trần" />
              </div>
              <div className="cs-form-field">
                <label className="cs-form-label">Email</label>
                <input className="cs-form-input" type="email" required value={form.email} onChange={update("email")} placeholder="you@example.com" />
              </div>
              <div className="cs-form-field cs-form-field-full">
                <label className="cs-form-label">Subject</label>
                <select className="cs-form-select" value={form.subject} onChange={update("subject")}>
                  <option>General</option>
                  <option>Catering</option>
                  <option>Wholesale</option>
                  <option>Events</option>
                  <option>Press</option>
                </select>
              </div>
              <div className="cs-form-field cs-form-field-full">
                <label className="cs-form-label">Message</label>
                <textarea className="cs-form-textarea" required value={form.message} onChange={update("message")} placeholder="Tell us what you need — date, guest count, anything we should know." />
              </div>
              <div className="cs-form-field cs-form-field-full" style={{ marginTop: 8 }}>
                <button type="submit" className="cs-btn cs-btn-primary cs-btn-on-light" style={{ cursor: "pointer", fontFamily: "inherit", alignSelf: "flex-start" }}>
                  Send Message
                </button>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="cs-newsletter">
        <Reveal as="h2" className="cs-newsletter-h">Stay in <em>the loop.</em></Reveal>
        <Reveal delay={120} className="cs-newsletter-sub">
          Tết specials, new drinks, and Seattle Vietnamese community events. Twice a month, never spammy.
        </Reveal>
        <Reveal delay={240} as="form" className="cs-newsletter-form" onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
          {subscribed ? (
            <div style={{ flex: 1, padding: 16, background: "var(--cs-cream)", color: "var(--cs-red)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 18, textAlign: "center", border: "1px solid var(--cs-gold)" }}>
              You're in. See you on Friday.
            </div>
          ) : (
            <>
              <input className="cs-newsletter-input" type="email" required value={newsletter} onChange={(e) => setNewsletter(e.target.value)} placeholder="you@example.com" />
              <button type="submit" className="cs-newsletter-btn">Subscribe</button>
            </>
          )}
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<VisitPage />);
