import { FACTS } from '../data/content';
import { assetUrl } from '../assetUrl';

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <div data-reveal className="portrait-col">
          <div className="portrait-frame">
            <img src={assetUrl('assets/portrait.jpeg')} alt="Muhammad Shahnoor Sajid" loading="lazy" decoding="async" />
          </div>
          <p className="portrait-caption">Islamabad, PK</p>
        </div>

        <div data-reveal className="card about-card">
          <h2>Architecting action, not just predictions.</h2>
          <p>
            I build at the intersection of financial infrastructure, data analytics, and Agentic AI. My focus isn't just training models; it's architecting the data pipelines, execution policies, and guardrails that allow autonomous systems to decide and act safely without a human in the loop.
          </p>
          <p className="muted">
            Currently interning at Abhi Microfinance Bank, I take Agentic AI products from concept to proof of concept across voice agents, workflow automation, and identity systems. Previously, I co-founded Finova Solutions (leading product and market strategy) and optimized digital banking workflows at Mobilink Microfinance Bank. I’m pursuing a BS in Financial Technology at FAST NUCES, Islamabad
          </p>
          <p className="muted">
            When I step away from the code, I keep things balanced. You’ll usually find me playing football, out on a hiking trail, or conducting very serious "market research" at new restaurants around town.
          </p>
          <div className="fact-row">
            {FACTS.map((f) => (
              <span key={f} className="chip">{f}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
