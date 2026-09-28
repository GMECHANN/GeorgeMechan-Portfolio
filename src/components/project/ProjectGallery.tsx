import type { ProjectScreenshot } from '../../types';
import { ProjectImage } from '../ui/ProjectImage';
import { Maximize2 } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { interpolate } from '../../i18n/translations';

interface ProjectGalleryProps {
  images: ProjectScreenshot[];
  visualType: 'phone' | 'browser';
}

export function ProjectGallery({ images, visualType }: ProjectGalleryProps) {
  const { copy } = useLanguage();
  return (
    <div className={`gallery-grid ${visualType}`} aria-label={copy.a11y.projectGallery}>
      {images.map((image, index) => (
        <figure className="gallery-item" key={image.src}>
          <a className="gallery-image-link" href={image.src} target="_blank" rel="noreferrer" aria-label={interpolate(copy.a11y.openFullSize, { label: image.label })}>
            <ProjectImage src={image.src} alt={image.alt} />
            <span><Maximize2 />{copy.caseStudy.viewFullScreen}</span>
          </a>
          <figcaption>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {image.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
