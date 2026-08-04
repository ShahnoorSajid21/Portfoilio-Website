import { EXPERIENCE } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <h2>Experience</h2>
        <span className="rule" />
      </div>
      {EXPERIENCE.map((e) => (
        <div key={e.org} data-reveal className="card exp-row">
          <div>
            <div className="exp-dates">{e.dates}</div>
            <div className="exp-loc">{e.loc}</div>
          </div>
          <div>
            <h3 className="exp-org">{e.org}</h3>
            <p className="exp-role">{e.role}</p>
            <ul className="exp-list">
              {e.did.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
