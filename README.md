# The InterAsian Legalities Consortium

Editorial, multi-page website for the consortium, rebuilt with Next.js and the App Router.

## Pages

- `/` — landing page
- `/about` — consortium, approach, themes and partners
- `/programs` — workshops, seminars and activities
- `/researchers` — filterable researcher directory
- `/publications` — publication program and updates
- `/contact` — contact details and email-preparation form

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run check
npm run build
```

The project uses `output: "export"`, so a production build is written to `out/` and can be hosted as a static website.

## Content

Shared research themes, people, partners and program entries live in `app/data.ts`. Global visual styles are in `app/globals.css`.
