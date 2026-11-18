import Icon, { ICONS } from '../components/Icon.jsx'
import { adminMenu, adminStats, farmersToVerify, needsDelivery, referencePrices, ordersPerDay } from '../data.js'

const MAX = Math.max(...ordersPerDay.map((d) => d.value))

export default function Admin() {
  return (
    <div className="admin">
      <nav aria-label="Admin sections" className="sidebar">
        {adminMenu.map((m, i) => (
          <a key={m.label} href="#" className={'side-link' + (i === 0 ? ' on' : '')} onClick={(e) => e.preventDefault()}>
            <Icon d={ICONS[m.icon]} size={20} color="currentColor" />
            {m.label}
          </a>
        ))}
      </nav>

      <main className="admin-main">
        <div>
          <h1 className="title" style={{ fontSize: 34 }}>Overview</h1>
          <p className="muted" style={{ marginTop: 4 }}>Reports, farmer validation, prices, delivery and payments in one place.</p>
        </div>

        <section aria-label="Summary" className="stat-grid">
          {adminStats.map((s) => (
            <div key={s.label} className="stat" style={{ flexBasis: 190 }}>
              <div className="muted" style={{ fontSize: 15 }}>{s.label}</div>
              <div className="stat-value">{s.value}</div>
            </div>
          ))}
        </section>

        <div className="row">
          <section className="card col">
            <h2 style={{ fontSize: 21, marginBottom: 4 }}>Farmer verification</h2>
            <p className="muted" style={{ fontSize: 15, marginBottom: 12 }}>Farmers cannot publish advertisements until approved.</p>
            <div className="list">
              {farmersToVerify.map((f, i) => (
                <div key={i} className="between" style={{ gap: 10 }}>
                  <div>
                    <strong style={{ display: 'block' }}>{f.name}</strong>
                    <span className="muted" style={{ fontSize: 15 }}>{f.district} · {f.crops}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button type="button" className="btn btn-primary">Approve</button>
                    <button type="button" className="btn">Review</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="card col">
            <h2 style={{ fontSize: 21, marginBottom: 4 }}>Assign delivery partners</h2>
            <p className="muted" style={{ fontSize: 15, marginBottom: 12 }}>Orders waiting for a delivery partner.</p>
            <div className="list">
              {needsDelivery.map((o) => (
                <div key={o.id} className="between" style={{ gap: 10 }}>
                  <div>
                    <strong style={{ display: 'block' }}>{o.id} · {o.item}</strong>
                    <span className="muted" style={{ fontSize: 15 }}>{o.route}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <label htmlFor={'sel' + o.id} className="sr-only">Delivery partner for {o.id}</label>
                    <select id={'sel' + o.id} className="input" style={{ minHeight: 44 }}>
                      <option>Choose partner</option>
                      <option>Partner 1</option>
                      <option>Partner 2</option>
                    </select>
                    <button type="button" className="btn btn-primary">Assign</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="row">
          <section className="card col">
            <h2 style={{ fontSize: 21, marginBottom: 4 }}>Reference prices <span className="si" style={{ fontSize: 16 }}>· මිල</span></h2>
            <p className="muted" style={{ fontSize: 15, marginBottom: 12 }}>Shown to farmers when they set a price.</p>
            <div className="list">
              {referencePrices.map((p) => (
                <div key={p.name} className="between" style={{ paddingTop: 10, paddingBottom: 10 }}>
                  <span>{p.name} <span className="si">· {p.si}</span></span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <strong>Rs. {p.price} / kg</strong>
                    <button type="button" className="btn">Edit</button>
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="card col">
            <h2 style={{ fontSize: 21, marginBottom: 4 }}>Orders this week</h2>
            <p className="muted" style={{ fontSize: 15, marginBottom: 16 }}>Sample report. Full reports will be downloadable.</p>
            <div className="bars" role="img" aria-label="Bar chart of orders per day, Monday to Sunday">
              {ordersPerDay.map((d) => (
                <div key={d.day} className="bar-col">
                  <span className="small" style={{ fontWeight: 600 }}>{d.value}</span>
                  <span className="bar" style={{ height: Math.round((d.value / MAX) * 120) }} />
                  <span className="small muted">{d.day}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 18 }}>
              <button type="button" className="btn btn-outline">Download report</button>
              <button type="button" className="btn">View payments</button>
            </div>
          </section>
        </div>

        <p className="muted small">Sample data, shown for design preview only.</p>
      </main>
    </div>
  )
}
