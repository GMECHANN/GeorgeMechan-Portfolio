import { ArrowLeft, ArrowRight, Check, CodeXml, ExternalLink } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ProjectGallery } from '../components/project/ProjectGallery';
import { ProjectScreenShowcase } from '../components/project/ProjectScreenShowcase';
import { ProjectImage } from '../components/ui/ProjectImage';
import { Reveal } from '../components/ui/Reveal';
import { TechBadge } from '../components/ui/TechBadge';
import { getProject, getProjects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLanguage } from '../i18n/LanguageContext';
import { interpolate } from '../i18n/translations';

export default function ProjectPage() {
  const { language, copy } = useLanguage();
  const { slug = '' } = useParams();
  const projects = getProjects(language);
  const project = getProject(slug, language);
  useDocumentTitle(project ? `${project.title} | George Mechan` : copy.meta.notFoundTitle, project?.shortDescription);
  if (!project) return <Navigate to="/404" replace />;
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];
  const section = copy.caseStudy;

  return <article className="case-study">
    <header className="case-hero section"><div className="container"><Link className="back-link" to="/#projects"><ArrowLeft />{section.backToProjects}</Link><div className="case-title"><span>{project.eyebrow}</span><h1>{project.title}</h1><p>{project.description}</p><div className="badge-list">{project.technologies.map((tech) => <TechBadge key={tech}>{tech}</TechBadge>)}</div>{(project.github || project.demo) && <div className="case-actions">{project.github && <a className="button secondary" href={project.github} target="_blank" rel="noreferrer"><CodeXml />{section.sourceCode}</a>}{project.demo && <a className="button primary" href={project.demo} target="_blank" rel="noreferrer">{section.liveDemo}<ExternalLink /></a>}</div>}</div><div className={`case-cover ${project.visualType}`}><ProjectImage src={project.cover} alt={interpolate(copy.a11y.projectOverview, { title: project.title })} /></div></div></header>
    <div className="container case-body"><aside><span>{section.caseStudy}</span><a href="#overview">{section.overview}</a>{project.presentation && <a href="#real-interface">{section.realInterface}</a>}{project.sections.map((item) => <a key={item.id} href={`#${item.id}`}>{item.title}</a>)}<a href="#features">{section.features}</a><a href="#gallery">{section.gallery}</a></aside><div className="case-content">
      <Reveal><section id="overview"><span className="case-index">{section.overviewIndex}</span><h2>{project.category}</h2><p>{project.description}</p></section></Reveal>
      {project.presentation && <Reveal><ProjectScreenShowcase projectTitle={project.title} images={project.presentation} visualType={project.visualType} /></Reveal>}
      {project.sections.map((item, index) => <Reveal key={item.id}><section id={item.id}><span className="case-index">0{index + 2} / {item.title.toUpperCase()}</span><h2>{item.title}</h2><p>{item.body}</p>{item.id === 'data-pipeline' && project.pipeline && <div className="pipeline">{project.pipeline.map((step, stepIndex) => <div key={step}><span>0{stepIndex + 1}</span><strong>{step}</strong>{stepIndex < project.pipeline!.length - 1 && <ArrowRight />}</div>)}</div>}</section></Reveal>)}
      <Reveal><section id="features"><span className="case-index">{section.featureSet}</span><h2>{section.featureTitle}</h2><div className="feature-grid">{project.features.map((feature) => <div key={feature}><Check />{feature}</div>)}</div></section></Reveal>
      <Reveal><section id="gallery"><span className="case-index">{section.gallery.toUpperCase()}</span><h2>{section.galleryTitle}</h2><p>{section.galleryDescription}</p><ProjectGallery images={project.screenshots} visualType={project.visualType} /></section></Reveal>
    </div></div>
    <div className="container next-project"><span>{section.nextProject}</span><Link to={`/projects/${next.slug}`}><strong>{next.title}</strong><ArrowRight /></Link></div>
  </article>;
}
