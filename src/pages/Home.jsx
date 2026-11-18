import { Link } from 'react-router-dom'
import Icon, { ICONS } from '../components/Icon.jsx'
import { categories, listings, steps, trust } from '../data.js'

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-left">
          <span className="badge">ගොවියාගෙන් කෙලින්ම ඔබ වෙත</span>
          <h1>Fresh produce, straight from the farmer.</h1>
          <p className="hero-sub">
            Vegetables, fruits and grains from verified farmers. Fair prices, no middlemen, delivered to your door.
          </p>
          <form className="search" onSubmit={(e) => e.preventDefault()}>
            <div className="field">
              <label htmlFor="q">What are you looking for? · සොයන්න</label>
              <input id="q" type="search" className="input" placeholder="Beans, කව්පි, banana…" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ minHeight: 48 }}>
              <Icon d={ICONS.search} size={18} color="#fff" width={2} /> Search
            </button>
          </form>
          <p className="muted" style={{ marginTop: 14 }}>
            Or tap the microphone and say what you need, in Sinhala, Tamil or English.
          </p>
        </div>

        <div className="hero-right card" style={{ padding: 28 }}>
          <h2 className="card-title">How it works</h2>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.n}>
                <span className="step-num">{s.n}</span>
                <span>
                  <strong style={{ display: 'block' }}>{s.title}</strong>
                  <span className="muted">{s.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container cats" aria-label="Categories">
        {categories.map((c) => (
          <a key={c.name} href="#listings" className="cat">
            <span className="icon-box"><Icon d={ICONS[c.icon]} size={26} /></span>
            <span>
              <strong style={{ display: 'block' }}>{c.name}</strong>
              <span className="muted">{c.si}</span>
            </span>
          </a>
        ))}
      </section>

      <section id="listings" className="container section">
        <div className="section-head">
          <div>
            <h2>Fresh this week</h2>
            <p className="muted">Sorted by harvest date · නෙලන දිනය අනුව</p>
          </div>
          <div role="group" aria-label="Filter" className="filters">
            <button type="button" className="pill on">All</button>
            <button type="button" className="pill">Vegetables</button>
            <button type="button" className="pill">Fruits</button>
            <button type="button" className="pill">Grains</button>
          </div>
        </div>

        <div className="card-grid">
          {listings.map((p) => (
            <article key={p.id} className="produce">
              <div className="produce-img" style={{ background: p.tint }}>
                <Icon d={ICONS.leaf} size={56} color={p.ink} width={1.4} />
                <span className="produce-tag">Harvest {p.harvest}</span>
              </div>
              <div className="produce-body">
                <div>
                  <h3>{p.name} <span className="si" style={{ fontSize: 16 }}>· {p.si}</span></h3>
                  <p className="muted" style={{ fontSize: 15 }}>{p.farmer} · {p.district}</p>
                </div>
                <div className="rating">
                  <Icon d={ICONS.star} size={16} color="#D9A21B" fill="#D9A21B" width={1} />
                  <strong>{p.rating}</strong>
                  <span className="muted">· {p.qty} available</span>
                </div>
                <div className="produce-foot">
                  <span className="price">Rs. {p.price}<small> / kg</small></span>
                  <Link to="/orders" className="btn btn-primary">Order · ඇණවුම</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="sample-note">Sample listings, shown for design preview only.</p>
      </section>

      <section className="trust" aria-label="Why Agrilink">
        <div className="container trust-inner">
          {trust.map((t) => (
            <div key={t.title} className="trust-item">
              <span className="icon-box gold"><Icon d={ICONS[t.icon]} size={26} /></span>
              <div>
                <h3 style={{ fontSize: 18, marginBottom: 4 }}>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="cta">
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontSize: 28, marginBottom: 8 }}>Buying in bulk?</h2>
            <p>Restaurants, hotels, shops and caterers can order large quantities directly from farmers.</p>
          </div>
          <Link to="/" className="btn btn-gold btn-lg">Wholesale ordering · තොග ඇණවුම්</Link>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>Agrilink · Multilingual, voice-enabled farm produce marketplace</span>
          <span>English · සිංහල · தமிழ்</span>
        </div>
      </footer>
    </>
  )
}
