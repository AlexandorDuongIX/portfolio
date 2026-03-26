import { useState, useEffect } from 'react';
import { useLang } from '../context/LangContext';

const titles = ['Frontend Developer', 'React Developer', 'Software Engineering Student'];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const { t } = useLang();

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (!isDeleting && charIndex <= currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((c) => c - 1);
        setDisplayText(currentTitle.slice(0, charIndex - 1));
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">
            <span className="wave">👋</span> {'<'} {t.hero.greeting} {'/>'} 
          </p>
          <h1 className="hero-name">
            Trần Khánh{' '}
            <span className="gradient-text">Dương</span>
          </h1>
          <p className="hero-title">
            {'> '}{displayText}
            <span className="typing-cursor"></span>
          </p>
          <p className="hero-description">
            {t.hero.description}
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              ✉️ {t.hero.contact}
            </a>
            <a href="#projects" className="btn btn-outline">
              🚀 {t.hero.viewProjects}
            </a>
            <a href="/cv.pdf" download className="btn btn-outline">
              📄 {t.hero.downloadCV}
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>2+</h3>
              <p>{t.hero.yearsExp}</p>
            </div>
            <div className="stat-item">
              <h3>1+</h3>
              <p>{t.hero.projectsDone}</p>
            </div>
            <div className="stat-item">
              <h3>∞</h3>
              <p>{t.hero.passion}</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="floating-badge">⚛️ React</div>
          <div className="floating-badge">☕ Java</div>
          <div className="floating-badge">🟨 JavaScript</div>
          <div className="avatar-wrapper">
            <div className="avatar-ring"></div>
            <div className="avatar-placeholder">
              🧑‍💻
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
