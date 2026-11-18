import { Link } from 'react-router-dom'
import Icon, { ICONS } from '../components/Icon.jsx'
import { farmerStats, farmerAds, farmerOrders, reviews } from '../data.js'

export default function FarmerDashboard() {
  return (
    <main className="page">
      <div className="row" style={{ alignItems: 'stretch' }}>
        <div className="col" style={{ flexBasis: 360, alignSelf: 'center' }}>
          <h1 className="title" style={{ fontSize: 38 }}>Welcome back, Farmer name</h1>
          <p className="muted" style={{ fontSize: 18, marginTop: 6 }}>ඔබගේ ගොවිපළ පුවරුව · Your farm at a glance</p>
        </div>
        <Link to="/farmer/new" className="create-card">
          <span className="icon-box gold" style={{ width: 56, height: 56 }}>
            <Icon d={ICONS.plus} size={28} width={2.4} />
          </span>
          <span>
            <strong style={{ display: 'block', fontSize: 22, fontFamily: "'Space Grotesk', Inter, sans-serif" }}>Create advertisement</strong>
            <small>දැන්වීමක් එක් කරන්න · 3 easy steps</small>
          </span>
        </Link>
      </div>

      <section aria-label="Summary" className="stat-grid">
        {farmerStats.map((s) => (
          <div key={s.label} className="stat">
            <div className="muted" style={{ fontSize: 15 }}>{s.label} <span className="si">· {s.si}</span></div>
            <div className="stat-value" style={{ fontSize: 36 }}>{s.value}</div>
          </div>
        ))}
      </section>

      <div className="row">
        <section className="card col" style={{ flexBasis: 560 }}>
          <div className="between" style={{ marginBottom: 14 }}>
            <h2 style={{ fontSize: 22 }}>My advertisements <span className="si" style={{ fontSize: 17 }}>· මගේ දැන්වීම්</span></h2>
            <Link to="/farmer/new" className="btn btn-outline">New</Link>
          </div>
          <div className="list">
            {farmerAds.map((a) => (
              <div key={a.name} className="ad-row">
                <span className="thumb" style={{ background: a.tint }}>
                  <Icon d={ICONS.leaf} color={a.ink} width={1.6} />
                </span>
                <div className="grow">
                  <strong style={{ display: 'block' }}>{a.name} <span className="si">· {a.si}</span></strong>
                  <span className="muted" style={{ fontSize: 15 }}>{a.qty} left · Harvest {a.harvest}</span>
                </div>
                <div style={{ fontWeight: 600, minWidth: 90 }}>Rs. {a.price} / kg</div>
                <span className={'chip chip-' + a.status.toLowerCase()}>{a.status}</span>
                <Link to="/farmer/new" className="btn">Edit</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="card col">
          <h2 style={{ fontSize: 22, marginBottom: 14 }}>Incoming orders <span className="si" style={{ fontSize: 17 }}>· ලැබෙන ඇණවුම්</span></h2>
          <div className="list">
            {farmerOrders.map((o) => (
              <div key={o.id} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div className="between" style={{ gap: 8 }}>
                  <strong>{o.id} · {o.item}</strong>
                  <span className={'chip chip-' + o.status.toLowerCase()}>{o.status} · {o.si}</span>
                </div>
                <div className="muted" style={{ fontSize: 15 }}>{o.qty} for {o.buyer} · {o.type}</div>
                {o.canAccept && (
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <button type="button" className="btn btn-primary">Accept and prepare</button>
                    <button type="button" className="btn">Decline</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="card" style={{ display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'center' }}>
        <div style={{ flex: '0 1 220px' }}>
          <h2 style={{ fontSize: 22, marginBottom: 6 }}>My rating <span className="si" style={{ fontSize: 17 }}>· ඇගයීම්</span></h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Icon d={ICONS.star} size={32} color="#D9A21B" fill="#D9A21B" width={1} />
            <span className="stat-value" style={{ fontSize: 36 }}>4.6</span>
          </div>
        </div>
        <div style={{ flex: '1 1 480px', display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {reviews.map((r) => (
            <blockquote key={r.text} className="quote">
              <p style={{ marginBottom: 6 }}>{r.text}</p>
              <footer className="muted small">{r.who} · {r.stars} stars</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <p className="muted small">Sample data, shown for design preview only.</p>
    </main>
  )
}
