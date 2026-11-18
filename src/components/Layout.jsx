import { useState } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import Icon, { ICONS } from './Icon.jsx'

const NAV = [
  { to: '/', label: 'Marketplace', si: 'වෙළඳපොල' },
  { to: '/farmer', label: 'Farmer', si: 'ගොවියා' },
  { to: '/orders', label: 'My orders', si: 'ඇණවුම්' },
  { to: '/admin', label: 'Admin' },
]

const LANGS = [
  { id: 'en', label: 'EN' },
  { id: 'si', label: 'සිං' },
  { id: 'ta', label: 'த' },
]

export default function Layout() {
  const [lang, setLang] = useState('en')

  return (
    <div className="app">
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            <span className="logo-mark"><Icon d={ICONS.leaf} size={22} color="#fff" width={2} /></span>
            <span className="logo-text">Agrilink</span>
          </Link>

          <nav aria-label="Main" className="nav">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
                {n.label}{n.si && <> · <span className="si-inline">{n.si}</span></>}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <div role="group" aria-label="Language" className="lang">
              {LANGS.map((l) => (
                <button key={l.id} type="button" className={lang === l.id ? 'on' : ''} onClick={() => setLang(l.id)}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <Outlet />

      <div className="voice-wrap">
        <button type="button" className="voice-btn" aria-label="Speak to the voice assistant">
          <Icon d={ICONS.mic} color="#3B2E05" width={2} />
          Speak · කථා කරන්න
        </button>
      </div>
    </div>
  )
}
