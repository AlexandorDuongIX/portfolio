import { useLang } from '../context/LangContext';
import { Heart } from 'lucide-react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub size={20} />, href: 'https://github.com/AlexandorDuongIX', label: 'GitHub' },
  {
    icon: <FaLinkedin size={20} />,
    href: 'https://linkedin.com/in/alexandors-duong-i-tran-khanh-duong-7a04a73a1',
    label: 'LinkedIn',
  },
  { icon: <FaFacebook size={20} />, href: 'https://www.facebook.com/ban.duong.kha.coc', label: 'Facebook' },
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="footer-socials">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label={s.label}
          >
            {s.icon}
          </a>
        ))}
      </div>
      <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
        © 2026 Trần Khánh Dương. {t.footer.madeWith} <Heart size={16} fill="var(--primary-color)" color="var(--primary-color)" className="heart" /> &
        React
      </p>
    </footer>
  );
}
