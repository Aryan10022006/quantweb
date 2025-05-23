// src/components/Navbar.tsx
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import logoImage from '../assets/qc_logo_dark.svg'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Events', path: '/events' },
  { name: 'Sponsors', path: '/sponsors' },
  { name: 'About Us', path: '/about' },
  { name: 'Team', path: '/team' },
]

const css = `
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.pixel-font {
  font-family: 'Press Start 2P', monospace;
  letter-spacing: 1px;
}
.hover-effect {
  transition: color 0.3s ease;
}
.hover-effect:hover {
  color: #000000;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  min-width: 1000px;
  backdrop-filter: blur(10px);
  background: #rgba(0, 0, 0, 0.8);
  padding: 20rem 2rem;
}
.navbar-logo {
  height: 40px;
  width: auto;
  margin-right: 1rem;
  transition: all 0.3s ease;
}
.navbar-brand.pixel-font {
  font-family: 'Press Start 2P', monospace;
  margin: 0;
  padding: 0;
  line-height: 1.2;
}
.brand-main {
  font-size: 1.25rem;
  letter-spacing: 0.5px;
  white-space: nowrap;
  color: #fff;
}
.brand-sub {
  font-size: 1rem;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.9);
}
.nav-link {
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border-radius: 6px;
  position: relative;
  z-index: 1001;
}
.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff !important;
}
.navbar-nav .nav-link.active-tab {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  color: #fff !important;
}
.navbar-nav .nav-link {
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border-radius: 6px;
}
@media (max-width: 992px) {
  .navbar-brand.pixel-font {
    font-size: 1.2rem;
  }
  .brand-sub {
    font-size: 1rem;
  }
  .navbar-collapse {
    background: rgba(0, 0, 0, 0.98);
    padding: 1rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
  }
  .navbar-nav {
    gap: 0.5rem;
  }
  .nav-item {
    width: 100%;
  }
  .nav-link {
    text-align: center;
  }
}
@media (max-width: 576px) {
  .navbar-logo {
    height: 32px;
  }
  .brand-main {
    font-size: 1rem;
  }
  .brand-sub {
    font-size: 0.8rem;
  }
  .navbar {
    padding: 0.5rem !important;
  }
}
.navbar-collapse {
  transition: all 0.3s ease-in-out;
  z-index: 1000;
}
`

const Navbar = () => {
  useEffect(() => {
    const styleTag = document.createElement('style')
    styleTag.innerHTML = css
    document.head.appendChild(styleTag)
    return () => {
      document.head.removeChild(styleTag)
    }
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom px-4 py-3">
      <div className="container-fluid bg-black">
        <img src={logoImage} alt="Logo" className="navbar-logo" />
        <NavLink to="/" className="navbar-brand pixel-font d-flex flex-column">
          <span className="brand-main">Quant Community</span>
          <span className="brand-sub">IITB</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex justify-content-end text-right small">
            {navItems.map((item) => (
              <li className="nav-item mx-2" key={item.name} style={{ textAlign: 'left' }}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link px-3 py-1 ${isActive ? 'active-tab' : 'text-white'}`
                  }
                  style={{ fontSize: '0.9rem' }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
