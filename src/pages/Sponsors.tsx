import React from 'react';
import SponsorsHero from '../components/SponsorsHero';
import SponsorShowcase from '../components/SponsorShowcase';
import PageTransition from '../components/PageTransition';
import '../styles/Sponsors.css';

const Sponsors: React.FC = () => {
  return (
    <PageTransition>
      <div className="sponsors-page">
        <SponsorsHero />
        <SponsorShowcase />
      </div>
    </PageTransition>
  );
};

export default Sponsors;
