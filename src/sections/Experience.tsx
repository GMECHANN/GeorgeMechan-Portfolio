import { BriefcaseBusiness, GraduationCap, MapPin } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { getEducation } from '../data/education';
import { getExperience } from '../data/experience';
import { useLanguage } from '../i18n/LanguageContext';

export function Experience() {
  const { language, copy } = useLanguage();
  const experience = getExperience(language);
  const education = getEducation(language);
  const section = copy.experience;
  return <section className="section experience-section" id="experience"><div className="container"><Reveal><SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} /></Reveal><div className="experience-layout"><div className="timeline">{experience.map((item) => <Reveal className="timeline-item" key={item.company}><span className="timeline-dot"><BriefcaseBusiness /></span><div className="timeline-card"><div><span>{item.period}</span><span><MapPin />{item.location}</span></div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.description}</p></div></Reveal>)}</div><Reveal className="education-card"><div className="education-icon"><GraduationCap /></div><span>{section.academicEducation}</span><h3>{education.program}</h3><p>{education.institution}</p><strong>{education.period}</strong><small>{education.note}</small></Reveal></div></div></section>;
}
