# MAXX Business Media

Next.js implementation of the original Stitch project:
https://stitch.withgoogle.com/projects/6045325251490508765

## Run locally

npm install
npm run dev

## Screens

- / — Corporate homepage
- /about-us — About and corporate story
- /events — Expo calendar, search, combined filters, and FAQs
- /leadership — Executive leadership and team

The four supplied screens retain the original Stitch layouts, copy, and imagery. The generated Tailwind CDN script was replaced with the existing local Tailwind build.
Shared design tokens and styles are in src/app/globals.css; original brand guidelines are in design/DESIGN.md.
Sora, Inter, Material Symbols, and the original images are served locally. No Stitch API key is needed at runtime.

The shared header includes responsive navigation and an About Us submenu for Leadership & Team.
Articles, resource PDFs, and legal documents were not supplied; their original placeholder links still need real destinations before publication.
