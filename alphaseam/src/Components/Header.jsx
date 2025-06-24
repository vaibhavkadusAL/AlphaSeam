import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoImg from '../assets/Navbar/image.png'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${menuOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logoImg} alt="Alphaseam Logo" className="logo-img" />
            <span className="logo-text">Alphaseam</span>
          </Link>
        </div>

        <nav className="nav">
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={handleLinkClick} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/about" onClick={handleLinkClick} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            <Link to="/services" onClick={handleLinkClick} className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
            <Link to="/career" onClick={handleLinkClick} className={location.pathname === '/career' ? 'active' : ''}>Career</Link>
            <Link to="/contact" onClick={handleLinkClick} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          </div>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
