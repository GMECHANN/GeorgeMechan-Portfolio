import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export function BackToTop() {
  const { copy } = useLanguage();
  const [visible, setVisible] = useState(false);
  useEffect(() => { const update = () => setVisible(scrollY > 650); addEventListener('scroll', update, { passive: true }); return () => removeEventListener('scroll', update); }, []);
  return <button className={`back-top ${visible ? 'visible' : ''}`} onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} aria-label={copy.a11y.backToTop}><ArrowUp /></button>;
}
