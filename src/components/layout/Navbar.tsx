import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../i18n/LanguageContext';

const sectionIds = ['about', 'projects', 'services', 'experience', 'skills', 'contact'] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, copy } = useLanguage();
  const location = useLocation();
  useEffect(() => { const onScroll = () => setScrolled(scrollY > 20); onScroll(); addEventListener('scroll', onScroll, { passive: true }); return () => removeEventListener('scroll', onScroll); }, []);
  const href = (id: string) => location.pathname === '/' ? `#${id}` : `${import.meta.env.BASE_URL}#${id}`;

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container nav-inner" aria-label={copy.a11y.mainNavigation}>
        <Link className="wordmark" to="/" aria-label={copy.a11y.home}><span>GM</span><span className="wordmark-text">George Mechan</span></Link>
        <div className="nav-links">
          {sectionIds.map((id) => <a key={id} href={href(id)}>{copy.nav[id]}</a>)}
        </div>
        <div className="nav-actions">
          <div className="language-switcher" role="group" aria-label={copy.a11y.languageSelector}>
            <button type="button" className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} aria-pressed={language === 'en'} aria-label={copy.a11y.selectEnglish}>EN</button>
            <span aria-hidden="true">/</span>
            <button type="button" className={language === 'es' ? 'active' : ''} onClick={() => setLanguage('es')} aria-pressed={language === 'es'} aria-label={copy.a11y.selectSpanish}>ES</button>
          </div>
          <button type="button" className="icon-button" onClick={toggleTheme} aria-label={theme === 'dark' ? copy.a11y.switchToLight : copy.a11y.switchToDark}>{theme === 'dark' ? <Sun /> : <Moon />}</button>
          <button type="button" className="icon-button menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={copy.a11y.toggleNavigation}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && <div className="mobile-menu" id="mobile-menu">{sectionIds.map((id) => <a key={id} href={href(id)} onClick={() => setOpen(false)}>{copy.nav[id]}<span>↗</span></a>)}</div>}
      </nav>
    </header>
  );
}
