import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLanguage } from '../i18n/LanguageContext';

export default function NotFoundPage() { const { copy } = useLanguage(); useDocumentTitle(copy.meta.notFoundTitle); return <section className="not-found section"><div className="container"><span>404</span><h1>{copy.notFound.title}</h1><p>{copy.notFound.description}</p><Link className="button primary" to="/"><ArrowLeft />{copy.notFound.backHome}</Link></div></section>; }
