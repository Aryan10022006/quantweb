// Common types used across the application
export interface Initiative {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export interface NavLink {
  path: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType;
}

export interface MarketData {
  symbol: string;
  price: string;
  change: string;
}

export interface ParticlesConfig {
  particles: {
    number: {
      value: number;
      density: {
        enable: boolean;
        value_area: number;
      };
    };
    color: {
      value: string;
    };
    opacity: {
      value: number;
      random: boolean;
    };
    size: {
      value: number;
      random: boolean;
    };
    line_linked: {
      enable: boolean;
      distance: number;
      color: string;
      opacity: number;
      width: number;
    };
    move: {
      enable: boolean;
      speed: number;
      direction: string;
      random: boolean;
      straight: boolean;
      out_mode: string;
      bounce: boolean;
    };
  };
  interactivity: {
    detect_on: string;
    events: {
      onhover: {
        enable: boolean;
        mode: string;
      };
      resize: boolean;
    };
  };
  retina_detect: boolean;
}

export interface Sponsor {
  id: number;
  name: string;
  logo: string;
  description: string;
}
