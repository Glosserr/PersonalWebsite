# Personal Portfolio Site

Built with [11ty (Eleventy)](https://www.11ty.dev/) and deployed via [Netlify](https://netlify.com).

## Quick start

```bash
npm install
npm run serve   # dev server with live reload → http://localhost:8080
npm run build   # production build → _site/
```

## Structure

```
.
├── _data/
│   ├── site.json        ← your name, email, links, bio
│   ├── projects.json    ← all projects (add new ones here!)
│   ├── experience.json  ← work history & education timeline
│   └── skills.json      ← languages, tools, domain skills
├── _includes/
│   └── layout.liquid    ← shared HTML shell (nav, footer)
├── styles/
│   └── screen.css       ← all styling
├── public/
│   └── resume.pdf       ← ⬅ place your PDF here
├── images/              ← static images (passthrough)
├── index.liquid         ← Home page
├── about.liquid         ← About page
├── resume.liquid        ← Resume / experience page
├── projects/
│   └── index.liquid     ← Projects listing (auto-filtered)
├── .eleventy.js
├── netlify.toml
└── package.json
```

## Customising content

### Personal info
Edit `_data/site.json` — name, bio, email, GitHub, LinkedIn, university.

### Adding a project
Append to `_data/projects.json`:

```json
{
  "id": "unique-slug",
  "title": "Project Title",
  "description": "One paragraph description.",
  "category": "cs",          // "cs" | "gamedev" | "embedded"
  "tags": ["Rust", "WebGL"],
  "github": "https://github.com/you/repo",
  "demo": null,              // or a URL string
  "featured": false,         // true = shown on home page (keep ≤ 3)
  "year": 2025,
  "status": "completed"      // "completed" | "in-progress" | "archived"
}
```

### Adding an experience entry
Append to `_data/experience.json`:

```json
{
  "title": "Role",
  "company": "Company",
  "type": "work",            // "work" | "research" | "ta" | "education"
  "location": "City, ST",
  "startDate": "Jan 2025",
  "endDate": "May 2025",
  "current": false,
  "description": "What you did and why it mattered.",
  "technologies": ["Go", "Kubernetes"]
}
```

### Resume PDF
Drop your PDF at `public/resume.pdf`. The download button on the Resume page links there automatically.

### Navigation & branding
Update `_data/site.json` (name shown in nav logo and footer) and `_includes/layout.liquid` for social links in the footer.

## Deploying to Netlify

1. Push this repo to GitHub.
2. In Netlify: **New site → Import from Git → select repo**.
3. Build command: `npm run build` · Publish directory: `_site`
4. Deploy — done. Netlify picks up `netlify.toml` automatically.
