import { useState } from 'react';
import { ImageIcon } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { interpolate } from '../../i18n/translations';

export function ProjectImage({ src, alt, className = '', loading = 'lazy' }: { src: string; alt: string; className?: string; loading?: 'eager' | 'lazy' }) {
  const [failed, setFailed] = useState(false);
  const { copy } = useLanguage();
  if (failed) return <div className={`image-placeholder ${className}`} role="img" aria-label={interpolate(copy.a11y.imagePlaceholder, { alt })}><ImageIcon aria-hidden="true" /><span>{copy.caseStudy.screenshotComingSoon}</span></div>;
  return <img className={className} src={src} alt={alt} loading={loading} decoding="async" onError={() => setFailed(true)} />;
}
