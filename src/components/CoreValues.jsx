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
          <h2 className="section-title">About Our Branch</h2>
          <div className="divider"></div>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--navy-light)' }}>
            Like all Royal Naval Association branches, the Forth Valley branch is friendly, inclusive, and free to join, welcoming serving and former Royal Navy and Royal Marines personnel, along with their families, who are proud of their naval service and heritage.
            <br /><br />
            We are here to bring together people with a naval connection across the Forth Valley and surrounding areas, offering companionship, support, and a strong sense of belonging within the wider Naval Family.
            <br /><br />
            Our branch exists to support members through life’s highs and lows through peer support, wellbeing signposting, and a welcoming programme of social activities, events, and commemorations.
            <br /><br />
            Guided by the RNA values of Unity, Loyalty, Patriotism, and Comradeship, we aim to create a space where everyone with a naval story feels valued and supported.
            <br /><br />
            At the heart of RNA Forth Valley are the Seven Cs of Comradeship:
            <br />
            Community, Connection, Commemoration, Care, Compassion, Companionship, and Celebration.
            <br /><br />
            We honour naval traditions, share experiences, and look out for one another, maintaining the naval ethos while enjoying good company and mutual support.
            <br /><br />
            As part of the Royal Naval Association, established in the aftermath of the Second World War, our mission is to foster comradeship, strengthen connections, and enhance the Naval Family through events, communication, and wellbeing support at a local level.
          </p>
        </div>

        <div className="section-header text-center" style={{ marginTop: '4rem' }}>
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
