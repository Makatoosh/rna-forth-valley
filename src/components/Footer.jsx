import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-col">
            <div className="footer-brand">
              <span className="footer-title">Royal Naval Association</span>
              <span className="footer-subtitle">Forth Valley</span>
            </div>
            <p className="footer-desc">
              Supporting Serving and Ex-Naval personnel and their families in the Forth Valley area.
              Once Navy, Always Navy.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/groups/349035108587097" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/rna_forthvalley/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About the Branch</a></li>
              <li><Link to="/welfare">Welfare &amp; Support</Link></li>
              <li><Link to="/events">Upcoming Events</Link></li>
              <li><Link to="/committee">Committee</Link></li>
              <li><a href="https://www.royal-naval-association.co.uk/join-us" target="_blank" rel="noopener noreferrer">Join the RNA</a></li>
              <li><a href="https://www.royal-naval-association.co.uk" target="_blank" rel="noopener noreferrer">National Website</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>RBLS Grangemouth, 4 Dundas Street, Grangemouth, FK3 8BQ</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>01234 567 890</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>info@rnaforthvalley.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Royal Naval Association - Forth Valley Branch. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
        <div className="footer-credit">
          <p>Website created by Kenny MacIntosh</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
