import React from 'react';
import { Facebook, Instagram, ExternalLink } from 'lucide-react';
import { socialConfig } from '../data/social-config';
import './SocialSection.css';

const SocialCard = ({ href, icon: Icon, platform, handle, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-card"
    style={{ '--platform-color': color }}
  >
    <div className="social-card-icon">
      <Icon size={36} strokeWidth={1.5} />
    </div>
    <div className="social-card-body">
      <span className="social-card-platform">{platform}</span>
      <span className="social-card-handle">{handle}</span>
    </div>
    <ExternalLink size={16} className="social-card-arrow" />
  </a>
);

const SocialSection = () => {
  const { facebook, instagram } = socialConfig;
  const anyEnabled = facebook.enabled || instagram.enabled;

  return (
    <section className="social-section" id="social">
      <div className="container">
        <div className="social-header">
          <p className="section-eyebrow" style={{ color: 'rgba(212,175,55,0.75)' }}>Stay Connected</p>
          <h2 className="social-title">Follow Us Online</h2>
          <p className="social-subtitle">
            Keep up with branch news, events, and updates on social media.
          </p>
        </div>

        {anyEnabled ? (
          <div className="social-cards">
            {facebook.enabled && (
              <SocialCard
                href={facebook.pageUrl}
                icon={Facebook}
                platform="Facebook"
                handle={facebook.label}
                color="#1877F2"
              />
            )}
            {instagram.enabled && (
              <SocialCard
                href={instagram.profileUrl}
                icon={Instagram}
                platform="Instagram"
                handle={instagram.handle}
                color="#E1306C"
              />
            )}
          </div>
        ) : (
          <p className="social-placeholder">Social media pages coming soon.</p>
        )}
      </div>
    </section>
  );
};

export default SocialSection;
