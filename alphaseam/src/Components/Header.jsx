import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoWhite from '../assets/Navbar/logowhite.png';
import logoBlack from '../assets/Navbar/logoblack.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={handleLinkClick}>
            <img
              src={scrolled ? logoBlack : logoWhite}
              alt="Alphaseam Logo"
              className="logo-img"
            />
          </Link>
        </div>

        <nav className="nav">
          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={handleLinkClick} className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/about" onClick={handleLinkClick} className={location.pathname === '/about' ? 'active' : ''}>About</Link>
            <Link to="/services" onClick={handleLinkClick} className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
            <Link to="/career" onClick={handleLinkClick} className={location.pathname === '/career' ? 'active' : ''}>Career</Link>
            <Link to="/blog" onClick={handleLinkClick} className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link>
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
