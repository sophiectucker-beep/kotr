# Kids on the Rock

Kids on the Rock is a bilingual family resource site for Gibraltar.

It brings together useful information for local families in one place, including:
- clubs and classes
- what's on
- family day out ideas
- forms
- useful numbers
- blog posts and guides
- baby-changing information

## Running Locally

This project uses Next.js and npm.

### Development

```bash
npm run dev
```

Starts the local development server, usually at `http://localhost:3000`.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Run Production Build

```bash
npm run start
```

Starts the built app in production mode.

## Main Scripts

### `npm run dev`
Runs the Next.js development server.

### `npm run build`
Builds the app for production.

### `npm run start`
Runs the production server from the built output.

### `npm run lint`
Runs ESLint across the project.

### `npm run blog:og -- <slug> <absolute-path-to-image>`
Copies a blog Open Graph / social preview image into `public/blog`.

### `npm run blog:instagram -- <slug> <absolute-path-to-image>`
Copies a blog Instagram image into `public/blog`.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

Additional libraries used in the project include:
- ESLint
- `gray-matter` for markdown content
- `remark` for markdown processing
- `lucide-react` for icons
- `@upstash/redis` for optional blog likes
- `@vercel/analytics` for analytics

## Optional Environment Variables

The blog likes feature can use Upstash Redis.

If these variables are not set, the likes feature disables itself gracefully.

### Supported variables

```bash
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

The code also supports Vercel KV-compatible names:

```bash
KV_REST_API_URL=
KV_REST_API_TOKEN=
```

## Project Structure

```text
app/          Next.js app routes, pages, API routes, metadata routes
components/   Reusable UI and page components
content/      Content files such as blog markdown
lib/          Data helpers and utility modules
public/       Static assets, social images, fonts, uploaded assets
scripts/      Helper scripts for blog/social image workflows
```

## Notes

- The app uses the Next.js App Router.
- Blog and content-related features are partly file-based.
- Some content and assets in the repository are currently in active development.
- The blog likes feature is optional and depends on Redis env vars being available.
