import { useEffect, useState } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Connect from './components/Connect';
import Footer from './components/Footer';
import { PROJECTS } from './data/content';
import { useHashRoute } from './hooks/useHashRoute';
import { useReveal } from './hooks/useReveal';

export default function App() {
  const { hash, goHome } = useHashRoute();
  const [menuOpen, setMenuOpen] = useState(false);

  const match = hash.match(/^#\/p\/(\w+)/);
  const project = match ? PROJECTS.find((p) => p.id === match[1]) : null;

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((v) => !v);
  const onOpenProject = () => setMenuOpen(false);

  useReveal([hash]);

  // While the mobile sheet is open, close it on Escape and stop the page
  // behind it from scrolling.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <div className="page">
      <a href="#top" className="skip-link">Skip to content</a>
      <div aria-hidden="true" className="mat-bg" />

      <Header
        menuOpen={menuOpen}
        onToggleMenu={toggleMenu}
        onCloseMenu={closeMenu}
        goHome={goHome}
      />

      <MobileMenu open={menuOpen} onCloseMenu={closeMenu} />

      <main id="top">
        {project ? (
          <ProjectDetail project={project} goHome={goHome} />
        ) : (
          <>
            <Home onOpenProject={onOpenProject} />
            <Connect />
          </>
        )}
      </main>

      {!project && <Footer />}
    </div>
  );
}
