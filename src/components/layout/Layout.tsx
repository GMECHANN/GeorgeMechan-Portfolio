import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BackToTop } from './BackToTop';
import { useLanguage } from '../../i18n/LanguageContext';

export function Layout() {
  const { copy } = useLanguage();
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) return;
    const timer = window.setTimeout(() => document.querySelector(location.hash)?.scrollIntoView(), 120);
    return () => window.clearTimeout(timer);
  }, [location]);
  return <><a className="skip-link" href="#main">{copy.a11y.skipToContent}</a><Navbar /><main id="main"><Outlet /></main><Footer /><BackToTop /></>;
}
