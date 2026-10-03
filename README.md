# mihadkazi.me — Kazi Saqlain Mihad

Premium personal portfolio built with React, TypeScript, Vite, Tailwind CSS, Motion, and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

For a production check:

```bash
npm run typecheck
npm run build
npm run preview
```

## GitHub Pages deployment

This repository is configured for GitHub Pages with a GitHub Actions workflow at `.github/workflows/deploy.yml`.

In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

Push to `main` to deploy.

## Custom domain

`CNAME` contains `mihadkazi.me`.

For the apex domain, configure the DNS provider as documented by GitHub Pages. GitHub currently documents these apex A records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

For `www`, use a CNAME pointing directly to `mihadkazi1.github.io`.

Then, in **Settings → Pages → Custom domain**, set `mihadkazi.me` and enable HTTPS once GitHub makes the certificate available.

## Project images

Project cards use verified public screenshots from the project repositories as remote image sources where available, and gracefully fall back to generated UI visuals if an image cannot load.

For fully self-contained hosting, place optimized local images under:

```text
public/images/projects/
```

and update the corresponding `image` values in `src/data/projects.ts`.

## Content source

The portfolio content is based on the latest CV supplied for this build, with public GitHub repository details used to verify the featured project information and repository links.
