// src/components/Navbar.tsx
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logoImage from '../assets/qc_logo_dark.svg'
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Events', path: '/events' },
  { name: 'Sponsors', path: '/sponsors' },
  { name: 'Questions', path: '/questions' },
  { name: 'About Us', path: '/about' },
  { name: 'Team', path: '/team' },
]

const MAX_MAIN_ITEMS = 5;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mainItems = navItems.slice(0, MAX_MAIN_ITEMS);
  const moreItems = navItems.slice(MAX_MAIN_ITEMS);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <img src={logoImage} alt="Logo" className="navbar-logo" />
        <NavLink to="/" className="navbar-brand pixel-font d-flex flex-column">
          <span className="brand-main">Quant Community, IITB</span>
        </NavLink>
        <button className="navbar-hamburger" onClick={() => setMobileOpen(open => !open)} aria-label="Toggle menu">
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
        <ul className={`navbar-nav-list${mobileOpen ? ' open' : ''}`}>
          {mainItems.map((item) => (
            <li className="nav-item" key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active-tab' : ''}`
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          {moreItems.length > 0 && (
            <li className="nav-item nav-more">
              <span className="nav-link">More</span>
              <ul className="nav-dropdown">
                {moreItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `nav-link ${isActive ? 'active-tab' : ''}`
                      }
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
