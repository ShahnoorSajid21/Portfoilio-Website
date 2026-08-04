import { useState } from 'react';
import { COMMUNITY, LEADERSHIP } from '../data/content';
import { assetUrl } from '../assetUrl';

export default function Community() {
  // A photo that fails to load falls back to the framed placeholder rather
  // than leaving a broken-image icon in the grid.
  const [failed, setFailed] = useState(() => new Set());
  const markFailed = (slot) =>
    setFailed((prev) => (prev.has(slot) ? prev : new Set(prev).add(slot)));

  return (
    <section id="community" className="section">
      <div className="section-head">
        <h2>Community</h2>
        <span className="rule" />
      </div>
      <p className="community-intro">
        Hackathons, student societies, sessions, and the teams that came out of them.
      </p>

      <div className="community-leadership">
        <h3 className="detail-eyebrow">Leadership &amp; Campus Experience</h3>
        <div className="leadership-grid">
          {LEADERSHIP.map((e) => (
            <div key={e.org} data-reveal className="card leadership-card">
              <h4 className="leadership-org">{e.org}</h4>
              {e.positions.map((p) => (
                <div key={p.role} className="leadership-position">
                  <p className="exp-role">{p.role}</p>
                  <div className="leadership-meta">{p.dates} · {p.loc}</div>
                  <ul className="exp-list">
                    {p.did.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="community-grid">
        {COMMUNITY.map((c) => {
          const showPhoto = c.img && !failed.has(c.slot);
          return (
            <figure key={c.slot} data-reveal>
              <div className={`community-frame${showPhoto ? ' has-photo' : ''}`}>
                {showPhoto ? (
                  <img
                    src={assetUrl(c.img)}
                    alt={c.alt}
                    style={c.pos ? { objectPosition: c.pos } : undefined}
                    loading="lazy"
                    decoding="async"
                    onError={() => markFailed(c.slot)}
                  />
                ) : (
                  <span>{c.slot}</span>
                )}
              </div>
              <figcaption className="community-cap">{c.cap}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
