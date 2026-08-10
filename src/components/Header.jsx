import { NAV_ITEMS } from '../data/content';
import { assetUrl } from '../assetUrl';

export default function Header({ menuOpen, onToggleMenu, onCloseMenu, goHome }) {
  const menuLabel = menuOpen ? 'Close menu' : 'Open menu';

  return (
    <header className="header">
      <div className="header-inner">
        <button
          className={`burger${menuOpen ? ' open' : ''}`}
          onClick={onToggleMenu}
          aria-label={menuLabel}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          title={menuLabel}
        >
          <span className="top" />
          <span className="bottom" />
        </button>

        <a href="#top" onClick={goHome} className="logo-link">
          <img src={assetUrl('assets/name-logo.png')} alt="Muhammad Shahnoor Sajid" />
        </a>

        <nav className="desktop-nav">
          {NAV_ITEMS.map((n) => (
            <a key={n.href} href={n.href} onClick={onCloseMenu} className="nav-chip">
              <span className="num">{n.num}</span>{n.label}
            </a>
          ))}
        </nav>

        <span className="header-spacer" />
        <a
          href="resume.pdf"
          download="Muhammad-Shahnoor-Sajid-CV.pdf"
          className="cv-button"
        >
          Download CV ↓
        </a>
      </div>
    </header>
  );
}
