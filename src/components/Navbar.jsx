import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { name: 'About',     href: '#about',    type: 'hash'  },
  { name: 'Welfare',   to: '/welfare',    type: 'route' },
  { name: 'Events',    to: '/events',     type: 'route' },
  {
    name: 'Media',
    type: 'dropdown',
    children: [
      { name: 'News',    to: '/news',    type: 'route' },
      { name: 'Gallery', to: '/gallery', type: 'route' },
    ],
  },
  { name: 'Committee', to: '/committee',  type: 'route' },
  { name: 'Contact',   href: '#contact',  type: 'hash'  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (link) => {
    if (link.type === 'route') return location.pathname.startsWith(link.to);
    if (link.type === 'dropdown') return link.children.some((c) => location.pathname.startsWith(c.to));
    return false;
  };

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
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
          {navLinks.map((link) => {
            if (link.type === 'dropdown') {
              return (
                <div key={link.name} className={`nav-dropdown ${isActive(link) ? 'nav-dropdown-active' : ''}`}>
                  <button className="nav-dropdown-btn">
                    {link.name}
                    <ChevronDown size={13} className="dropdown-chevron" />
                  </button>
                  <div className="dropdown-menu">
                    {link.children.map((child) => renderLink(child, 'dropdown-item'))}
                  </div>
                </div>
              );
            }
            return renderLink(link);
          })}
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
        {navLinks.map((link) => {
          if (link.type === 'dropdown') {
            const isOpen = openDropdown === link.name;
            return (
              <div key={link.name} className="mobile-dropdown-wrapper">
                <button
                  className={`mobile-nav-link mobile-dropdown-toggle ${isActive(link) ? 'nav-link-active' : ''}`}
                  onClick={() => setOpenDropdown(isOpen ? null : link.name)}
                >
                  {link.name}
                  <ChevronDown size={14} className={`dropdown-chevron ${isOpen ? 'rotated' : ''}`} />
                </button>
                <div className={`mobile-dropdown-items ${isOpen ? 'open' : ''}`}>
                  {link.children.map((child) => renderLink(child, 'mobile-nav-link mobile-sub-link', closeMobile))}
                </div>
              </div>
            );
          }
          return renderLink(link, 'mobile-nav-link', closeMobile);
        })}
        <a
          href="https://www.royal-naval-association.co.uk/join-us"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mobile-nav-cta"
          onClick={closeMobile}
        >
          Join Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
