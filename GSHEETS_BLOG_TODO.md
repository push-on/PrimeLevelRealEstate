# Build-time Google Sheets → Blog Data

A concise checklist to power blogs from Google Sheets at build-time (no code needed to add posts later).

## 1) Define Sheet Schema
- id (string, unique, slug-friendly)
- title (string)
- excerpt (string)
- content (long text / markdown)
- category (Market | Buying | Selling | Investment | Guides | News)
- author (string)
- date (ISO: YYYY-MM-DD)
- image (public URL, e.g., Cloudinary)
- tags (comma-separated)

## 2) Create & Share Sheet
- Create Google Sheet in your account
- Share: Anyone with the link (viewer) OR use a Service Account
- Note the Sheet ID (from the URL)

## 3) Environment Variables
Create a `.env` (or `.env.local`) and add:

```
VITE_BLOG_SHEET_ID=<your_google_sheet_id>
# If using service account, also add:
GOOGLE_SERVICE_ACCOUNT_EMAIL=<email>
GOOGLE_SERVICE_ACCOUNT_KEY="<multiline-private-key>"
```

## 4) Build-Time Fetch Script
- Add a Node script (e.g., `scripts/fetch-blog.js`) to:
  - Read the sheet (public CSV/JSON export or Google API with service account)
  - Transform rows → typed blog objects
  - Write JSON to `src/generated/blog.json`
- Hook into build: run script before `vite build` (e.g., `prebuild`)

## 5) Transform Rules
- Trim strings, coerce `date` to ISO, split `tags` by comma
- Validate `category` against allowed list
- Ensure `id` is unique and slug-safe

## 6) Wire App to Generated Data
- Replace `src/lib/blog.ts` static data with imports from `src/generated/blog.json`
- Keep types in `src/lib/blog.ts` and export them for app use
- Update Blog and Home pages to consume generated data (unchanged props)

## 7) Images
- Host images on a CDN (e.g., Cloudinary)
- Paste final CDN URLs into the `image` column

## 8) Documentation for Editors
- Add a short guide: "How to add a blog post"
  - Open the Sheet → add a new row with required columns
  - Use CDN URL for image
  - Publish changes → redeploy/build fetches latest content

## Optional Enhancements
- Add a second sheet for categories or authors
- Add draft/publish status column
- Add `readingTime` auto-calc during transform

## Notes
- Public CSV endpoint example:
  - `https://docs.google.com/spreadsheets/d/<SHEET_ID>/gviz/tq?tqx=out:csv&sheet=<TAB_NAME>`
- Using Google API improves reliability and allows private sheets via service account.
