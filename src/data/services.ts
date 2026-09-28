import { Bot, Braces, Bug, DatabaseZap, Globe2, Smartphone } from 'lucide-react';
import type { Service } from '../types';
import { translations, type Language } from '../i18n/translations';

const serviceDefinitions = [
  { technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'], icon: Globe2 },
  { technologies: ['Kotlin', 'Android', 'Jetpack Compose'], icon: Smartphone },
  { technologies: ['Python', 'JSON', 'Excel / CSV'], icon: Braces },
  { technologies: ['Python', 'Beautiful Soup', 'Selenium', 'Pandas'], icon: DatabaseZap },
  { technologies: ['REST APIs', 'JSON', 'Python', 'JavaScript'], icon: Bot },
  { technologies: ['Web', 'Android', 'APIs', 'Data'], icon: Bug },
];

export function getServices(language: Language): Service[] {
  return serviceDefinitions.map((definition, index) => ({ ...definition, ...translations[language].services.items[index], deliverables: [...translations[language].services.items[index].deliverables] }));
}
