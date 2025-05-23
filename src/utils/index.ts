import type { ParticlesConfig } from '../types';

// Utils for loading and configuring particles
export const getParticlesConfig = (isDarkTheme: boolean): ParticlesConfig => ({
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: isDarkTheme ? '#ffffff' : '#000000'
    },
    opacity: {
      value: isDarkTheme ? 0.1 : 0.05,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: isDarkTheme ? '#ffffff' : '#000000',
      opacity: isDarkTheme ? 0.1 : 0.05,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab'
      },
      resize: true
    }
  },
  retina_detect: true
});

// Utils for formatting dates and numbers
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Utils for animations
export const getDelayedAnimation = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay }
});
