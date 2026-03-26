import { useLang } from '../context/LangContext';

export default function Education() {
  const { t } = useLang();

  return (
    <section className="section" id="education">
      <div className="section-header reveal">
        <p className="section-label">{t.education.label}</p>
        <h2 className="section-title">{t.education.title}</h2>
        <p className="section-subtitle">{t.education.subtitle}</p>
      </div>

      <div className="education-card glass-card reveal">
        <div className="edu-header">
          <div>
            <h3 className="edu-school">🏫 FPT University</h3>
            <p className="edu-major">{t.education.major}</p>
          </div>
          <span className="edu-badge">2023 — 2027</span>
        </div>

        <div className="edu-details">
          <div className="edu-detail">
            <span className="edu-detail-icon">📊</span>
            <span>GPA: 2.5 / 4.0</span>
          </div>
          <div className="edu-detail">
            <span className="edu-detail-icon">📍</span>
            <span>Việt Nam</span>
          </div>
          <div className="edu-detail">
            <span className="edu-detail-icon">📚</span>
            <span>{t.education.studying}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
