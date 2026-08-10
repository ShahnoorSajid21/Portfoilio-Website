import { NAV_ITEMS } from '../data/content';

export default function MobileMenu({ open, onCloseMenu }) {
  return (
    <div className="mobile-menu" id="mobile-menu" hidden={!open}>
      {NAV_ITEMS.map((n) => (
        <a key={n.href} href={n.href} onClick={onCloseMenu} className="mobile-link">
          {n.label}<span className="num">{n.num}</span>
        </a>
      ))}
      <a href="resume.pdf" download="Muhammad-Shahnoor-Sajid-CV.pdf" className="mobile-cv">
        Download CV
      </a>
      <a href="mailto:shahnoorsajid21@gmail.com" className="mobile-email">
        Email me
      </a>
      <p className="mobile-note">
        Islamabad, Pakistan.
      </p>
    </div>
  );
}
