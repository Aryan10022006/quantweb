# Quant Community IITB Website

A modern, dynamic website for the Quantitative Finance Community at IIT Bombay. Built with React, TypeScript, and Vite, featuring smooth animations and responsive design.

## 🚀 Features

### Homepage
- Dynamic hero section with animated background
- Interactive initiatives showcase with hover effects
- About section highlighting community achievements
- Smooth page transitions and loading animations

### Sponsors Page
- Dark-themed hero section with animated market data
- Light-themed sponsor showcase with glassmorphic cards
- Floating numbers animation and data line backgrounds
- Interactive card hover effects

### Visual Elements
- Dynamic particle.js backgrounds
- Animated market data ticker
- Smooth scroll animations
- Glassmorphism effects
- Responsive design for all screen sizes

### Technical Features
- TypeScript for type safety
- Component-based architecture
- Responsive image optimization
- Lazy loading for better performance
- CSS Grid and Flexbox layouts

## 🛠 Technologies Used

### Core
- React 18.2.0
- TypeScript 5.0.2
- Vite 4.3.2

### Animation Libraries
- Framer Motion 10.12.12
- Particles.js 2.0.0

### UI Components
- React Icons 4.8.0
- React Router DOM 6.11.2

### Development Tools
- ESLint 8.38.0
- PostCSS 8.4.23
- Autoprefixer 10.4.14

## 📦 Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   └── shared/     # Reusable components
├── constants/       # Application constants
├── pages/          # Page components
├── styles/         # Global styles
├── types/          # TypeScript definitions
└── utils/          # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```powershell
git clone https://github.com/Aryan10022006/quantweb.git
cd quantweb
```

2. Install dependencies
```powershell
npm install
# or
yarn install
```

3. Start development server
```powershell
npm run dev
# or
yarn dev
```

4. Build for production
```powershell
npm run build
# or
yarn build
```

The development server will start at `http://localhost:5173`

## 🎨 Design System

### Color Palette
- Primary: Black (#000000)
- Accent: Vibrant Green (#2ed573)
- Text: White/Black with varying opacity
- Backgrounds: Gradient combinations of black and green

### Typography
- Headings: 'Press Start 2P', monospace
- Body: 'Space Mono', monospace

### Components
- Button variants (primary, secondary, ghost)
- Card layouts with glassmorphism
- Animated section transitions
- Responsive navigation

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_APP_TITLE=Quant Community IITB
VITE_API_URL=your_api_url_here
```

### Custom Styling
- Modify `src/index.css` for global styles
- Component-specific styles are co-located with components

## 📱 Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details

## 👥 Team
- Developed by Quant Community IITB
- For more information, visit [website_url]

## 🔍 Additional Resources
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
