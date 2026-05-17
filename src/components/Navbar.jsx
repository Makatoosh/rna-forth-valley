import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { name: 'About',     href: '#about',    type: 'hash'  },
  { name: 'Welfare',   to: '/welfare',    type: 'route' },
  { name: 'Events',    to: '/events',     type: 'route' },
  { name: 'Gallery',   to: '/gallery',    type: 'route' },
  { name: 'Committee', to: '/committee',  type: 'route' },
  { name: 'Contact',   href: '#contact',  type: 'hash'  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (link) => {
    if (link.type === 'route') {
      return location.pathname.startsWith(link.to);
    }
    return false;
  };

  const renderLink = (link, extraClass = '', onClick) => {
    if (link.type === 'route') {
      return (
        <Link
          key={link.name}
          to={link.to}
          className={`nav-link ${extraClass} ${isActive(link) ? 'nav-link-active' : ''}`}
          onClick={onClick}
        >
          {link.name}
        </Link>
      );
    }
    // Hash link — if not on home page, prefix with '/'
    const href = location.pathname === '/' ? link.href : '/' + link.href;
    return (
      <a
        key={link.name}
        href={href}
        className={`nav-link ${extraClass}`}
        onClick={onClick}
      >
        {link.name}
      </a>
    );
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo" aria-label="Royal Naval Association Forth Valley — Home" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/rna-logo-official.png" alt="RNA Crest" className="logo-icon" />
          <div className="logo-text">
            <span className="logo-title">Royal Naval Association</span>
            <span className="logo-subtitle">Forth Valley</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navLinks.map((link) => renderLink(link))}
          <a
            href="https://www.royal-naval-association.co.uk/join-us"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-cta"
          >
            Join Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) =>
          renderLink(link, 'mobile-nav-link', () => setIsMobileMenuOpen(false))
        )}
        <a
          href="https://www.royal-naval-association.co.uk/join-us"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mobile-nav-cta"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Join Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
