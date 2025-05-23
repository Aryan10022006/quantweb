import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Quantifying the Future';

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeText, 100);
      }
    };

    typeText();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="tagline-box">
            <h1 className="main-tagline">{text}</h1>
            <div className="animated-line"></div>
          </div>
          
          <h2 className="sub-tagline">
            Where Data Meets Decision. Welcome to Quant Community IIT Bombay.
          </h2>

          <div className="features">
            <span className="feature-item">Research</span>
            <span className="feature-dot">•</span>
            <span className="feature-item">Trading</span>
            <span className="feature-dot">•</span>
            <span className="feature-item">Analytics</span>
            <span className="feature-dot">•</span>
            <span className="feature-item">Competitions</span>
          </div>

          <div className="cta-buttons">
            <button className="cta-btn primary">Explore Projects</button>
            <button className="cta-btn secondary">Join Us</button>
          </div>

          <div className="floating-elements">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className={`floating-element fe-${i}`}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
