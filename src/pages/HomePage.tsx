import { About } from '../sections/About';
import { Contact } from '../sections/Contact';
import { Experience } from '../sections/Experience';
import { Hero } from '../sections/Hero';
import { Process } from '../sections/Process';
import { Projects } from '../sections/Projects';
import { Services } from '../sections/Services';
import { Skills } from '../sections/Skills';
import { WebDevelopment } from '../sections/WebDevelopment';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLanguage } from '../i18n/LanguageContext';

export default function HomePage() {
  const { copy } = useLanguage();
  useDocumentTitle(copy.meta.homeTitle, copy.meta.homeDescription);
  return <><Hero /><About /><Projects /><WebDevelopment /><Services /><Experience /><Skills /><Process /><Contact /></>;
}
