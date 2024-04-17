## rodelo*s_application_grand_solution*

## Pre-requisites

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - v16 or greater
- [npm](https://www.npmjs.com/) - v6 or greater

## Running in dev environment

1. `cd YOUR_APPLICATION`
2. `npm install`
3. `npm run dev`

## Folder Structure

```
.
├── public --------- Static assets holder
│   └── images --------- Contain all images
│   └── fonts ---------- Font resources
├── README.md
├── src --------- Source code root
│   ├── app --------- Application logic
│   │   ├──<router> --------- Route-specific components
│   │   │    └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components --------- Reusable components
│   └── styles --------- Global style config
│       ├── font.css ------ Font styling
│       ├── index.css ------ Main stylesheet
│       └── tailwind.css --- Default Tailwind modules
├── next.config.js ----- Next.js config
├── package.json
├── postcss.config.js
└── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```
