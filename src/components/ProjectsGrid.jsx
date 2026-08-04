import { byId } from '../data/content';
import { assetUrl } from '../assetUrl';

const CELLS = [
  { id: 'pw01', cls: 'cell-voice' },
  { id: 'pw05', cls: 'cell-klima' },
  { id: 'pw02', cls: 'cell-takaful' },
  { id: 'pw03', cls: 'cell-micro' },
  { id: 'pw04', cls: 'cell-quant' },
];

export default function ProjectsGrid({ onOpenProject }) {
  return (
    <section id="work" className="section">
      <div className="section-head">
        <h2>Projects</h2>
        <span className="rule" />
        <span className="meta">2024 — 2026</span>
      </div>

      <div className="projects-grid">
        {CELLS.map(({ id, cls }) => {
          const p = byId(id);
          return (
            <a
              key={id}
              href={`#/p/${p.id}`}
              onClick={onOpenProject}
              data-reveal
              className={`project-cell ${cls}`}
            >
              <img src={assetUrl(p.img)} alt="" loading="lazy" decoding="async" />
              <div className="overlay">
                <h3>{p.title}</h3>
                <span className="model">{p.model}</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
