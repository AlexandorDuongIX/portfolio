import { useLang } from '../context/LangContext';

export default function About() {
  const { t } = useLang();

  const highlights = [
    { icon: '🎓', title: t.about.h1, desc: t.about.h1d },
    { icon: '🔥', title: t.about.h2, desc: t.about.h2d },
    { icon: '💡', title: t.about.h3, desc: t.about.h3d },
    { icon: '⚡', title: t.about.h4, desc: t.about.h4d },
  ];

  return (
    <section className="section" id="about">
      <div className="section-header reveal">
        <p className="section-label">{t.about.label}</p>
        <h2 className="section-title">{t.about.title}</h2>
        <p className="section-subtitle">{t.about.subtitle}</p>
      </div>

      <div className="about-content">
        <div className="about-text reveal-left">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>

        <div className="about-highlights reveal-right">
          {highlights.map((h, i) => (
            <div className={`highlight-card glass-card stagger-${i + 1}`} key={i}>
              <div className="highlight-icon">{h.icon}</div>
              <h4>{h.title}</h4>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
