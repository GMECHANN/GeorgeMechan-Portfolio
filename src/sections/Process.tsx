import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

export function Process() {
  const { copy } = useLanguage();
  const process = copy.process;
  return <section className="section process-section"><div className="container"><Reveal><SectionHeading eyebrow={process.eyebrow} title={process.title} align="center" /></Reveal><div className="process-flow">{process.steps.map((step, index) => <Reveal key={step.title} className="process-step" delay={index * .05}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></Reveal>)}</div></div></section>;
}
