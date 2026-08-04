import { useLayoutEffect, useRef } from 'react';
import { assetUrl } from '../assetUrl';

export default function Hero() {
  const nameRef = useRef(null);

  useLayoutEffect(() => {
    const el = nameRef.current;
    if (!el) return;

    const fit = () => {
      el.style.setProperty('--name-fit', 1);
      requestAnimationFrame(() => {
        let minRatio = 1;
        el.querySelectorAll(':scope > span').forEach((span) => {
          if (span.clientWidth > 0 && span.scrollWidth > span.clientWidth) {
            minRatio = Math.min(minRatio, span.clientWidth / span.scrollWidth);
          }
        });
        el.style.setProperty('--name-fit', minRatio < 1 ? minRatio * 0.98 : 1);
      });
    };

    fit();
    window.addEventListener('resize', fit);
    document.fonts?.ready?.then(fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-grid">
        <h1 className="hero-h1" ref={nameRef}>
          <span className="first">Muhammad</span>
          <span className="last">Shahnoor<br />Sajid</span>
        </h1>
        <div className="hero-frame">
          <img
            src={assetUrl('assets/hero.jpeg')}
            alt="Illustration of a developer hunched over a laptop between three monitors, surrounded by cables"
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </div>

      <div className="hero-intro">
        <p className="hero-lede">
          Product engineer building agentic AI and ML systems that don't just predict they execute.
        </p>
        <div>
          <p className="hero-sub">
            Focused on Agentic AI, ML, and data analytics to engineer automated systems and innovative products. Off the clock, I'm following Real Madrid and dialing in my Valorant setup.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn-solid">Selected work ↓</a>
            <a href="mailto:shahnoorsajid21@gmail.com" className="btn-outline">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
