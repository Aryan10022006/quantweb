import type { Initiative } from '../types/index';
import quantquest from '../assets/initiatives/quantquest.png';
import momentumtrading from '../assets/initiatives/momentumtrading.png';
import vixoptions from '../assets/initiatives/vixoptions.png';
import quantcourse from '../assets/initiatives/quantcourse.png';
import summerofquant from '../assets/initiatives/summerofquant.png';

export const INITIATIVES: Initiative[] = [
  {
    id: 1,
    title: "QuantQuest (March 2025)",
    description: "A flagship quantitative finance competition organized in collaboration with Qube Research & Technologies (QRT). The event provided students an opportunity to apply analytical and problem-solving skills to real-world market challenges.",
    image: quantquest,
    link: "LinkedIn"
  },
  {
    id: 2,
    title: "Momentum Trading Workshop with QuantInsti",
    description: "An insightful session conducted by Rekhit P., Sr. Quant Associate at QuantInsti, focusing on momentum trading strategies, autocorrelation, and market inefficiencies.",
    image: momentumtrading,
    link: "LinkedIn"
  },
  {
    id: 3,
    title: "VixOptions Workshop",
    description: "An engaging workshop on VIX options, covering the intricacies of volatility trading and its implications in the financial markets.",
    image: vixoptions,
    link: "Reddit"
  },
  {
    id: 4,
    title: "Quant Strategy Development Course",
    description: "An educational initiative offering a course on developing quantitative strategies with real-world case studies. The course bridges theory and practice.",
    image: quantcourse,
    link: "LinkedIn"
  },
  {
    id: 5,
    title: "Summer of Code Project: Quant Model Development",
    description: "As part of the Institute Technical Council's Summer of Code, a project focused on developing quant models from basics to automate trading systems.",
    image: summerofquant
  }
];
