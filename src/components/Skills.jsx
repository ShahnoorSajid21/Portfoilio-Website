import { LAYERS } from '../data/content';
import { assetUrl } from '../assetUrl';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <h2>Skills</h2>
        <span className="rule" />
        <span className="meta">Four layers</span>
      </div>
      <div className="layers-grid">
        {LAYERS.map((l) => (
          <div key={l.no} data-reveal className="card layer-card">
            <div className="layer-head">
              <span className="layer-no">{l.no}</span>
              <h3>{l.name}</h3>
            </div>
            <p className="layer-def">{l.def}</p>
            <div className="layer-frame">
              <img src={assetUrl(l.img)} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="layer-tools">
              {l.tools.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
