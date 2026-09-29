import type { ProjectScreenshot } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';
import { interpolate } from '../../i18n/translations';
import { ProjectImage } from '../ui/ProjectImage';

interface BrowserScreenStageProps {
  projectTitle: string;
  projectSlug: string;
  images: ProjectScreenshot[];
  compact?: boolean;
}

export function BrowserScreenStage({ projectTitle, projectSlug, images, compact = false }: BrowserScreenStageProps) {
  const { copy } = useLanguage();
  return (
    <div className={`browser-stage ${compact ? 'project-card-stage' : ''}`} aria-label={interpolate(copy.a11y.realScreens, { title: projectTitle })}>
      {images.map((image) => (
        <figure className="browser-shot" key={image.src}>
          <div className="browser-frame">
            <div className="browser-chrome" aria-hidden="true"><i /><i /><i /><span>{interpolate(copy.caseStudy.realInterfacePath, { slug: projectSlug })}</span></div>
            <ProjectImage src={image.src} alt={image.alt} loading="eager" />
          </div>
          <figcaption>{image.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}
