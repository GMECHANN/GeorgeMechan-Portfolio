import { ArrowRight, ArrowUpRight, BriefcaseBusiness, CheckCircle2, Code2, Mail, Send, type LucideIcon } from 'lucide-react';
import type { FormEvent, InvalidEvent } from 'react';
import { profile, socialLinks, type SocialKey } from '../data/profile';
import { Reveal } from '../components/ui/Reveal';
import { useLanguage } from '../i18n/LanguageContext';

type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const socialIcons: Record<SocialKey, LucideIcon> = {
  github: Code2,
  linkedin: BriefcaseBusiness,
  fiverr: BriefcaseBusiness,
  freelancer: BriefcaseBusiness,
  workana: BriefcaseBusiness,
};

export function Contact() {
  const { copy } = useLanguage();
  const contact = copy.contact;
  const showValidation = (message: string) => (event: InvalidEvent<FormControl>) => event.currentTarget.setCustomValidity(message);
  const clearValidation = (event: FormEvent<FormControl>) => event.currentTarget.setCustomValidity('');
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name')).trim();
    const email = String(data.get('email')).trim();
    const projectType = String(data.get('type')).trim();
    const message = String(data.get('message')).trim();
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement;
    if (!name) {
      nameInput.setCustomValidity(contact.validation.name);
      nameInput.reportValidity();
      return;
    }
    if (!message) {
      messageInput.setCustomValidity(contact.validation.message);
      messageInput.reportValidity();
      return;
    }
    const subject = encodeURIComponent(`${contact.inquirySubject}: ${projectType} — ${name}`);
    const body = encodeURIComponent(`${contact.name}: ${name}\n${contact.email}: ${email}\n${contact.projectType}: ${projectType}\n${contact.message}:\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };
  return <><section className="section cta-section"><div className="container"><Reveal className="cta-card"><div><div className="availability"><span />{copy.profile.availability}</div><h2>{contact.ctaTitle}</h2><p>{contact.ctaDescription}</p></div><a className="button light" href="#contact">{contact.letsTalk} <ArrowRight /></a></Reveal></div></section>
  <section className="section contact-section" id="contact"><div className="container contact-grid"><Reveal><span className="eyebrow"><span />{contact.eyebrow}</span><h2>{contact.title}</h2><p>{contact.description}</p><div className="contact-options">{profile.email && <a className="contact-method" href={`mailto:${profile.email}`}><span className="contact-method-icon"><Mail /></span><span className="contact-method-copy"><strong>{contact.email}</strong><small>{profile.email}</small></span><ArrowUpRight className="contact-method-arrow" /></a>}{socialLinks.map((link) => { const Icon = socialIcons[link.key]; return <a className="contact-method" href={link.href} key={link.key} target="_blank" rel="noopener noreferrer"><span className="contact-method-icon"><Icon /></span><span className="contact-method-copy"><strong>{link.label}</strong><small>{contact.openProfile}</small></span><ArrowUpRight className="contact-method-arrow" /></a>; })}</div><div className="response-note"><CheckCircle2 /><span><strong>{contact.openToFreelance}</strong>{contact.disciplines}</span></div></Reveal>
  <Reveal delay={.1}><form className="contact-form" onSubmit={onSubmit}><div className="field-row"><label>{contact.name}<input name="name" required autoComplete="name" placeholder={contact.namePlaceholder} onInvalid={showValidation(contact.validation.name)} onInput={clearValidation} /></label><label>{contact.email}<input name="email" type="email" required autoComplete="email" placeholder={contact.emailPlaceholder} onInvalid={showValidation(contact.validation.email)} onInput={clearValidation} /></label></div><label>{contact.projectType}<select name="type" defaultValue="" required onInvalid={showValidation(contact.validation.type)} onInput={clearValidation}><option value="" disabled>{contact.selectService}</option>{contact.projectTypes.map((type) => <option key={type}>{type}</option>)}</select></label><label>{contact.message}<textarea name="message" required rows={6} placeholder={contact.messagePlaceholder} onInvalid={showValidation(contact.validation.message)} onInput={clearValidation} /></label><button className="button primary" type="submit" aria-describedby="contact-form-help">{contact.sendMessage} <Send /></button><small id="contact-form-help">{contact.formReadyHelp}</small></form></Reveal></div></section></>;
}
