// src/components/Navbar.tsx
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logoImage from '../assets/qc_logo_dark.svg'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Events', path: '/events' },
  { name: 'Sponsors', path: '/sponsors' },
  { name: 'About Us', path: '/about' },
  { name: 'Team', path: '/team' },
]

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom px-4 py-3">
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
