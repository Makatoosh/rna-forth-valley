import React from 'react';
import { Users, Shield, Heart, Anchor } from 'lucide-react';
import './CoreValues.css';
import secondaryBg from '../assets/images/secondary-bg.jpg';

const values = [
  {
    icon: <Users size={40} />,
    title: 'Unity',
    description: 'Shared backgrounds and equality in rank. We share the same bonds, the same mindset, and even the same language. We are all equal. We are the heart and soul of the Royal Naval Association.'
  },
  {
    icon: <Shield size={40} />,
    title: 'Loyalty',
    description: 'To each other and our dependents. We will always support and look out for each other. Our loyalty is to all our shipmates, our local communities, the personnel and dependents of the Naval Service, along with other charities or organisations with naval connections.'
  },
  {
    icon: <Heart size={40} />,
    title: 'Patriotism',
    description: 'We are proud to serve and represent our country and the Naval Service. Our pride in serving our country never leaves us. Nor do we forget those who have fallen for our country or who fight now. We are deeply honoured to represent them on both a national and international level.'
  },
  {
    icon: <Anchor size={40} />,
    title: 'Comradeship',
    description: 'Friends in fun, fellowship and need. Your shipmates will always be here for you, whether it’s about a job, ideas for a fun day out or just an arm around the shoulder. We will never leave you or your dependents in despair.'
  }
];

const CoreValues = () => {
  return (
    <section className="core-values" id="about" style={{ backgroundImage: `url(${secondaryBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(248, 249, 250, 0.95)' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header text-center">
          <h2 className="section-title">Our Core Values</h2>
          <div className="divider"></div>
          <p className="section-subtitle">
            The Royal Naval Association provides companionship, comradeship, and unity to everyone with a naval story.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-desc">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
