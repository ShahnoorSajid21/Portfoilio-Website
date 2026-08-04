import { assetUrl } from '../assetUrl';

export default function ProjectDetail({ project, goHome }) {
  return (
    <div className="detail-main">
      <a href="#top" onClick={goHome} className="back-link">← All Projects</a>

      <div className="detail-layout">
        <div className="detail-media">
          <h1 className="detail-title">{project.title}</h1>
          <div className="detail-frame" style={{ aspectRatio: project.aspect }}>
            <img src={assetUrl(project.img)} alt={`${project.title} illustration`} />
          </div>
        </div>

        <div className="detail-content">
          <section className="detail-section">
            <h2 className="detail-eyebrow">Project Overview</h2>
            <p className="detail-overview">{project.overview}</p>
          </section>

          <div className="detail-columns">
            <section className="detail-section">
              <h2 className="detail-eyebrow">Core Capabilities &amp; Features</h2>
              <ul className="capabilities-list">
                {project.capabilities.map((c) => (
                  <li key={c.name}>
                    <strong>{c.name}:</strong> {c.desc}
                  </li>
                ))}
              </ul>
            </section>

            <section className="detail-section">
              <h2 className="detail-eyebrow">Technical Highlights &amp; Stack</h2>
              <ul className="stack-groups">
                {project.stack.map((g) => (
                  <li key={g.group}>
                    <strong>{g.group}:</strong> {g.items.join(', ')}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
