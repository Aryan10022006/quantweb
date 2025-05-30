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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const mainItems = navItems.slice(0, MAX_MAIN_ITEMS);
  const moreItems = navItems.slice(MAX_MAIN_ITEMS);

  return (
    <nav className="navbar navbar-expand-lg border-bottom px-2 py-2">
      <div className="container-fluid bg-black">
        <img src={logoImage} alt="Logo" className="navbar-logo" />
        <NavLink to="/" className="navbar-brand pixel-font d-flex flex-column">
          <span className="brand-main">Quant Community, IITB</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex justify-content-end text-right small align-items-center">
            {mainItems.map((item) => (
              <li className="nav-item mx-2" key={item.name} style={{ textAlign: 'left' }}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link px-3 py-1 text-white ${isActive ? 'active-tab' : 'text-white'}`
                  }
                  style={{ fontSize: '0.9rem' }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            {moreItems.length > 0 && (
              <li className="nav-item dropdown mx-2" style={{ textAlign: 'left' }}>
                <button
                  className="nav-link dropdown-toggle px-3 py-1 text-white bg-transparent border-0"
                  id="moreDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen((open) => !open)}
                  style={{ fontSize: '0.9rem' }}
                >
                  More
                </button>
                <ul className={`dropdown-menu dropdown-menu-end${dropdownOpen ? ' show' : ''}`} aria-labelledby="moreDropdown">
                  {moreItems.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `dropdown-item${isActive ? ' active-tab' : ''}`
                        }
                        onClick={() => setDropdownOpen(false)}
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
      </div>
    </nav>
  )
}

export default Navbar
