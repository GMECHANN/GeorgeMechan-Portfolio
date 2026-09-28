import { translations, type Language } from '../i18n/translations';

const companies = ['POLICE PROTHECTOR S.A.C', 'Multiservicio Integral GEOKA E.I.R.L.'];

export function getExperience(language: Language) {
  return translations[language].experience.items.map((item, index) => ({ ...item, company: companies[index] }));
}
