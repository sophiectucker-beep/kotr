# Successful Blog Share Image Workflow

This file records the exact workflow that produced the final, successful Facebook thumbnail and Instagram image for:

- `childrens-dentists-gibraltar`

It should be used as the practical example whenever a new Kids on the Rock blog article needs share images.

## The Successful Dentists Article Setup

### Article slug

`childrens-dentists-gibraltar`

### Final successful static files

Facebook / Open Graph thumbnail:

`public/blog/childrens-dentists-gibraltar-og.png`

Instagram image:

`public/blog/childrens-dentists-gibraltar-instagram.png`

### Why this version worked

The final successful version worked because:

1. the blog post had a proper inline illustration in its Markdown
2. the preview routes rendered the title, excerpt, and doodle in the correct layout
3. the final Open Graph image existed as a real static PNG file in `public/blog`
4. the blog metadata pointed to that exact static PNG because `lib/blog-share-image.ts` prefers `public/blog/[slug]-og.png` when it exists
5. the live `og:image` URL returned `200` with `content-type: image/png`

That last part was the important fix for Facebook.

## The Layout That Succeeded

### Facebook / Open Graph

The successful Facebook thumbnail matched the blog share preview layout:

- warm beige background: `#FFF0E3`
- small salmon `Blog` eyebrow
- main title in `Goldplay Alt`
- subtitle/excerpt in `Lexend`
- inline Open Doodle / illustration on the right
- generous spacing around the text and image

The working route for this layout is:

`/blog/[slug]/opengraph-image`

and the page-level visual preview is:

`/share-previews/blog/[slug]`

### Instagram

The successful Instagram image used:

- size `1080 × 1350`
- beige background
- blog title in `Goldplay Alt`
- doodle / illustration underneath
- simple centered composition

The working route for this layout is:

`/blog/[slug]/instagram-image`

and the page-level visual preview is:

`/share-previews/blog/[slug]/instagram`

## What Went Wrong Before

The dentists article thumbnail problem happened because Meta had cached a URL ending in:

`/blog/childrens-dentists-gibraltar-og.png`

but that exact URL did not exist as a real PNG file at the time.

So even when the page itself looked right, Facebook still reported the image as broken or corrupted.

## The Fix That Finally Solved It

The final successful fix was:

1. create a real static PNG file at:
   - `public/blog/childrens-dentists-gibraltar-og.png`
2. make sure the live page metadata advertised that exact file
3. check the live image URL directly
4. confirm it returned:
   - `200`
   - `content-type: image/png`
5. only then use Facebook Sharing Debugger and click `Scrape Again`

That is the repeatable pattern.

## Exact Repeatable Steps

For any new article:

1. Finalise the blog title, excerpt, and inline doodle or illustration in the Markdown file.
2. Check the share preview page:
   - `http://127.0.0.1:3000/share-previews/blog/[slug]`
3. Generate or capture the Open Graph image.
4. Save the final static file as:
   - `public/blog/[slug]-og.png`
5. Check the Instagram preview page:
   - `http://127.0.0.1:3000/share-previews/blog/[slug]/instagram`
6. Generate the Instagram image.
7. Save the final static file as:
   - `public/blog/[slug]-instagram.png`
8. Confirm both files are real PNGs.
9. Run:
   - `npm run lint`
   - `npm run build`
10. Deploy.
11. Check the live page source and confirm `og:image` points at:
    - `https://kidsontherock.gi/blog/[slug]-og.png`
12. Open that exact live image URL directly and confirm:
    - `200`
    - `content-type: image/png`
13. Only after that, use Facebook Sharing Debugger.

## The Uniforms Article Created Using This Pattern

For:

`what-uniform-does-my-child-need`

the static files created are:

- `public/blog/what-uniform-does-my-child-need-og.png`
- `public/blog/what-uniform-does-my-child-need-instagram.png`

These are real PNG files and match the expected dimensions:

- Open Graph: `1200 × 630`
- Instagram: `1080 × 1350`
