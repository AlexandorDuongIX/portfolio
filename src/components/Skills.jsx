import { useLang } from '../context/LangContext';
import { Terminal, Layers, Wrench, BrainCircuit } from 'lucide-react';

export default function Skills() {
  const { t } = useLang();

  const skillCategories = [
    {
      icon: <Terminal size={24} />,
      title: t.skills.lang,
      skills: [
        { name: 'Java', level: 80 },
        { name: 'JavaScript', level: 70 },
      ],
    },
    {
      icon: <Layers size={24} />,
      title: t.skills.frameworks,
      skills: [
        { name: 'React', level: 75 },
        { name: 'Vue.js', level: 50 },
        { name: 'Node.js', level: 55 },
      ],
    },
    {
      icon: <Wrench size={24} />,
      title: t.skills.tools,
      type: 'tags',
      tags: ['Git', 'GitHub', 'Docker', 'VS Code', 'IntelliJ IDEA', 'PostgreSQL', 'SQL Server', 'Tailwind CSS'],
    },
    {
      icon: <BrainCircuit size={24} />,
      title: t.skills.soft,
      skills: [
        { name: t.skills.learning, level: 80 },
        { name: t.skills.teamwork, level: 75 },
        { name: t.skills.problemSolving, level: 70 },
      ],
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="section-header reveal">
        <p className="section-label">{t.skills.label}</p>
        <h2 className="section-title">{t.skills.title}</h2>
        <p className="section-subtitle">{t.skills.subtitle}</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div className={`skill-category glass-card reveal stagger-${i + 1}`} key={i}>
            <h3 className="skill-category-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {cat.icon} {cat.title}
            </h3>

            {cat.type === 'tags' ? (
              <div className="tech-tags">
                {cat.tags.map((tag, j) => (
                  <span className="tech-tag" key={j}>{tag}</span>
                ))}
              </div>
            ) : (
              cat.skills.map((skill, j) => (
                <div className="skill-item" key={j}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" data-width={skill.level}></div>
                  </div>
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
