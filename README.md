# George Mechan — Software Developer Portfolio

A premium, responsive portfolio designed to present George Mechan as a software developer across web development, native Android, Python, APIs and data. It includes a conversion-focused home page and detailed case studies for StudyFlow AI and Pronósticos IA.

## Stack

- React + TypeScript + Vite
- React Router with lazy-loaded pages
- Framer Motion for restrained, reduced-motion-aware reveals
- Lucide React icons
- Custom responsive design system with dark and light themes

## Run locally

Node.js 20.19+ or 22.12+ is recommended.

```bash
npm install
npm run dev
```

Open the URL printed by Vite. Production checks:

```bash
npm run lint
npm run build
npm run preview
```

## Project structure

```text
src/
  components/       Reusable layout and UI pieces
  data/             Profile, projects, services, skills and experience
  hooks/            Theme and page metadata behavior
  pages/            Home, dynamic case study and 404 routes
  sections/         Home page sections
  styles/           Design system and responsive layouts
  types/            Shared TypeScript models
public/projects/    Replaceable project artwork and screenshots
```

## Personal data and links

Edit `src/data/profile.ts`. Empty values are deliberately hidden from the interface—no fake links are rendered. Add the real email, GitHub, LinkedIn, Fiverr, Freelancer and Workana URLs there.

The contact form uses a transparent `mailto:` fallback. It becomes active when `profile.email` is filled. It does not claim to send or store messages. It can later be replaced with Formspree, EmailJS or an API in `src/sections/Contact.tsx`.

## Project images

Use optimized WebP images. Existing covers are original generated concept artwork and may be replaced in place.

StudyFlow AI (`public/projects/studyflow/`):

```text
cover.webp
screenshots/onboarding.webp
screenshots/notes.webp
screenshots/ocr-result.webp
screenshots/profile.webp
presentation/onboarding.webp
presentation/notes.webp
presentation/ocr-result.webp
presentation/profile.webp
```

Pronósticos IA (`public/projects/pronosticos/`):

```text
cover.webp
screenshots/dashboard-upcoming-matches.webp
screenshots/match-analysis.webp
screenshots/results-overview.webp
```

Missing screenshots automatically display a styled fallback. Recommended cover ratio is 16:9; use portrait-oriented StudyFlow screenshots and landscape dashboard screenshots. Keep the filenames unchanged to have the site pick them up automatically.

## Add a project

Add an object to `src/data/projects.ts` using the existing `Project` shape. Set `slug`, content, technologies, features, images and case-study sections. The dynamic `/projects/:slug` route requires no new page component. Empty `github` and `demo` fields remain hidden.

## Add technologies or services

- Technologies: edit `src/data/skills.ts`.
- Services: edit `src/data/services.ts`.
- Experience: edit `src/data/experience.ts`.
- Education: edit `src/data/education.ts`.

The UI does not use invented percentages or proficiency labels.

## Deployment

### Vercel

Import the repository, select the Vite preset, keep `npm run build` and `dist`. `vercel.json` provides the SPA rewrite for direct case-study URLs.

### Netlify

Import the repository. `netlify.toml` already configures the build, output folder and SPA fallback.

### GitHub Pages

Push to a repository whose default branch is `main`, then in **Settings → Pages** select **GitHub Actions** as the source. `.github/workflows/deploy.yml` builds with the repository base path, supplies a route fallback and deploys automatically.

For a custom domain, update the production canonical and Open Graph URL in `index.html` after the domain is known.

## SEO and accessibility

The site includes per-route document titles, semantic sections, labels, visible keyboard focus, a skip link, responsive images, reduced-motion support, theme persistence, basic social metadata, robots instructions and an SVG favicon. Add the real canonical URL only after deployment so no URL is invented.
