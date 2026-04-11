import React from 'react';
import { Heart, Phone, ExternalLink, Shield, Users, LifeBuoy, HandHeart } from 'lucide-react';
import PageHero from '../components/PageHero';
import './WelfarePage.css';

const services = [
  {
    icon: Heart,
    title: 'Mental Health Support',
    description: 'Confidential support for veterans and serving personnel dealing with mental health challenges, PTSD, and transition difficulties.',
  },
  {
    icon: HandHeart,
    title: 'Financial Assistance',
    description: 'Guidance on accessing grants, benefits, and financial support available to RNA members and their dependants.',
  },
  {
    icon: Users,
    title: 'Peer Support Network',
    description: 'Connect with fellow naval veterans who understand your experiences. Shared comradeship is at the heart of what we do.',
  },
  {
    icon: Shield,
    title: 'Welfare Casework',
    description: 'Our Welfare Officer can help you navigate complex situations and connect you with the right support services.',
  },
];

const externalResources = [
  {
    name: 'RNA National Welfare',
    description: 'The national RNA welfare team offers a wide range of support services for members.',
    url: 'https://www.royal-naval-association.co.uk/support/welfare',
  },
  {
    name: 'Veterans UK',
    description: 'Government welfare service for veterans, including financial support and mental health services.',
    url: 'https://www.gov.uk/guidance/veterans-welfare-service',
  },
  {
    name: 'Combat Stress',
    description: 'The UK\'s leading mental health charity for veterans, specialising in trauma-related conditions.',
    url: 'https://www.combatstress.org.uk/',
  },
  {
    name: 'Veterans Gateway',
    description: 'A single point of contact to help veterans access support across health, housing, employment and more.',
    url: 'https://www.veteransgateway.org.uk/',
  },
  {
    name: 'SSAFA',
    description: 'The Armed Forces charity, providing lifelong support to veterans and their families.',
    url: 'https://www.ssafa.org.uk/',
  },
];

const WelfarePage = () => (
  <>
    <PageHero
      title="Welfare &amp; Support"
      subtitle="We are here for our members and their families. Whatever you are facing, you do not have to face it alone."
    />

    {/* Services Section */}
    <section className="welfare-section">
      <div className="container">
        <h2 className="welfare-section-title">How We Can Help</h2>
        <p className="welfare-section-intro">
          The RNA Forth Valley branch is committed to the welfare of all our members, their families, and dependants.
          Our Welfare Officer is available to provide guidance, support, and signposting to appropriate services.
        </p>
        <div className="welfare-services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div className="welfare-service-card" key={service.title}>
                <div className="welfare-service-icon">
                  <Icon size={32} />
                </div>
                <h3 className="welfare-service-title">{service.title}</h3>
                <p className="welfare-service-desc">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* External Resources */}
    <section className="welfare-section bg-light">
      <div className="container">
        <h2 className="welfare-section-title">National &amp; External Resources</h2>
        <p className="welfare-section-intro">
          A range of national organisations offer specialist support. Our Welfare Officer can help you
          connect with the right service for your needs.
        </p>
        <div className="welfare-resources-grid">
          {externalResources.map((resource) => (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="welfare-resource-card"
            >
              <div className="welfare-resource-header">
                <h3 className="welfare-resource-name">{resource.name}</h3>
                <ExternalLink size={16} className="welfare-resource-ext" />
              </div>
              <p className="welfare-resource-desc">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Emergency Contacts */}
    <section className="welfare-section">
      <div className="container">
        <h2 className="welfare-section-title">Emergency &amp; Crisis Support</h2>
        <div className="welfare-emergency-grid">
          <div className="welfare-emergency-card">
            <LifeBuoy size={28} className="welfare-emergency-icon" />
            <div>
              <h3>Veterans Crisis Line (Combat Stress)</h3>
              <p>24-hour helpline for veterans in crisis</p>
              <a href="tel:08001381619" className="welfare-emergency-number">0800 138 1619</a>
            </div>
          </div>
          <div className="welfare-emergency-card">
            <Phone size={28} className="welfare-emergency-icon" />
            <div>
              <h3>Samaritans</h3>
              <p>Free, confidential support any time of day or night</p>
              <a href="tel:116123" className="welfare-emergency-number">116 123</a>
            </div>
          </div>
          <div className="welfare-emergency-card">
            <Heart size={28} className="welfare-emergency-icon" />
            <div>
              <h3>Branch Welfare Officer</h3>
              <p>Contact our branch Welfare Officer directly</p>
              <span className="welfare-emergency-number">Contact via branch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default WelfarePage;
