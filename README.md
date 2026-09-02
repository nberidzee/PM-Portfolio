# Noe Beridze — Project Manager Portfolio

A responsive, single-page portfolio positioning Noe Beridze for Project Manager roles. It presents project work as structured delivery records rather than a conventional CV.

## Live URL

After deployment, the portfolio will be available at:

`https://nberidzee.github.io/PM-Portfolio/`

## Publish on GitHub Pages

1. Create or use the **public GitHub repository** named exactly `PM-Portfolio`.
2. Upload the contents of this folder to the repository, including the `.github` folder.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, choose **GitHub Actions** as the source.
6. The included workflow will build and publish the site automatically.

This is a separate project. Your existing `Executive-Portfolio` repository does not need to be changed.

## Local development

Requires Node.js 22 or newer.

```bash
npm ci
npm run dev
```

Open the local URL shown in the terminal.

## Production checks

```bash
npm run build
npm run build:github
```

The GitHub Pages-ready static output is generated in `dist/client`.

## Customize

- Main content: `app/page.tsx`
- Visual styling: `app/globals.css`
- Page metadata: `app/layout.tsx`
- Project illustrations: `public/legalstepy-project.webp` and `public/evolution-project.webp`
- GitHub Pages workflow: `.github/workflows/deploy-pages.yml`
