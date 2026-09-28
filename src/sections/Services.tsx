import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { getServices } from '../data/services';
import { useLanguage } from '../i18n/LanguageContext';

export function Services() {
  const { language, copy } = useLanguage();
  const services = getServices(language);
  const section = copy.services;
  return <section className="section" id="services"><div className="container"><Reveal><SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} /></Reveal><div className="services-grid">{services.map((service, index) => <Reveal key={service.title} delay={(index % 3) * .05}><article className="service-card"><div className="service-top"><span>0{index + 1}</span><service.icon /></div><h3>{service.title}</h3><p>{service.description}</p><div className="service-tech">{service.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul><a href="#contact">{section.discuss} <ArrowRight /></a></article></Reveal>)}</div></div></section>;
}
