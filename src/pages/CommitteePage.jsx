import React from 'react';
import { User } from 'lucide-react';
import PageHero from '../components/PageHero';
import './CommitteePage.css';

const committeeMembers = [
  {
    role: 'Branch Chairman',
    name: "Ian 'Ali' Barber",
    description: 'Chairs branch meetings and oversees the day-to-day running of the branch.',
  },
  {
    role: 'Branch Vice-Chairman',
    name: 'Kenny MacIntosh',
    description: 'Supports the Chairman and deputises in their absence.',
  },
  {
    role: 'Secretary',
    name: 'TBC',
    description: 'Manages branch correspondence, meeting minutes, and administrative duties.',
  },
  {
    role: 'Branch Treasurer',
    name: 'Jimmy Mann',
    description: 'Oversees branch finances, accounts, and reports to the annual general meeting.',
  },
  {
    role: 'Branch Welfare Officer',
    name: 'John Wain',
    description: 'Provides welfare support and signposting to members and dependants in need.',
  },
  {
    role: 'Branch Standard Bearer',
    name: 'Dave Lewis',
    description: 'Carries the branch standard at Remembrance events and official RNA occasions.',
  },
];

const MemberCard = ({ role, name, description }) => (
  <div className="member-card">
    <div className="member-photo-placeholder" aria-hidden="true">
      <User size={48} />
    </div>
    <div className="member-info">
      <h3 className="member-role">{role}</h3>
      <p className="member-name">{name === 'TBC' ? 'To be confirmed' : name}</p>
      <p className="member-desc">{description}</p>
    </div>
  </div>
);

const CommitteePage = () => (
  <>
    <PageHero
      title="Branch Committee"
      subtitle="The officers and committee members who keep the Forth Valley branch running."
    />
    <section className="committee-section">
      <div className="container">
        <p className="committee-intro">
          The RNA Forth Valley branch is run by a dedicated team of volunteers. The committee meets regularly
          to manage branch affairs and ensure we continue to serve our members and community.
          All positions are elected at the Annual General Meeting.
        </p>
        <div className="committee-grid">
          {committeeMembers.map((member) => (
            <MemberCard key={member.role} {...member} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default CommitteePage;
