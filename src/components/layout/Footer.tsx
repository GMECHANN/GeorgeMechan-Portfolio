import { BriefcaseBusiness, Code2, Mail, type LucideIcon } from 'lucide-react';
import { profile, socialLinks } from '../../data/profile';
import { useLanguage } from '../../i18n/LanguageContext';

export function Footer() {
  const { copy } = useLanguage();
  const home = import.meta.env.BASE_URL;
  const footerLinks: Array<{ label: string; href: string; icon: LucideIcon; external?: boolean }> = [
    ...(profile.email ? [{ label: copy.contact.email, href: `mailto:${profile.email}`, icon: Mail }] : []),
    ...socialLinks
      .filter((link) => link.key === 'linkedin' || link.key === 'github')
      .map((link) => ({ ...link, icon: link.key === 'linkedin' ? BriefcaseBusiness : Code2, external: true })),
  ];
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><a className="wordmark" href={home}><span>GM</span><span className="wordmark-text">{profile.name}</span></a><p>{copy.profile.title}<br />{copy.footer.disciplines}</p></div>
        <div><strong>{copy.footer.navigation}</strong><a href={`${home}#projects`}>{copy.footer.projects}</a><a href={`${home}#services`}>{copy.footer.services}</a><a href={`${home}#contact`}>{copy.footer.contact}</a></div>
        {footerLinks.length > 0 && <div className="footer-contact-links"><strong>{copy.footer.connect}</strong>{footerLinks.map((link) => <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined}><link.icon />{link.label}</a>)}</div>}
      </div>
      <div className="container copyright"><span>© {new Date().getFullYear()} George Mechan</span><span>{copy.footer.builtInPeru}</span></div>
    </footer>
  );
}
