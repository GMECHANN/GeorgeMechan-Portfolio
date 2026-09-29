import type { Project, ProjectScreenshot } from '../types';
import { translations, type Language, type ProjectSlug } from '../i18n/translations';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

interface ProjectDefinition {
  slug: ProjectSlug;
  title: string;
  technologies: string[];
  cover: string;
  screenshots: string[];
  presentation: string[];
  featuredMedia: 'cover' | 'screens';
  visualType: 'phone' | 'browser';
  github: string;
  demo: string;
}

const projectDefinitions: ProjectDefinition[] = [
  {
    slug: 'studyflow',
    title: 'StudyFlow AI',
    technologies: ['Kotlin', 'Android', 'Android Studio', 'Jetpack Compose', 'Gradle', 'OCR', 'Local Storage', 'Git'],
    cover: asset('/projects/studyflow/cover.webp'),
    screenshots: [
      asset('/projects/studyflow/screenshots/onboarding.webp'),
      asset('/projects/studyflow/screenshots/notes.webp'),
      asset('/projects/studyflow/screenshots/ocr-result.webp'),
      asset('/projects/studyflow/screenshots/profile.webp'),
    ],
    presentation: [
      asset('/projects/studyflow/presentation/notes.webp'),
      asset('/projects/studyflow/presentation/ocr-result.webp'),
      asset('/projects/studyflow/presentation/profile.webp'),
    ],
    featuredMedia: 'cover',
    visualType: 'phone',
    github: '',
    demo: '',
  },
  {
    slug: 'pronosticos-ia',
    title: 'Pronósticos IA',
    technologies: ['Python', 'APIs', 'JSON', 'Data Processing', 'Statistical Models', 'Machine Learning', 'HTML', 'CSS', 'JavaScript'],
    cover: asset('/projects/pronosticos/cover.webp'),
    screenshots: [
      asset('/projects/pronosticos/screenshots/dashboard-upcoming-matches.webp'),
      asset('/projects/pronosticos/screenshots/match-analysis.webp'),
      asset('/projects/pronosticos/screenshots/results-overview.webp'),
    ],
    presentation: [
      asset('/projects/pronosticos/screenshots/dashboard-upcoming-matches.webp'),
      asset('/projects/pronosticos/screenshots/match-analysis.webp'),
      asset('/projects/pronosticos/screenshots/results-overview.webp'),
    ],
    featuredMedia: 'cover',
    visualType: 'browser',
    github: '',
    demo: '',
  },
  {
    slug: 'web-data-extractor',
    title: 'Web Data Extractor',
    technologies: ['Python', 'Streamlit', 'BeautifulSoup', 'Pandas', 'OpenPyXL', 'HTML/CSS', 'Git', 'GitHub'],
    cover: asset('/projects/web-data-extractor/cover.png'),
    screenshots: [
      asset('/projects/web-data-extractor/screenshots/main-interface.png'),
      asset('/projects/web-data-extractor/screenshots/website-analysis.png'),
      asset('/projects/web-data-extractor/screenshots/extraction-results.png'),
    ],
    presentation: [
      asset('/projects/web-data-extractor/screenshots/main-interface.png'),
      asset('/projects/web-data-extractor/screenshots/website-analysis.png'),
      asset('/projects/web-data-extractor/screenshots/extraction-results.png'),
    ],
    featuredMedia: 'screens',
    visualType: 'browser',
    github: 'https://github.com/GMECHANN/WebDataExtractor',
    demo: '',
  },
];

function localizeImages(paths: string[], copy: readonly { alt: string; label: string }[]): ProjectScreenshot[] {
  return paths.map((src, index) => ({ src, ...copy[index] }));
}

export function getProjects(language: Language): Project[] {
  return projectDefinitions.map((definition) => {
    const content = translations[language].projects[definition.slug];
    return {
      ...definition,
      eyebrow: content.eyebrow,
      category: content.category,
      shortDescription: content.shortDescription,
      description: content.description,
      features: [...content.features],
      screenshots: localizeImages(definition.screenshots, content.screenshots),
      presentation: localizeImages(definition.presentation, content.presentation),
      sections: content.sections.map((section) => ({ ...section })),
      pipeline: 'pipeline' in content ? [...content.pipeline] : undefined,
    };
  });
}

export const getProject = (slug: string, language: Language) => getProjects(language).find((project) => project.slug === slug);
