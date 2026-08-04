# Muhammad Shahnoor Sajid — Portfolio

This is my personal portfolio site. I'm a product engineer working on ML and agentic systems for
financial products, and I built this as a single-page React application with hash-based routing. It
covers an about section, my selected projects with dedicated case-study pages, work experience,
education, skills and a contact section.

**Live sections:** About · Projects · Experience · Education · Skills · Community · Contact

---

## Tech stack

| Layer      | What I used                     |
|------------|----------------------------------|
| Framework  | React 18                        |
| Build tool | Vite 5                          |
| Routing    | A custom hash-based router (`useHashRoute`) — no external router dependency |
| Styling    | Plain CSS (`src/styles/site.css`), CSS custom properties for theming |
| Fonts      | OffBit (display) via cdnfonts, Switzer (body) via Fontshare |

I deliberately skipped UI frameworks and CSS-in-JS libraries — the styling is a single hand-written
stylesheet driven by CSS variables, and the scroll-triggered reveals run on `IntersectionObserver`
through my `useReveal` hook.

---

## Project structure

```
portfolio/
├── index.html                # HTML entry point, font links, meta tags
├── package.json
├── vite.config.js            # Vite + @vitejs/plugin-react config
├── public/
│   ├── resume.pdf            # My downloadable CV
│   └── assets/               # Images referenced via assetUrl()
│       └── community/        # Community/event photos
└── src/
    ├── main.jsx               # React root, mounts <App />
    ├── App.jsx                # Top-level layout, routing, header/footer wiring
    ├── assetUrl.js            # Resolves public asset paths
    ├── data/
    │   └── content.js         # All site copy: projects, experience, education, skills, etc.
    ├── hooks/
    │   ├── useHashRoute.js     # Minimal hash-based router (#/p/:id project pages)
    │   └── useReveal.js        # IntersectionObserver scroll-reveal hook
    ├── pages/
    │   ├── Home.jsx            # Composes the homepage sections
    │   └── ProjectDetail.jsx   # Focused case-study view for a single project
    ├── components/
    │   ├── Header.jsx
    │   ├── MobileMenu.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── ProjectsGrid.jsx
    │   ├── Experience.jsx
    │   ├── Education.jsx
    │   ├── Skills.jsx
    │   ├── Community.jsx
    │   ├── Connect.jsx
    │   └── Footer.jsx
    └── styles/
        └── site.css            # Entire site's styling
```

I keep all copy — project descriptions, tech stacks, experience, education, skills, community
captions — in one place: [`src/data/content.js`](src/data/content.js). Editing that file changes the
site content without touching any component.

---

## Getting started

**Requirements:** Node.js 18+ and npm.

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

### Available scripts

| Command           | Description                                  |
|--------------------|-----------------------------------------------|
| `npm run dev`       | Start the Vite dev server with hot reload     |
| `npm run build`     | Production build (no type-checking step), output to `dist/` |
| `npm run preview`   | Serve the production build locally to sanity-check it |

---

## Adding a project

Every project I add follows the same structure — a short card summary, an overview, a list of
capabilities, and a grouped tech stack. I add an entry to the `PROJECTS` array in
`src/data/content.js`:

```js
{
  id: 'pw06',
  model: 'PW06',
  title: 'Project Name',
  year: '2026',
  aspect: '4/5',                     // illustration aspect ratio
  img: 'assets/your-image.jpg',      // relative to public/
  cardSummary: '1–2 sentence summary shown on the grid card.',
  overview: 'Longer paragraph shown on the project detail page.',
  capabilities: [
    { name: 'Feature Name', desc: 'Short explanation.' },
  ],
  stack: [
    { group: 'Frontend', items: ['React', 'Vite'] },
  ],
}
```

Then I register it in the grid by adding its `id` to the `CELLS` array in
[`src/components/ProjectsGrid.jsx`](src/components/ProjectsGrid.jsx), with a matching CSS grid-cell
class in `site.css`. Clicking a project card opens `#/p/<id>`, which
[`src/pages/ProjectDetail.jsx`](src/pages/ProjectDetail.jsx) renders as three sections: Project
Overview, Core Capabilities & Features, and Technical Highlights & Stack.

---

## Deployment

It's a static site — `npm run build` outputs a deployable `dist/` folder. It works out of the box on
any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.) with no server-side
requirements.

---

## Contact

Feel free to reach out:

- Email: shahnoorsajid21@gmail.com
- LinkedIn: [Muhammad Shahnoor Sajid](https://www.linkedin.com/in/muhammad-shahnoor-sajid)
- GitHub: [ShahnoorSajid21](https://github.com/ShahnoorSajid21)
