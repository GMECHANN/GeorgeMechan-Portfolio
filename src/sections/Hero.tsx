import { ArrowDown, ArrowRight, Code2, Database, Globe2, Smartphone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { profile, socialLinks } from '../data/profile';
import { useLanguage } from '../i18n/LanguageContext';

function HeroVisual() {
  const reduced = useReducedMotion();
  const { copy } = useLanguage();
  const hero = copy.hero;
  return (
    <motion.div className="hero-visual" initial={reduced ? false : { opacity: 0, scale: .96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .8, delay: .2 }} aria-label={hero.visualLabel}>
      <div className="workspace-bar"><i /><i /><i /><span>solution.ts</span><em>{hero.live}</em></div>
      <div className="workspace-body">
        <div className="code-pane">
          <div><b>01</b><span className="purple">const</span> {hero.codeDeveloper} = {'{'}</div>
          <div><b>02</b>&nbsp;&nbsp;{hero.codeName}: <span className="green">"George Mechan"</span>,</div>
          <div><b>03</b>&nbsp;&nbsp;{hero.codeBuildsLabel}: [</div>
          <div><b>04</b>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"{hero.codeBuilds[0]}"</span>, <span className="green">"{hero.codeBuilds[1]}"</span>,</div>
          <div><b>05</b>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"{hero.codeBuilds[2]}"</span></div>
          <div><b>06</b>&nbsp;&nbsp;],</div>
          <div><b>07</b>&nbsp;&nbsp;{hero.codeAvailable}: <span className="cyan">true</span></div>
          <div><b>08</b>{'};'}</div>
        </div>
        <div className="system-map">
          <div className="system-node"><Globe2 /><span>React</span><small>{hero.interface}</small></div>
          <span className="connector">→</span>
          <div className="system-node active"><Code2 /><span>REST API</span><small>JSON</small></div>
          <span className="connector">→</span>
          <div className="system-node"><Database /><span>Python</span><small>{hero.data}</small></div>
          <span className="connector mobile-arrow">↘</span>
          <div className="system-node mobile-node"><Smartphone /><span>Android</span><small>Kotlin</small></div>
        </div>
      </div>
      <div className="terminal-line"><span>$</span> {hero.status} <strong>{hero.available}</strong><i /></div>
    </motion.div>
  );
}

export function Hero() {
  const { copy } = useLanguage();
  const hero = copy.hero;
  return (
    <section className="hero section" id="home">
      <div className="hero-glow" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability"><span />{copy.profile.availability}</div>
          <p className="hero-kicker">{profile.name} · {copy.profile.title}</p>
          <h1>{hero.headlineBefore}<span>{hero.headlineAccent}</span>{hero.headlineAfter}</h1>
          <p className="hero-lede">{hero.introduction}</p>
          <div className="focus-badges">{hero.focus.map((item) => <span key={item}>{item}</span>)}</div>
          <div className="hero-actions"><a className="button primary" href="#projects">{hero.viewWork} <ArrowRight /></a><a className="button secondary" href="#contact">{hero.letsTalk}</a></div>
          {socialLinks.length > 0 && <div className="text-links">{socialLinks.filter(({ label }) => ['GitHub', 'LinkedIn'].includes(label)).map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}</div>}
        </div>
        <HeroVisual />
      </div>
      <a className="scroll-cue" href="#about" aria-label={hero.scrollToAbout}><span>{hero.explore}</span><ArrowDown /></a>
    </section>
  );
}
