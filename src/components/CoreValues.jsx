import React from 'react';
import { Users, Shield, Heart, Anchor } from 'lucide-react';
import './CoreValues.css';

const values = [
  {
    icon: <Users size={28} />,
    title: 'Unity',
    description: 'Shared backgrounds and equality in rank. We share the same bonds, the same mindset, and even the same language. We are all equal — the heart and soul of the Royal Naval Association.'
  },
  {
    icon: <Shield size={28} />,
    title: 'Loyalty',
    description: 'To each other and our dependents. We will always support and look out for each other — our loyalty extends to all shipmates, our communities, and everyone with a naval connection.'
  },
  {
    icon: <Heart size={28} />,
    title: 'Patriotism',
    description: 'We are proud to serve and represent our country and the Naval Service. Our pride never leaves us, nor do we forget those who have fallen or those who fight now.'
  },
  {
    icon: <Anchor size={28} />,
    title: 'Comradeship',
    description: 'Friends in fun, fellowship and need. Your shipmates will always be here for you — whether about a job, a fun day out, or just an arm around the shoulder.'
  }
];

const sevenCs = [
  'Community', 'Connection', 'Commemoration', 'Care',
  'Compassion', 'Companionship', 'Celebration'
];

const CoreValues = () => {
  return (
    <section id="about">

      {/* ── About (white background) ── */}
      <div className="about-section">
        <div className="container about-container">
          <div className="about-header">
            <p className="section-eyebrow">Royal Naval Association · Forth Valley</p>
            <h2 className="about-title">
              The Naval Family<br />
              <em>in your community.</em>
            </h2>
            <div className="about-rule" />
          </div>

          <div className="about-body">
            <div className="about-text">
              <p>
                Like all Royal Naval Association branches, the Forth Valley branch is friendly,
                inclusive, and free to join — welcoming serving and former Royal Navy and Royal Marines
                personnel, along with their families, who are proud of their naval service and heritage.
              </p>
              <p>
                We bring together people with a naval connection across the Forth Valley and surrounding
                areas, offering companionship, support, and a strong sense of belonging within the wider
                Naval Family.
              </p>
              <p>
                Our branch supports members through life's highs and lows through peer support,
                wellbeing signposting, and a welcoming programme of social activities, events, and
                commemorations. As part of the RNA — established after the Second World War — our mission
                is to foster comradeship and enhance the Naval Family at a local level.
              </p>
            </div>

            <div className="about-sevens">
              <p className="sevens-label">At the heart of RNA Forth Valley</p>
              <h3 className="sevens-heading">The Seven Cs of Comradeship</h3>
              <div className="sevens-chips">
                {sevenCs.map((c) => (
                  <span className="sevens-chip" key={c}>{c}</span>
                ))}
              </div>
              <p className="sevens-footer">
                We honour naval traditions, share experiences, and look out for one another —
                maintaining the naval ethos while enjoying good company and mutual support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Core Values (navy background) ── */}
      <div className="values-section">
        <div className="container">
          <div className="values-header text-center">
            <p className="section-eyebrow" style={{ color: 'rgba(212,175,55,0.75)' }}>Our Foundation</p>
            <h2 className="values-title">Core Values</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">{value.icon}</div>
                <div className="value-body">
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-desc">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default CoreValues;
