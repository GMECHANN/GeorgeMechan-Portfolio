import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectImage } from '../components/ui/ProjectImage';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { TechBadge } from '../components/ui/TechBadge';
import { getProjects } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

export function Projects() {
  const { language, copy } = useLanguage();
  const projects = getProjects(language);
  const section = copy.projectsSection;
  return <section className="section projects-section" id="projects"><div className="container">
    <Reveal><SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} /></Reveal>
    <div className="project-list">{projects.map((project, index) => <Reveal key={project.slug}>
      <article className={`project-showcase ${index % 2 ? 'reverse' : ''}`}>
        <Link to={`/projects/${project.slug}`} className={`project-media ${project.visualType}`} aria-label={copy.a11y.viewCaseStudy.replace('{title}', project.title)}><ProjectImage src={project.cover} alt={copy.a11y.projectCover.replace('{title}', project.title)} /><span className="media-action"><ArrowUpRight /></span></Link>
        <div className="project-content"><span className="project-number">{section.projectLabel} / 0{index + 1}</span><p className="eyebrow-text">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.shortDescription}</p><div className="badge-list">{project.technologies.slice(0, 6).map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div><ul>{project.features.slice(0, 4).map((feature) => <li key={feature}>{feature}</li>)}</ul><Link className="case-link" to={`/projects/${project.slug}`}>{section.exploreCaseStudy} <ArrowUpRight /></Link></div>
      </article>
    </Reveal>)}</div>
  </div></section>;
}
