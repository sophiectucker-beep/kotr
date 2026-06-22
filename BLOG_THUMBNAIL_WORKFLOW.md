# Blog Article, SEO, and Thumbnail Workflow

This is the Kids on the Rock blog workflow to follow every time a blog post is created or updated.

Do not treat a blog article as finished until the article content, SEO, inline doodle, Open Graph thumbnail, and Instagram image have all been checked.

For the detailed worked example of the final successful dentists article setup, refer to:

`BLOG_SHARE_IMAGE_SUCCESS_WORKFLOW.md`

## Blog SEO Rule

Every blog post must be SEO-optimised in its Markdown file before it goes live:

- use a clear search-friendly `title`
- write a useful `excerpt` that includes the main topic, audience, and Gibraltar context where relevant
- add specific tags, not just broad ones
- keep the first paragraph human and useful, without repeating the title
- include practical local terms parents may search for, but do not keyword-stuff
- link internally where relevant, for example to Useful Numbers, Forms, Clubs & Classes, Buy/Sell, or What's On
- keep the tone parent-facing and natural, not written like notes to the site owner
- keep `draft: true` until the article has been checked, illustrated, and has working share images

Every blog post must have an inline Open Doodle, SVG, or supplied illustration. If the user has not provided one, ask for it before finalising the post.

It exists because the thumbnail issue was finally fixed by doing the boring, reliable version:

- use a real static Open Graph PNG file
- make sure the page metadata points to that exact PNG
- confirm the live PNG URL returns `200` with `content-type: image/png`
- only then ask Facebook to scrape again

## The Rule

For blog posts, the Open Graph image should end up at:

`public/blog/[slug]-og.png`

And the Instagram image should end up at:

`public/blog/[slug]-instagram.png`

If the static `-og.png` file exists, the site will use it automatically.

## Visual Pattern

Use the same pattern as the passport article and the dentist article that finally worked:

- screenshot-style blog header, not a random new card design
- warm beige background
- salmon eyebrow
- navy title
- Lexend subtitle or excerpt
- Open Doodle or SVG illustration
- plenty of breathing room

The subtitle must stay in Lexend, not the same font as the heading.

## Exact Workflow

1. Create the blog post and finalise the title, excerpt, tags, internal links, and doodle.
2. Preview the header at:
   - `/share-previews/blog/[slug]`
3. Save the Open Graph image as:
   - `public/blog/[slug]-og.png`
4. Preview the Instagram version at:
   - `/share-previews/blog/[slug]/instagram`
5. Save the Instagram image as:
   - `public/blog/[slug]-instagram.png`
6. Check the static OG file locally:
   - it must be a real PNG
   - it must not be HTML with a `.png` filename
7. Run:
   - `npm run lint`
   - `npm run build`
8. Deploy.
9. Check the live page source and confirm `og:image` points to:
   - `https://kidsontherock.gi/blog/[slug]-og.png`
10. Check the live image URL directly and confirm:
   - response is `200`
   - `content-type` is `image/png`
11. Only after that, use Facebook Sharing Debugger and click `Scrape Again`.

## Critical Facebook Rule

If Facebook or Meta is trying to scrape a specific URL like:

`https://kidsontherock.gi/blog/[slug]-og.png`

that URL must exist as a real PNG.

Do not leave Facebook pointing at:

- a missing `-og.png`
- a dead route
- a 404 page
- an HTML response pretending to be a PNG

That was the cause of the dentist article problem.

## If Facebook Still Shows The Wrong Thumbnail

Work through these in order:

1. Check what the live page is actually advertising in `og:image`.
2. Open that exact image URL directly.
3. Confirm it returns `200` and `content-type: image/png`.
4. If Facebook is still stuck on an older `-og.png` URL, restore a real PNG file at that exact old URL.
5. Redeploy.
6. Scrape again in Facebook Debugger.

## What Fixed The Dentist Article

The page itself was fine, but Meta had cached:

`https://kidsontherock.gi/blog/childrens-dentists-gibraltar-og.png`

That URL was returning `404`, so Meta reported the image as corrupted.

The fix was:

1. create a real static file at:
   - `public/blog/childrens-dentists-gibraltar-og.png`
2. deploy it
3. verify the live URL returned:
   - `200`
   - `content-type: image/png`
4. confirm the live page metadata pointed to that exact static PNG

That is the reliable pattern to reuse.

## Bottom Line

For Facebook-safe blog thumbnails, prefer the stable static file:

`public/blog/[slug]-og.png`

and always verify the live URL before trusting social previews.
