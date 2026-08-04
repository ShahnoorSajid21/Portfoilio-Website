import { useEffect, useState } from 'react';

export function useHashRoute() {
  const [hash, setHash] = useState(() => location.hash || '');

  useEffect(() => {
    const onHashChange = () => {
      const h = location.hash || '';
      setHash(h);
      const isProject = /^#\/p\//.test(h);
      if (isProject || !h) {
        window.scrollTo(0, 0);
        return;
      }
      requestAnimationFrame(() => {
        const el = document.getElementById(h.slice(1));
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.pageYOffset - 78;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const goHome = (e) => {
    if (e) e.preventDefault();
    location.hash = '';
    setHash('');
    window.scrollTo(0, 0);
  };

  return { hash, goHome };
}
