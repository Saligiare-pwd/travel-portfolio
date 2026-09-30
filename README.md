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
area: "Germany"
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

The **Places** page groups trips by the `area` field and links directly to each city guide. To add a transport schematic inside a guide, use:

```text
{{< city-route title="City orientation" points="Station|Museum|Old town" coords="49.40,8.67|49.41,8.69|49.42,8.71" times="8 min|12 min" modes="tram|walk" note="Assumes daytime weekday service." >}}
```

The map uses locally stored Leaflet code and OpenStreetMap tiles. Coordinates must follow the same order as the place names; there is one travel time and mode between each pair of stops.

## Edit the Jakobswege planner

- Page structure: `layouts/jakobsweg/list.html`
- Route and stage information: `static/js/jakobsweg.js`
- Route photographs: `static/images/jakobsweg/`

Each stage has the same fields: place, distance, map position, image, short note, stay, eat, transport, and map link.

## Preview locally

Install Hugo once, then run:

```bash
brew install hugo
hugo server -D
```

Open `http://localhost:1313`. The GitHub workflow uses Hugo `0.149.0`.

## Publish

```bash
git add README.md hugo.toml content layouts static
git commit -m "Update travel plans"
git push origin main
```

GitHub Pages deploys automatically. If a deployment fails, open the repository's **Actions** tab and select the newest “Deploy Hugo site to GitHub Pages” run.

## Photo credits

Add the creator, licence, and original source link to `content/resources/photo-credits.md` whenever you add a photograph that is not your own.
