import type { ProjectScreenshot } from '../../types';
import { ProjectImage } from '../ui/ProjectImage';
import { useLanguage } from '../../i18n/LanguageContext';
import { interpolate } from '../../i18n/translations';
import { BrowserScreenStage } from './BrowserScreenStage';

interface ProjectScreenShowcaseProps {
  projectTitle: string;
  projectSlug: string;
  images: ProjectScreenshot[];
  visualType: 'phone' | 'browser';
}

export function ProjectScreenShowcase({ projectTitle, projectSlug, images, visualType }: ProjectScreenShowcaseProps) {
  const { copy } = useLanguage();
  const section = copy.caseStudy;
  return (
    <section className={`real-screen-showcase ${visualType}`} id="real-interface">
      <span className="case-index">{section.evidenceIndex}</span>
      <h2>{section.evidenceTitle}</h2>
      <p>{interpolate(section.evidenceDescription, { title: projectTitle })}</p>
      {visualType === 'phone' ? (
        <div className="device-stage" aria-label={interpolate(copy.a11y.realScreens, { title: projectTitle })}>
          {images.map((image) => (
            <figure className="screen-device" key={image.src}>
              <div className="device-shell"><ProjectImage src={image.src} alt={image.alt} loading="eager" /></div>
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <BrowserScreenStage projectTitle={projectTitle} projectSlug={projectSlug} images={images} />
      )}
    </section>
  );
}
