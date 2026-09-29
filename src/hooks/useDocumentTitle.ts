import { useEffect } from 'react';

export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
      document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description]);
}
