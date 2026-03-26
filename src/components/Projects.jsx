import { useLang } from '../context/LangContext';
import { Bike, User, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const { t } = useLang();

  const projects = [
    {
      title: t.projects.bikeTitle,
      role: 'Frontend Developer',
      description: t.projects.bikeDesc,
      tech: ['React', 'Tailwind CSS', 'Shadcn/UI', 'C#', 'PostgreSQL'],
      demo: '#',
      github: '#',
      icon: <Bike size={48} color="var(--primary-color)" />,
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="section-header reveal">
        <p className="section-label">{t.projects.label}</p>
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="section-subtitle">{t.projects.subtitle}</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card reveal" key={i}>
            <div className="project-image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {project.icon}
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-role" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><User size={16} /> {project.role}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, j) => (
                  <span key={j}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Github size={18} /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
