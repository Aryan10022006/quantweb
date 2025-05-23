import type { Sponsor } from '../types';
import quantixlabs from '../assets/sponsors/quantixlabs.png';
import finoptic from '../assets/sponsors/finoptic.png';
import neuravault from '../assets/sponsors/neuravault.png';
import stratsphere from '../assets/sponsors/stratsphere.png';
import volatilityworks from '../assets/sponsors/volatilityworks.png';
import dataforge from '../assets/sponsors/dataforge.png';

export const SPONSORS: Sponsor[] = [
  {
    id: 1,
    name: 'QuantiXLabs',
    logo: quantixlabs,
    description: 'Pioneering the Future of Data-Driven Investment Strategies'
  },
  {
    id: 2,
    name: 'Finoptic Systems',
    logo: finoptic,
    description: 'Connecting Markets Through Intelligent Technology'
  },
  {
    id: 3,
    name: 'NeuraVault Solutions',
    logo: neuravault,
    description: 'Transforming Complex Data into Trading Excellence'
  },
  {
    id: 4,
    name: 'Stratsphere Technologies',
    logo: stratsphere,
    description: 'Synthetic Intelligence Meets Financial Innovation'
  },
  {
    id: 5,
    name: 'Volatility Works',
    logo: volatilityworks,
    description: 'Accelerating Financial Technology Evolution'
  },
  {
    id: 6,
    name: 'DataForge',
    logo: dataforge,
    description: 'Where Technology Meets Market Insights'
  }
];
