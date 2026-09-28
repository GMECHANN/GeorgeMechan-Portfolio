import { Check, Code2, Globe2 } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { TechBadge } from '../components/ui/TechBadge';
import { useLanguage } from '../i18n/LanguageContext';

const stack = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'REST APIs', 'Responsive Design', 'Git'];

export function WebDevelopment() {
  const { copy } = useLanguage();
  const web = copy.webDevelopment;
  return <section className="section web-section"><div className="container web-grid">
    <Reveal className="browser-mockup"><div className="browser-top"><i /><i /><i /><span>georgemechan.dev / {web.mockupPath}</span></div><div className="browser-canvas"><div className="browser-nav"><b>GM.</b><span>{web.mockupNav}</span></div><div className="browser-hero"><small>{web.mockupEyebrow}</small><h3>{web.mockupTitle}<br /><em>{web.mockupAccent}</em></h3><span className="mini-button">{web.mockupButton}</span></div><div className="browser-panels"><div><Globe2 /><span>{web.responsive.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</span></div><div><Code2 /><span>{web.clean.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</span></div></div></div></Reveal>
    <Reveal delay={.1}><SectionHeading eyebrow={web.eyebrow} title={web.title} description={web.description} /><div className="badge-list">{stack.map((item) => <TechBadge key={item}>{item}</TechBadge>)}</div><div className="check-grid">{web.services.map((item) => <span key={item}><Check />{item}</span>)}</div><a className="button secondary" href="#contact">{web.discuss}</a></Reveal>
  </div></section>;
}
