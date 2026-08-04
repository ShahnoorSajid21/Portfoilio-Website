import { useState } from 'react';

export default function Connect() {
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
    <section id="connect" className="section">
      <div className="section-head">
        <h2>Let&rsquo;s connect</h2>
        <span className="rule" />
        <span className="meta">Islamabad · GMT+5</span>
      </div>
      <p className="card connect-intro">
        Open to product engineering and applied ML roles, internships and collaboration on
        financial infrastructure. I reply to everything.
      </p>
      <div className="connect-grid">
        <a href="mailto:shahnoorsajid21@gmail.com" onClick={handleEmailClick} data-reveal className="card connect-card">
          <span className="label">Email</span>
          <span className="value">shahnoorsajid21@gmail.com</span>
          <span className="desc">{copied ? 'Copied to clipboard!' : 'Fastest way to reach me — a line about what you are building is enough.'}</span>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-shahnoor-sajid"
          target="_blank"
          rel="noopener"
          data-reveal
          className="card connect-card"
        >
          <span className="label">LinkedIn</span>
          <span className="value">Muhammad Shahnoor Sajid</span>
          <span className="desc">Work history, recommendations and the occasional write-up.</span>
        </a>
        <a
          href="https://github.com/ShahnoorSajid21"
          target="_blank"
          rel="noopener"
          data-reveal
          className="card connect-card"
        >
          <span className="label">GitHub</span>
          <span className="value">ShahnoorSajid21</span>
          <span className="desc">Code for the projects on this site, plus everything that didn&rsquo;t make the cut.</span>
        </a>
        <a
          href="resume.pdf"
          target="_blank"
          rel="noopener"
          download="Muhammad-Shahnoor-Sajid-CV.pdf"
          data-reveal
          className="card connect-card"
        >
          <span className="label">Résumé</span>
          <span className="value">Download CV ↓</span>
          <span className="desc">One page. Experience, systems shipped and the stack behind each.</span>
        </a>
      </div>
    </section>
  );
}
