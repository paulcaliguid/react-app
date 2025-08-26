import { NavLink } from 'react-router-dom'

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: 'inherit',
  padding: '8px 12px',
  borderRadius: 8,
}

export function Navbar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backdropFilter: 'saturate(180%) blur(8px)',
        background: 'rgba(255 255 255 / 0.7)',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <nav
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 20px',
        }}
      >
        <a href="/" style={{ fontWeight: 700, letterSpacing: 0.3 }}>
          Paul Caliguid
        </a>
        <div style={{ display: 'flex', gap: 4 }}>
          <NavLink to="/" style={linkStyle} end>
            Home
          </NavLink>
          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>
          <NavLink to="/projects" style={linkStyle}>
            Projects
          </NavLink>
          <NavLink to="/experience" style={linkStyle}>
            Experience
          </NavLink>
          <NavLink to="/contact" style={linkStyle}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
