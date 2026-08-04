import { EDUCATION, COURSES } from '../data/content';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-head">
        <h2>Education</h2>
        <span className="rule" />
        <span className="meta">In progress</span>
      </div>
      <div data-reveal className="card exp-row edu-card">
        <div>
          <div className="exp-dates">{EDUCATION.dates}</div>
          <div className="exp-loc">{EDUCATION.loc}</div>
        </div>
        <div>
          <h3 className="exp-org">{EDUCATION.org}</h3>
          <p className="exp-role">{EDUCATION.role}</p>
          <p className="desc">{EDUCATION.desc}</p>
          <div className="course-row">
            {COURSES.map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
