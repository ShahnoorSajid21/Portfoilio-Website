import { useState } from 'react';
import { assetUrl } from '../assetUrl';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard?.writeText('shahnoorsajid21@gmail.com')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <h2 className="footer-heading">
              THE BEST WAY TO PREDICT THE FUTURE IS TO INVENT IT.
            </h2>
            <p className="footer-touch">
              Get in touch — <a href="mailto:shahnoorsajid21@gmail.com" onClick={handleEmailClick}>{copied ? 'Copied to clipboard!' : 'shahnoorsajid21@gmail.com'}</a>
            </p>
            <div className="footer-links">
              <a
                href="https://www.linkedin.com/in/muhammad-shahnoor-sajid"
                target="_blank"
                rel="noopener"
                className="footer-link-btn"
              >
                LinkedIn ↗
              </a>
              <a href="resume.pdf" download="Muhammad-Shahnoor-Sajid-CV.pdf" className="footer-link-btn">
                CV ↓
              </a>
            </div>
          </div>
          <div className="footer-art">
            <img
              src={assetUrl('assets/build-glitch.jpg')}
              alt="Retro CRT-glitch art: the word BUILD in white over a corrupted orange signal texture"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="footer-meta">
          <span>Muhammad Shahnoor Sajid</span>
          <span>Islamabad, Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
