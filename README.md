
# Traveler’s Portfolio (Hugo + PaperMod)

A travel blog skeleton designed for **global best-practice structure** (Destinations hub → Guides → Itineraries → Resources), ready to deploy on **GitHub Pages**. No local Hugo install required (GitHub Actions builds for you).

## 🚀 One‑click flow (GitHub‑only)
1. Create a new **public** repo on GitHub (e.g., `travel-portfolio`).
2. Upload all files/folders from this package into the repo (root level).
3. Go to **Settings → Pages** and set:
   - **Source:** GitHub Actions
4. Push to `main`. The included workflow will:
   - install Hugo
   - clone the PaperMod theme
   - build the site
   - publish to GitHub Pages

> First publish can take ~1–2 minutes. After it’s live, your site appears at `https://<your-username>.github.io/<repo>/` (or at your custom domain if configured).

## 🧱 Content structure
```
content/
  destinations/
    japan/_index.md
    japan/tokyo/_index.md
  guides/
    tokyo-basics.md
  itineraries/
    tokyo-3-days.md
  resources/
    tools.md
  about.md
static/images/
```

## ✍️ Writing new posts
- Duplicate an existing `.md` file and edit frontmatter + body.
- Recommended frontmatter fields:
```yaml
title: "Tokyo in 3 Days"
slug: "tokyo-3-days"
date: 2025-10-06
updated: 2025-10-06
country: "Japan"
city: "Tokyo"
days: 3
tags: ["itinerary"]
cover:
  image: "/images/tokyo/shibuya.jpg"
summary: "A clean 3-day route..."
```

## 🛠 Optional (local preview)
If you want local preview:
```bash
brew install hugo
hugo server -D
```
Open http://localhost:1313

## 🔎 SEO tips
- Use one main keyword per page + 3–5 long-tail variants
- Add internal links between guides ↔ itineraries ↔ resources
- Add `updated` when you refresh content
- Always include `cover.image` and image `alt` text

---

Happy travels!
