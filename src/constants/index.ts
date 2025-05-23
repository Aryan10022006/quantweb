import type { NavLink, SocialLink, MarketData } from '../types';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'Home' },
  { path: '/events', label: 'Events' },
  { path: '/sponsors', label: 'Sponsors' },
  { path: '/blogs', label: 'Blogs' },
  { path: '/competitions', label: 'Competitions' },
  { path: '/about', label: 'About' },
  { path: '/team', label: 'Team' },
  { path: '/contact', label: 'Contact' }
];

// Social Media Links
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: FaLinkedin },
  { platform: 'GitHub', url: 'https://github.com', icon: FaGithub },
  { platform: 'Instagram', url: 'https://instagram.com', icon: FaInstagram },
  { platform: 'Twitter', url: 'https://twitter.com', icon: FaTwitter }
];

// Market Data for Ticker
export const MARKET_DATA: MarketData[] = [
  { symbol: 'BTC', price: '$45,678', change: '+2.3%' },
  { symbol: 'ETH', price: '$3,245', change: '+1.5%' },
  { symbol: 'NASDAQ', price: '15,234', change: '+0.8%' },
  { symbol: 'S&P 500', price: '4,567', change: '+0.5%' },
  { symbol: 'EUR/USD', price: '1.2345', change: '+0.3%' }
];

// Animation Variants
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

export const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};
