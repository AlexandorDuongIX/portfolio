import { useState } from 'react';
import { useLang } from '../context/LangContext';
import { Mail, Phone, Briefcase, Github, Facebook, Send } from 'lucide-react';

const contactLinks = [
  {
    icon: <Mail size={24} />,
    titleKey: 'email',
    value: 'Trankhanhduongwangyuan1322@gmail.com',
    href: 'mailto:Trankhanhduongwangyuan1322@gmail.com',
  },
  {
    icon: <Phone size={24} />,
    titleKey: 'phone',
    value: '0911 245 428',
    href: 'tel:0911245428',
  },
  {
    icon: <Briefcase size={24} />,
    titleKey: 'LinkedIn',
    value: 'Trần Khánh Dương',
    href: 'https://linkedin.com/in/alexandors-duong-i-tran-khanh-duong-7a04a73a1',
  },
  {
    icon: <Github size={24} />,
    titleKey: 'GitHub',
    value: 'AlexandorDuongIX',
    href: 'https://github.com/AlexandorDuongIX',
  },
  {
    icon: <Facebook size={24} />,
    titleKey: 'Facebook',
    value: 'Khánh Dương',
    href: 'https://www.facebook.com/ban.duong.kha.coc',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { t } = useLang();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailto = `mailto:Trankhanhduongwangyuan1322@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(
      `${t.contact.name}: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.open(mailto);
  };

  const getTitle = (key) => {
    if (key === 'email') return 'Email';
    if (key === 'phone') return t.contact.phone;
    return key;
  };

  return (
    <section className="section" id="contact">
      <div className="section-header reveal">
        <p className="section-label">{t.contact.label}</p>
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-subtitle">{t.contact.subtitle}</p>
      </div>

      <div className="contact-content">
        <div className="contact-info reveal-left">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>{t.contact.heading} <Send size={24} color="var(--primary-color)" /></h3>
          <p>{t.contact.description}</p>
          <div className="contact-links">
            {contactLinks.map((link, i) => (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                key={i}
              >
                <div className="contact-link-icon">{link.icon}</div>
                <div className="contact-link-text">
                  <h4>{getTitle(link.titleKey)}</h4>
                  <p>{link.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form glass-card reveal-right">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={24} color="var(--primary-color)" /> {t.contact.formTitle}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                placeholder={t.contact.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contact.email}</label>
              <input
                type="email"
                id="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contact.message}</label>
              <textarea
                id="message"
                placeholder={t.contact.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              {t.contact.send} <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
