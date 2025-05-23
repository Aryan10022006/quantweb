import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { INITIATIVES } from '../constants/initiatives';
import { STAGGER_CONTAINER, STAGGER_ITEM, FADE_IN_UP } from '../constants';
import Button from './shared/Button';
import './InitiativesSection.css';

const InitiativesSection: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const backgroundBlur = useTransform(scrollYProgress, [0, 1], [0, 8]);

  return (
    <section className="initiatives-section" ref={sectionRef}>
      <motion.div 
        className="initiatives-background"
        style={{ 
          opacity: backgroundOpacity,
          backdropFilter: useTransform(backgroundBlur, (value) => `blur(${value}px)`)
        }}
      />
      <div className="container">
        <motion.h2 
          className="section-title"
          {...FADE_IN_UP}
        >
          Our Initiatives
        </motion.h2>
        
        <motion.div 
          className="initiatives-grid"
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {INITIATIVES.map((initiative, index) => (
            <motion.div 
              key={initiative.id}
              className={`initiative-item ${index % 2 === 0 ? 'right-text' : 'left-text'}`}
              variants={STAGGER_ITEM}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div 
                className="initiative-image"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.4 }
                }}
              >
                <motion.img 
                  src={initiative.image} 
                  alt={initiative.title}
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className="image-overlay"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              <motion.div 
                className="initiative-content"
                variants={STAGGER_ITEM}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <h3>{initiative.title}</h3>
                <p>{initiative.description}</p>
                {initiative.link && (
                  <Button 
                    href="#" 
                    variant="ghost" 
                    className="initiative-link"
                  >
                    {initiative.link} →
                  </Button>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="explore-button-container"
          {...FADE_IN_UP}
          transition={{ ...FADE_IN_UP.transition, delay: 0.3 }}
        >
          <Button href="/events">
            Explore Our Events →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InitiativesSection;
