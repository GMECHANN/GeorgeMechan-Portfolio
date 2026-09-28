import { Blocks, Bot, Braces, ChartNoAxesCombined, Globe2, Smartphone } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

const icons = [Globe2, Smartphone, Braces, Blocks, ChartNoAxesCombined, Bot];

export function About() {
  const { copy } = useLanguage();
  const about = copy.about;
  return <section className="section" id="about"><div className="container about-grid">
    <Reveal><SectionHeading eyebrow={about.eyebrow} title={about.title} /><div className="about-copy">{about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></Reveal>
    <Reveal className="area-grid" delay={.1}>{about.areas.map((label, index) => { const Icon = icons[index]; return <div className="area-card" key={label}><span>0{index + 1}</span><Icon /><strong>{label}</strong></div>; })}</Reveal>
  </div></section>;
}
