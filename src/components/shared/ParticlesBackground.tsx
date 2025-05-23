import React from 'react';
import { motion } from 'framer-motion';
import './ParticlesBackground.css';

interface ParticlesBackgroundProps {
  containerId: string;
  className?: string;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ 
  containerId, 
  className = ''
}) => {
  return (
    <motion.div 
      id={containerId}
      className={`particles-container ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default ParticlesBackground;
