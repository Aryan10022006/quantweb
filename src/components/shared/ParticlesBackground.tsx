import React from 'react';
import { motion } from 'framer-motion';
import { FADE_IN_UP } from '../../constants';
import './ParticlesBackground.css';

interface ParticlesBackgroundProps {
  containerId: string;
  className?: string;
  isDarkTheme?: boolean;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ 
  containerId, 
  className = '',
  isDarkTheme = false 
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
