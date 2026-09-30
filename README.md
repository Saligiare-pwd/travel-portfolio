# Wing's Travel Notes

A Hugo travel notebook with destination plans and an interactive Jakobswege planner. GitHub Actions builds and publishes the site to GitHub Pages after every push to `main`.

## Add or update a trip

Trips live inside a country and city folder:

```text
content/destinations/
  germany/heidelberg/heidelberg-trip.md
  japan/kyoto/kyoto-plan.md
  Taiwan/E/hualien/hualien-trip.md
```

Copy the closest existing trip, then update its front matter and body. Keep images inside a matching folder under `static/images/`.

```yaml
---
title: "City: Short descriptive title"
slug: "city-short-plan"
date: 2026-09-30
country: "Germany"
city: "City"
days: 2
bestFor: "Art & walks"
pace: "Easy"
featured: true
official: "https://official-tourism.example/"
cover:
  image: "images/city/cover.jpg"
  alt: "A useful description of the photograph"
summary: "One sentence shown on the destination card."
---
```

Set `featured: true` to show a trip on the homepage. Set it to `false` or remove it to keep the trip inside the destination library only.

## Edit the Jakobswege planner

- Page structure: `layouts/jakobsweg/list.html`
- Route and stage information: `static/js/jakobsweg.js`
- Route photographs: `static/images/jakobsweg/`

Each stage has the same fields: place, distance, image, short note, stay, eat, transport, map, and official visitor information.

## Preview locally

Install Hugo once, then run:

```bash
brew install hugo
hugo server -D
```

Open `http://localhost:1313`. The GitHub workflow uses Hugo `0.149.0`.

## Publish

```bash
git add .
git commit -m "Update travel plans"
git push origin main
```

GitHub Pages deploys automatically. If a deployment fails, open the repository's **Actions** tab and select the newest “Deploy Hugo site to GitHub Pages” run.

## Photo credits

Add the creator, licence, and original source link to `content/resources/photo-credits.md` whenever you add a photograph that is not your own.
