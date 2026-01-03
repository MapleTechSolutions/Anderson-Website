import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Header.css'
import logoDark from '../../images/Anderson-Wealth-Horizontal-White.svg'
import logoLight from '../../images/Anderson-Wealth-Horizontal-Mine-Shaft.svg'

export default function Header({ variant = 'dark' }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation();
  const logo = variant === 'light' ? logoLight : logoDark

  // Open dropdown if on /services page
  const servicesOpen = isServicesOpen || location.pathname === '/services';

  // Add a class to body for /about page
  useEffect(() => {
    if (
      location.pathname === '/about' ||
      location.pathname === '/services' ||
      location.pathname === '/insurance' ||
      location.pathname === '/investments' ||
      location.pathname === '/contact'
    ) {
      document.body.classList.add('about-page-active');
    } else {
      document.body.classList.remove('about-page-active');
    }
  }, [location.pathname]);

  const servicesStyle = {};

  return (
    <header className={`header header-${variant}`}>
      <div className="header-container">
        <Link to="/" className="logo-section" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="Anderson Wealth Logo" className="logo-icon" />
          <div className="company-info">
            {/* <h1 className="company-name">ANDERSON WEALTH MANAGEMENT</h1>
            <p className="established">Established 2020</p> */}
          </div>
        </Link>

        <nav className="nav">
          <Link to="/about" className="nav-link">About</Link>
          <div className="nav-dropdown">
            <Link
              to="/services"
              className="nav-link dropdown-toggle"
              style={servicesStyle}
              onClick={() => setIsServicesOpen(true)}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Services
              <span className="dropdown-arrow">▼</span>
            </Link>
            {servicesOpen && (
              <div
                className="dropdown-menu"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link to="/insurance" className="dropdown-item" onClick={() => setIsServicesOpen(false)}>Insurance</Link>
                <Link to="/investments" className="dropdown-item" onClick={() => setIsServicesOpen(false)}>Investments</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <button className="cta-button">BOOK A FREE CONSULTATION</button>
      </div>
    </header>
  )
}
