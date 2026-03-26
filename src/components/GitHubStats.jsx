import { useLang } from '../context/LangContext';

export default function GitHubStats() {
  const { t } = useLang();
  const username = 'AlexandorDuongIX';

  return (
    <section className="section" id="github">
      <div className="section-header reveal">
        <p className="section-label">{t.github.label}</p>
        <h2 className="section-title">{t.github.title}</h2>
        <p className="section-subtitle">{t.github.subtitle}</p>
      </div>

      <div className="github-stats-grid reveal">
        <div className="github-card glass-card">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=6366f1&icon_color=06b6d4&text_color=94a3b8&bg_color=00000000`}
            alt="GitHub Stats"
            loading="lazy"
          />
        </div>
        <div className="github-card glass-card">
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=6366f1&text_color=94a3b8&bg_color=00000000`}
            alt="Top Languages"
            loading="lazy"
          />
        </div>
      </div>

      <div className="github-streak reveal" style={{ marginTop: '1.5rem' }}>
        <div className="github-card glass-card" style={{ textAlign: 'center' }}>
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=6366f1&fire=ec4899&currStreakLabel=06b6d4&sideLabels=94a3b8&currStreakNum=f1f5f9&sideNums=f1f5f9&dates=64748b&background=00000000`}
            alt="GitHub Streak"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
