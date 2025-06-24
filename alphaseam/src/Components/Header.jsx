import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`header ${menuOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">Alphaseam</Link>
        </div>
        <nav className="nav">
          <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
            <li><Link to="/">Home</Link></li> {/* ✅ Added Home option */}
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
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
