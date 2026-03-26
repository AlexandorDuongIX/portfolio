import { useLang } from '../context/LangContext';

const socials = [
  { icon: '🐙', href: 'https://github.com/AlexandorDuongIX', label: 'GitHub' },
  {
    icon: '💼',
    href: 'https://linkedin.com/in/alexandors-duong-i-tran-khanh-duong-7a04a73a1',
    label: 'LinkedIn',
  },
  { icon: '📘', href: 'https://www.facebook.com/ban.duong.kha.coc', label: 'Facebook' },
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
      <p>
        © 2026 Trần Khánh Dương. {t.footer.madeWith} <span className="heart">❤️</span> &
        React
      </p>
    </footer>
  );
}
