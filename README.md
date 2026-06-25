# AI Project Portfolio

A polished portfolio website for showcasing AI projects, prototypes, and full-stack product demos.

## Highlights

- Built with Next.js, TypeScript, and plain CSS
- Clean portfolio structure for AI projects
- Resume-friendly project cards
- Responsive desktop and mobile layout
- Sections for projects, stack, process, and contact
- Ready for GitHub and Vercel deployment

## Featured Project Categories

- Fintech AI simulation platform
- RAG-based enterprise knowledge assistant
- AI resume screening and job matching
- Customer support copilot
- AI analytics dashboard
- AI content generation workbench

## Getting Started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  Contact.tsx
  Header.tsx
  HeroVisual.tsx
  Process.tsx
  ProjectCard.tsx
  Skills.tsx
  portfolio-data.ts
public/
  portfolio-mark.svg
```

## Customize

Edit project content in:

```text
components/portfolio-data.ts
```

Update contact links in:

```text
components/Contact.tsx
```

Update colors and layout in:

```text
app/globals.css
```

## Deploy

The easiest deployment path is Vercel:

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the default Next.js settings.
4. Deploy.

## License

MIT. Replace this section if you want a different license.
