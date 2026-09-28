import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { useLanguage } from './i18n/LanguageContext';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  const { copy } = useLanguage();
  const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '');
  return <BrowserRouter basename={basename}><Suspense fallback={<div className="route-loader" role="status"><span />{copy.loading}</div>}><Routes><Route element={<Layout />}><Route index element={<HomePage />} /><Route path="projects/:slug" element={<ProjectPage />} /><Route path="404" element={<NotFoundPage />} /><Route path="*" element={<NotFoundPage />} /></Route></Routes></Suspense></BrowserRouter>;
}
