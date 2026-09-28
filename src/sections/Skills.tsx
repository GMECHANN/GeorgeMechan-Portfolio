import { ArrowDown } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { getEcosystem, getSkillGroups } from '../data/skills';
import { useLanguage } from '../i18n/LanguageContext';

export function Skills() {
  const { language, copy } = useLanguage();
  const ecosystem = getEcosystem(language);
  const skillGroups = getSkillGroups(language);
  const section = copy.skills;
  return <section className="section skills-section" id="skills"><div className="container"><Reveal><SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} /></Reveal><div className="ecosystem">{ecosystem.map((item, index) => <div key={item.label} className="ecosystem-item"><span>{item.label}</span><strong>{item.value}</strong>{index < ecosystem.length - 1 && <ArrowDown />}</div>)}</div><div className="skill-grid">{skillGroups.map((group) => <Reveal key={group.title}><article className="skill-group"><span>{group.title}</span><p>{group.description}</p><div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article></Reveal>)}</div></div></section>;
}
