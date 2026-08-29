# Exam Countdown Planner

Browser-only study planner for Singapore national exams (GCE O/NA/NT/A-Level) built by a student for Nan Chiau High School classmates. No server, no accounts — all data is stored in your browser (localStorage + IndexedDB).

## Features

- Countdowns and daily study planner for multiple exam sets with a setup wizard
- Topic progress + subject goals, calendar, notes (text + PDF/image upload with OCR)
- Results & Grade Target tab: per-paper scoring, weighted grades, grade targets, interactive grade-region graph, "what-if" hypothetical score simulator, math breakdown
- Undo/redo (snapshot-based, 40 deep), study streaks, printable timetable, `.ics` export, JSON backup/restore
- Named autosave profiles, achievements, error logging, yearly exam-date updates via JSON
- Offline support (PWA), lazy-loaded OCR libraries, dark mode, keyboard shortcuts

## Getting started

This is a static site. Serve `public/` from any static file server:

```bash
cd public
python -m http.server 8080
# or: npx serve .
```

> Note: The PWA service worker and install prompt require `http(s)://` (they are ignored on `file://`).

## Development

No build step. Edit `public/index.html`, `public/style.css`, `public/script.js` (a single ES module), then if you have a copy in the repo root, sync them:

```bash
Copy-Item public\index.html,public\style.css,public\script.js . -Force
```

### SEO / best practices

- Optimize first load: OCR libraries (Tesseract, pdf.js) are loaded lazily on demand.
- Keep it fast on low-end phones; minimise repaints during interactive edits.

## Update built-in exam dates

Core built-in sets are compiled in `script.js` (`BUILTIN_EXAMS`). To refresh dates for a new school year, provide an `exam-data.json` file (see `public/exam-data.json`) and use Settings → Exam Data (JSON) → Update Exam Dates.

## Testing & quality

No runtime test framework is configured yet. Suggested dev scripts (see `package.json`):

```bash
npm run lint
npm run check   # node syntax check
npm test
```

## License

MIT