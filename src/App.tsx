import "./App.css";

const EMAIL = "officialparttimelabs@gmail.com";
const STICKY_PIX_URL = "https://sticky-pix.part-time-labs.com/";

const STARS = [
  { left: "12%", top: "12%", background: "#fff", opacity: 0.7 },
  { left: "29%", top: "20%", background: "#9be7ff", opacity: 0.55 },
  { left: "47%", top: "9%", background: "#fff", opacity: 0.6 },
  { left: "68%", top: "17%", background: "#ffb3e6", opacity: 0.5 },
  { left: "84%", top: "11%", background: "#fff", opacity: 0.65 },
];

function HeroBand() {
  return (
    <div className="hero-band" aria-hidden="true">
      <div className="hero-sky" />
      <div className="hero-glow" />

      <div className="hero-dunes">
        <svg viewBox="0 0 620 230" preserveAspectRatio="none">
          <g fill="none" stroke="#ff2a8d" strokeWidth="1.1" opacity=".4">
            <path d="M0 168 C90 106 150 150 236 96 C320 44 400 108 490 62 C540 36 580 58 620 40" />
          </g>
          <g fill="#0b0722" fillOpacity=".7" stroke="#2de2e6" strokeWidth="1.2" opacity=".75">
            <path d="M0 182 C90 120 150 164 236 110 C320 58 400 122 490 76 C540 50 580 72 620 54 L620 230 L0 230 Z" />
          </g>
          <g fill="none" stroke="#2de2e6" strokeWidth="1" opacity=".3">
            <path d="M0 200 C96 148 156 186 244 138 C330 92 406 146 496 106 C546 84 584 100 620 86" />
            <path d="M0 214 C100 174 162 204 250 166 C338 128 410 168 500 136 C550 118 586 128 620 118" />
          </g>
          <g fill="#0d0824" fillOpacity=".85" stroke="#2de2e6" strokeWidth="1.1" opacity=".6">
            <path d="M0 226 C110 196 180 216 268 190 C352 166 420 194 508 172 C556 160 590 168 620 160 L620 230 L0 230 Z" />
          </g>
        </svg>
      </div>

      <div className="hero-grid-glow" />
      <div className="hero-grid">
        <div className="hero-grid-plane" />
      </div>

      {STARS.map((star, i) => (
        <span key={i} className="star" style={star} />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      <HeroBand />

      <div className="shell">
        <header className="masthead">
          <div className="wordmark">
            <span />
            PART-TIME LABS
          </div>
          <a className="contact-link" href={`mailto:${EMAIL}`}>
            CONTACT
          </a>
        </header>

        <div className="hero-copy">
          <div className="eyebrow">CALIFORNIA</div>
          <h1 className="hero-title">
            PART-TIME
            <br />
            LABS
          </h1>
          <div className="tagline">
            <p>SMALL OBJECTS THAT DO ONE THING WELL</p>
            <span />
          </div>
        </div>

        <div className="about">
          <p>
            Part-Time Labs is a small hardware studio. We design and build physical products for
            people who'd rather own a thing than open an app — objects with a single job, no
            subscription, and no feed.
          </p>
          <p>
            We work in short runs. Each product is made in a small batch, sold direct, and supported
            for as long as people keep using it. If it can't be explained in one sentence, we don't
            build it.
          </p>
        </div>

        <section className="shipping">
          <div className="shipping-label">CURRENTLY SHIPPING</div>

          <div className="product">
            <div className="product-head">
              <div className="product-name">STICKY PIX</div>
              <div className="product-badge">COMING SOON</div>
            </div>
            <p>
              A four-inch e-ink photo tile. Send a picture from the app once and it stays there for
              months on a single charge — no glow, no notifications, no scrolling.
            </p>
            <div className="product-meta">
              <span>$TBD</span>
              <span>4" E-INK</span>
              <span>6-MO BATTERY</span>
            </div>
            <a className="product-cta" href={STICKY_PIX_URL}>
              VISIT STICKY PIX →
            </a>
          </div>
        </section>

        <footer className="footer">
          <span>© 2026 PART-TIME LABS</span>
          <a href={`mailto:${EMAIL}`}>{EMAIL.toUpperCase()}</a>
        </footer>
      </div>
    </div>
  );
}
