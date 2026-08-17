# Dongho Ha — Personal Website

Refined, minimal, editorial personal website for **Dongho Ha**, Computer Architect & ASIC Engineer at Meta.

- **URL**: [https://dongho9601.github.io/](https://dongho9601.github.io/)
- **Tech Stack**: [Astro](https://astro.build/) (v7), TypeScript, Markdown / MDX Content Collections, Vanilla CSS.

---

## Structure

```
├── .github/workflows/deploy.yml   # GitHub Pages automated deployment workflow
├── public/                        # Static assets (images, PDF resume, favicon, robots.txt)
│   ├── Resume_Dongho_Ha.pdf
│   ├── favicon.ico
│   ├── images/
│   │   └── profile.jpg
│   └── robots.txt
├── src/
│   ├── components/                # Modular UI components (Header, Footer, PublicationItem)
│   ├── content/                   # Content collections
│   │   ├── projects/              # Markdown project files (hlbm.md, hlbm-rf.md)
│   │   └── writing/               # Markdown writing files (phd-guideline.md)
│   ├── data/                      # Structured data modules
│   │   ├── about.ts               # Experience, education, service, funding, collaborators
│   │   ├── publications.ts        # Peer-reviewed publication records & ongoing topics
│   │   └── site.ts                # Site navigation, metadata, and social links
│   ├── layouts/                   # BaseLayout and ProseLayout
│   ├── pages/                     # File-based routes (/, /writing, /projects, /publications, /about, /404)
│   └── styles/
│       └── global.css             # Typography-first editorial design system
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Local Development

### Prerequisites

- Node.js 22 (LTS recommended)
- npm (v10+)

### Commands

```bash
# Install dependencies
npm ci

# Start local development server (http://localhost:4321)
npm run dev

# Typecheck and build production static bundle (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## Content Management

### Adding a Publication
Edit `src/data/publications.ts` to add or modify paper records. The homepage automatically pulls the 5 latest publications, while `/publications` groups all papers by year in reverse chronological order.

### Adding Writing / Blog Posts
Add a `.md` or `.mdx` file to `src/content/writing/` with frontmatter:
```yaml
---
title: "Article Title"
description: "Brief summary of the article"
pubDate: 2026-08-16
tags: ["Architecture", "GPU"]
draft: false
---
```

### Adding Projects
Add a `.md` or `.mdx` file to `src/content/projects/` with frontmatter:
```yaml
---
title: "Project Name"
subtitle: "Short tagline"
description: "Project description"
status: "In development" # or "Active", "Completed"
technologies: ["Unity", "C#"]
order: 1
---
```

### Updating Career / About Information
Edit `src/data/about.ts` to update experience, education, industry projects, service, funding, or collaborators.

---

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions upon pushing to `master`.
The workflow configuration is in `.github/workflows/deploy.yml`.
