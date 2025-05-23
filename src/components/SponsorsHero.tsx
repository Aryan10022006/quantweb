import React from 'react';
import { motion } from 'framer-motion';
import Button from './shared/Button';
import './SponsorsHero.css';

const SponsorsHero: React.FC = () => {
  return (
    <section className="sponsors-hero">
      <div className="market-graph-background"></div>
      <div className="sponsors-overlay"></div>
      <div className="sponsors-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="sponsors-title"
        >
          Our Sponsors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="sponsors-tagline"
        >
Powering Innovation in Quantitative Finance

        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="sponsors-description"
        >
          <p>
            We thank our partners for supporting our mission to advance financial technology and quantitative excellence.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="sponsors-cta"
        >
          <Button
            href="/contact?type=sponsor"
            className="become-sponsor-button"
          >
            Become a Sponsor →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsHero;
