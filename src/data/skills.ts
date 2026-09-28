import type { SkillGroup } from '../types';
import { translations, type Language } from '../i18n/translations';

const skillSets = [
  ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Responsive Web Design', 'REST APIs'],
  ['Python', 'FastAPI', 'Beautiful Soup', 'Selenium', 'Pandas', 'JSON', 'Data Processing', 'Web Scraping', 'Automation', 'Excel / CSV'],
  ['Kotlin', 'Android', 'Android Studio', 'Jetpack Compose', 'Gradle', 'OCR', 'Local Storage'],
  ['SQL', 'Git', 'GitHub', 'VS Code', 'Android Studio', 'Eclipse'],
];

const ecosystemValues = [
  'React · TypeScript · HTML · CSS',
  'REST · JSON',
  'Python · FastAPI · Pandas',
  'SQL',
  'Kotlin · Android · Compose',
];

export function getSkillGroups(language: Language): SkillGroup[] {
  return translations[language].skills.groups.map((group, index) => ({ ...group, skills: skillSets[index] }));
}

export function getEcosystem(language: Language) {
  return translations[language].skills.ecosystemLabels.map((label, index) => ({ label, value: ecosystemValues[index] }));
}
