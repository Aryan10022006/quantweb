import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, MARKET_DATA, FADE_IN_UP } from '../constants';
import { getParticlesConfig } from '../utils';
import ParticlesBackground from './shared/ParticlesBackground';
import './Footer.css';

const Footer: React.FC = () => {
  useEffect(() => {
    const loadParticles = async () => {
      // @ts-ignore
      await import('particles.js');
      // @ts-ignore
      window.particlesJS.load('footer-particles', getParticlesConfig(false));
    };

    loadParticles();
  }, []);

  return (
    <footer className="footer">
      <ParticlesBackground containerId="footer-particles" isDarkTheme={false} />
      <div className="footer-grid">
        <motion.div 
          className="footer-column"
          {...FADE_IN_UP}
        >
          <h3>About Quant Community</h3>
          <p>Empowering students with quantitative finance knowledge and practical trading experience.</p>
          <div className="footer-contact">
            <p>Email: contact@quantcommunity.iitb.ac.in</p>
            <p>Location: IIT Bombay, Mumbai, India</p>
          </div>
        </motion.div>

        <motion.div 
          className="footer-column"
          {...FADE_IN_UP}
          transition={{ ...FADE_IN_UP.transition, delay: 0.2 }}
        >
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/events">Events</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-column"
          {...FADE_IN_UP}
          transition={{ ...FADE_IN_UP.transition, delay: 0.4 }}
        >
          <h3>Connect With Us</h3>
          <div className="social-links">
            {SOCIAL_LINKS.map(({ platform, url, icon: Icon }) => (
              <a 
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="ticker-wrap">
        <div className="ticker">
          {MARKET_DATA.map(({ symbol, price, change }) => (
            <div key={symbol} className="ticker-item">
              {`${symbol}: ${price} (${change})`}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Quant Community IITB. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
