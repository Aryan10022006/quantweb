import React from 'react';
import { motion } from 'framer-motion';
import { SPONSORS } from '../constants/sponsors';
import './SponsorShowcase.css';

const SponsorShowcase: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="sponsor-showcase">
      <div className="floating-numbers">
        {Array.from({ length: 20 }).map((_, i) => (
          <span 
            key={i} 
            className="floating-number"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5
            }}
          >
            {Math.random().toFixed(4)}
          </span>
        ))}
      </div>
      
      <motion.div 
        className="sponsor-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {SPONSORS.map((sponsor) => (
          <motion.div
            key={sponsor.id}
            className="sponsor-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 8px 30px rgba(46, 213, 115, 0.2)'
            }}
          >
            <div className="sponsor-logo-container">
              <img 
                src={sponsor.logo}
                alt={`${sponsor.name} logo`} 
                className="sponsor-logo"
                loading="lazy"
              />
            </div>
            <div className="sponsor-info">
              <h3>{sponsor.name}</h3>
              <p>{sponsor.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="data-lines"></div>
    </section>
  );
};

export default SponsorShowcase;
