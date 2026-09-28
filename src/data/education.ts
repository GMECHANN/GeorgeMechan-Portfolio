import { translations, type Language } from '../i18n/translations';

export function getEducation(language: Language) {
  const copy = translations[language].experience;
  return {
    institution: 'Universidad Tecnológica del Perú',
    program: copy.program,
    period: copy.educationPeriod,
    note: copy.educationNote,
  };
}
