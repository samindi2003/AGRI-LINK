import Icon, { ICONS } from '../components/Icon.jsx'
import { orderSteps } from '../data.js'

const CURRENT_STEP = 2 // Preparing

function RatingRow({ who, target }) {
  return (
    <div className="between">
      <strong>{who}</strong>
      <div role="group" aria-label={'Rate ' + target} className="stars">
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} type="button" className="star-btn" aria-label={`${n} of 5 stars for ${target}`}>
            <Icon d={ICONS.star} color="#fbbf24" width={1.6} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default function OrderTracking() {
  return (
    <main className="page">
      <div className="between" style={{ alignItems: 'flex-end' }}>
        <div>
          <h1 className="title">Order #1039</h1>
          <p className="muted" style={{ fontSize: 18, marginTop: 4 }}>ඇණවුම් නිරීක්ෂණය · Track your order</p>
        </div>
        <span className="chip chip-preparing" style={{ padding: '8px 16px', fontSize: 16 }}>Preparing · සූදානම් කරමින්</span>
      </div>

      <div className="row">
        <div className="col" style={{ flexBasis: 380, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <section className="card" style={{ padding: '24px 26px' }}>
            <h2 className="card-title" style={{ marginBottom: 18 }}>Order status</h2>
            <ol className="timeline">
              {orderSteps.map((s, i) => {
                const cls = i < CURRENT_STEP ? 'done' : i === CURRENT_STEP ? 'current' : ''
                const last = i === orderSteps.length - 1 ? ' last' : ''
                return (
                  <li key={s.label} className={cls + last}>
                    <div className="rail">
                      <span className="dot">{i < CURRENT_STEP ? '✓' : i + 1}</span>
                      <span className="bar" />
                    </div>
                    <div className="label">
                      <strong>{s.label}</strong>
                      <span className="si" style={{ display: 'block', fontSize: 15 }}>{s.si}</span>
                    </div>
                  </li>
                )
              })}
            </ol>
          </section>

          <section className="card" style={{ padding: '24px 26px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <h2 style={{ fontSize: 22 }}>Order details</h2>
            <div className="between" style={{ paddingBottom: 12, borderBottom: '1px solid var(--line)' }}>
              <span>Chickpea · කඩල · 25 kg</span><strong>Rs. 13,000</strong>
            </div>
            <div className="detail-row"><span>Farmer</span><span>Farmer name · District</span></div>
            <div className="detail-row"><span>Delivery partner</span><span>Partner name</span></div>
            <div className="detail-row"><span>Payment</span><span>[PAYMENT METHOD]</span></div>
          </section>
        </div>

        <div className="col" style={{ flexBasis: 480, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <section className="card" style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="between" style={{ padding: '4px 8px 0' }}>
              <h2 style={{ fontSize: 22 }}>Delivery map <span className="si" style={{ fontSize: 17 }}>· සිතියම</span></h2>
              <span className="muted small">Live after pickup</span>
            </div>
            <svg className="map" viewBox="0 0 560 340" role="img" aria-label="Map preview showing the route from the farm to the delivery address">
              <rect width="560" height="340" fill="#0d1511" />
              <path d="M0 90 C120 70 200 140 330 110 S500 60 560 80" stroke="#1b2a22" strokeWidth="14" fill="none" />
              <path d="M120 0 C140 100 100 200 160 340" stroke="#1b2a22" strokeWidth="12" fill="none" />
              <path d="M380 0 C360 120 420 220 400 340" stroke="#1b2a22" strokeWidth="12" fill="none" />
              <path d="M0 250 C140 230 260 280 560 240" stroke="#1b2a22" strokeWidth="10" fill="none" />
              <rect x="190" y="150" width="130" height="70" rx="10" fill="#15221b" stroke="#22352b" strokeWidth="1" />
              <rect x="430" y="140" width="90" height="60" rx="10" fill="#15221b" stroke="#22352b" strokeWidth="1" />
              <path d="M90 260 C130 200 170 150 250 120 S400 90 470 60" stroke="#34d399" strokeWidth="4.5" strokeDasharray="2 10" strokeLinecap="round" fill="none" />
              <circle cx="90" cy="260" r="14" fill="#eab308" stroke="#1a1302" strokeWidth="2" />
              <circle cx="470" cy="60" r="14" fill="#16803d" stroke="#34d399" strokeWidth="3" />
              <circle cx="250" cy="120" r="9" fill="#0d1511" stroke="#34d399" strokeWidth="4" />
              <text x="90" y="292" textAnchor="middle" fontSize="14" fontWeight="600" fill="#eef4f0">Farm</text>
              <text x="470" y="92" textAnchor="middle" fontSize="14" fontWeight="600" fill="#eef4f0">Your address</text>
              <text x="250" y="150" textAnchor="middle" fontSize="14" fontWeight="600" fill="#eef4f0">Delivery partner</text>
            </svg>
            <p className="muted small" style={{ padding: '0 8px 6px' }}>
              Map preview for design only. Replace with a real map service (for example Google Maps or Leaflet).
            </p>
          </section>

          <section className="card" style={{ padding: '24px 26px', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <h2 style={{ fontSize: 22 }}>Rate this order <span className="si" style={{ fontSize: 17 }}>· ඇගයීම</span></h2>
            <p className="muted">Available after delivery.</p>
            <RatingRow who="Farmer · ගොවියා" target="the farmer" />
            <RatingRow who="Delivery partner" target="the delivery partner" />
          </section>
        </div>
      </div>

      <p className="muted small">Sample data, shown for design preview only.</p>
    </main>
  )
}
