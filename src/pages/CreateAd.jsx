import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon, { ICONS } from '../components/Icon.jsx'
import { categories } from '../data.js'

const STEP_LABELS = [
  { label: 'Produce', si: 'භෝගය' },
  { label: 'Quantity and date', si: 'ප්‍රමාණය සහ දිනය' },
  { label: 'Price and photo', si: 'මිල සහ ඡායාරූපය' },
]

export default function CreateAd() {
  const [step, setStep] = useState(1)
  const [category, setCategory] = useState('Vegetables')
  const [form, setForm] = useState({
    nameEn: 'Cowpea',
    nameSi: 'කව්පි',
    qty: 80,
    harvestDate: '',
    growing: '',
    price: 450,
  })
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  return (
    <main className="page page-narrow">
      <Link to="/farmer" className="btn" style={{ alignSelf: 'flex-start', border: 0, background: 'transparent', color: 'var(--accent)', fontWeight: 600 }}>
        <Icon d={ICONS.back} size={18} color="currentColor" width={2.2} /> Back to dashboard
      </Link>

      <div>
        <h1 className="title">Create advertisement</h1>
        <p className="muted" style={{ fontSize: 18, marginTop: 4 }}>දැන්වීමක් එක් කරන්න</p>
      </div>

      <ol className="progress" aria-label="Progress">
        {STEP_LABELS.map((s, i) => {
          const n = i + 1
          const cls = step === n ? 'current' : step > n ? 'done' : ''
          return (
            <li key={s.label} className={cls}>
              <span className="dot">{step > n ? '✓' : n}</span>
              <span>
                {s.label}
                <span className="si-inline muted" style={{ display: 'block', fontSize: 14 }}>{s.si}</span>
              </span>
            </li>
          )
        })}
      </ol>

      <section className="card form" style={{ padding: '28px 32px' }}>
        {step === 1 && (
          <>
            <h2>What are you selling? <span className="si" style={{ fontSize: 19 }}>· ඔබ විකුණන්නේ මොනවාද?</span></h2>
            <div role="group" aria-label="Category" className="form-row" style={{ gap: 14 }}>
              {categories.slice(0, 3).map((c) => (
                <button key={c.name} type="button" aria-pressed={category === c.name} className={'cat-pick' + (category === c.name ? ' on' : '')} onClick={() => setCategory(c.name)}>
                  <span className="icon-box"><Icon d={ICONS[c.icon]} size={26} /></span>
                  <span>
                    <strong style={{ display: 'block', fontSize: 18 }}>{c.name}</strong>
                    <span className="muted">{c.si}</span>
                  </span>
                </button>
              ))}
            </div>
            <div className="form-row">
              <div className="field" style={{ flexBasis: 280 }}>
                <label htmlFor="n-en">Produce name (English)</label>
                <input id="n-en" className="input input-lg" value={form.nameEn} onChange={set('nameEn')} />
              </div>
              <div className="field" style={{ flexBasis: 280 }}>
                <label htmlFor="n-si">නම (සිංහල)</label>
                <input id="n-si" className="input input-lg" value={form.nameSi} onChange={set('nameSi')} />
              </div>
            </div>
            <div className="tip">
              <Icon d={ICONS.mic} size={26} color="currentColor" width={2} />
              <span style={{ flex: '1 1 260px' }}>Prefer to talk? Tap the microphone and describe your harvest. The assistant fills this form for you.</span>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2>How much, and when? <span className="si" style={{ fontSize: 19 }}>· ප්‍රමාණය සහ දිනය</span></h2>
            <div className="form-row">
              <div className="field">
                <label htmlFor="qty">Quantity (kg) · ප්‍රමාණය</label>
                <input id="qty" type="number" className="input input-lg" value={form.qty} onChange={set('qty')} />
              </div>
              <div className="field">
                <label htmlFor="hd">Harvest / pick-up date · නෙලන දිනය</label>
                <input id="hd" type="date" className="input input-lg" value={form.harvestDate} onChange={set('harvestDate')} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="grow">How was it grown? · වගා කළ ආකාරය</label>
              <textarea id="grow" rows={4} className="input input-lg" placeholder="Seed type, fertilizer, growing season…" value={form.growing} onChange={set('growing')} />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Price and photo <span className="si" style={{ fontSize: 19 }}>· මිල සහ ඡායාරූපය</span></h2>
            <div className="form-row" style={{ alignItems: 'flex-end' }}>
              <div className="field">
                <label htmlFor="price">Your price (Rs. per kg) · මිල</label>
                <input id="price" type="number" className="input input-lg" value={form.price} onChange={set('price')} />
              </div>
              <div className="ref-price">Reference price: [TO BE SET BY ADMIN]</div>
            </div>
            <div className="form-row" style={{ alignItems: 'stretch' }}>
              <button type="button" className="photo-btn">
                <Icon d={ICONS.camera} size={30} color="var(--accent)" />
                <strong>Add a photo</strong>
                <span className="muted" style={{ fontSize: 15 }}>ඡායාරූපයක් එක් කරන්න</span>
              </button>
              <div className="summary">
                <strong style={{ display: 'block', marginBottom: 8 }}>Summary</strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4, color: 'var(--ink-soft)' }}>
                  <span>Category: {category}</span>
                  <span>Produce: {form.nameEn} · {form.nameSi}</span>
                  <span>Quantity: {form.qty} kg</span>
                  <span>Price: Rs. {form.price} / kg</span>
                </div>
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start', padding: '12px 0' }}>
            <span className="done-badge"><Icon d={ICONS.check} size={32} color="#fff" width={2.6} /></span>
            <h2 style={{ fontSize: 28 }}>Advertisement published</h2>
            <p className="muted" style={{ fontSize: 18 }}>Buyers can now see your produce on the marketplace. · ඔබගේ දැන්වීම පළ කරන ලදී.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link to="/farmer" className="btn btn-primary btn-lg" style={{ minHeight: 48 }}>Go to dashboard</Link>
              <button type="button" className="btn btn-outline btn-lg" style={{ minHeight: 48 }} onClick={() => setStep(1)}>Create another</button>
            </div>
          </div>
        )}

        {step < 4 && (
          <div className="form-nav">
            {step > 1 ? (
              <button type="button" className="btn btn-lg" onClick={() => setStep(step - 1)}>Back · ආපසු</button>
            ) : <span />}
            <button type="button" className="btn btn-primary btn-lg" onClick={() => setStep(step + 1)}>
              {step === 3 ? 'Publish · පළ කරන්න' : 'Next · ඊළඟ'}
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
