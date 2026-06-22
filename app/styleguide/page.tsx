import { Button } from "@/components/ui/button";
import { CategoryCard } from "@/components/category-card";
import { PageBackgroundLogo } from "@/components/page-background-logo";
import Image from "next/image";
import rockyMascot from "@/Rocky.png";
import {
  Volleyball,
  CalendarHeart,
  ShoppingBag,
  FileText,
  Phone,
  Baby,
  Pill,
  Home,
  Search,
  Menu,
  Instagram,
  Mail,
  Heart,
  Star,
  ArrowRight,
  ChevronRight,
  Info,
  MapPin,
  Clock,
  Users,
  MessageCircle,
  Sparkles,
  SendHorizonal,
} from "lucide-react";

export default function StyleguidePage() {
  return (
    <div className="min-h-screen bg-beige">
      <PageBackgroundLogo />
      <header className="px-4 pt-4 pb-6 md:px-6 md:pb-8">
        <div className="mx-auto max-w-[61rem] rounded-[2rem] border border-white/10 bg-navy px-6 py-7 text-beige shadow-[0_16px_50px_rgba(45,56,77,0.18)]">
          <p className="text-sm font-medium uppercase tracking-widest text-salmon">
            Design System
          </p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">
            Kids on the Rock
          </h1>
          <p className="mt-3 max-w-2xl font-sans text-lg text-beige/70">
            Style guide and component reference for the Gibraltar parents&apos;
            hub.
          </p>
        </div>
      </header>

      <main className="mx-auto mb-6 max-w-[61rem] space-y-16 rounded-[2rem] border border-white/70 bg-white/80 px-6 py-12 shadow-[0_18px_60px_rgba(45,56,77,0.08)] md:mb-8">
        {/* ─── TYPOGRAPHY ─── */}
        <section>
          <SectionHeading
            title="Typography"
            description="Goldplay Alt is the main display and interface face. Lexend is reserved for body copy and helper text so reading stays easy."
          />

          <div className="mt-8 space-y-6 rounded-3xl bg-white/60 p-8">
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-salmon">
                Page Title — 48px Bold
              </p>
              <p className="text-5xl font-bold text-navy">
                Kids on the Rock
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-salmon">
                Section Heading — 36px Bold
              </p>
              <p className="text-4xl font-bold text-navy">
                Clubs & Classes
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-salmon">
                Card Title — 24px Bold
              </p>
              <p className="text-2xl font-bold text-navy">What&apos;s On</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-salmon">
                Header Title — 20px SemiBold
              </p>
              <p className="text-xl font-semibold text-navy">
                A handy little guide for Gibraltar parents
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-salmon">
                Body — 16px Lexend
              </p>
              <p className="font-sans text-base text-navy">
                From useful contacts and family forms to clubs, seasonal events,
                and lovely local finds. For all the weekly bits, pop-ups, and
                last-minute plans, head over to Instagram.
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-salmon">
                Helper Text — 14px Lexend
              </p>
              <p className="font-sans text-sm text-navy/60">
                Always double-check official pages and businesses directly for
                the latest details.
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-salmon">
                Eyebrow — 14px Uppercase
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
                THINGS TO DO
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/60 p-6">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-salmon">
              Tips
            </h4>
            <ul className="mt-3 list-inside list-disc space-y-1 font-sans text-sm text-navy/80">
              <li>Use Goldplay Alt for headings, buttons, labels, and navigation</li>
              <li>Use Lexend for body copy and helper text</li>
              <li>Keep headings large and warm, not shouty</li>
            </ul>
          </div>
        </section>

        <section>
          <SectionHeading
            title="Brand Assets"
            description="Use the right logo asset for the right context, and keep image treatments consistent so branded elements feel intentional."
          />

          <div className="mt-8 space-y-6">
            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
                Logo Files
              </h4>
              <p className="font-sans text-base text-navy">
                Use <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">KOTRlogotransparent.png</code> for homepage and other in-panel logo placements.
              </p>
              <p className="mt-3 font-sans text-base text-navy">
                The large low-opacity KOTR background logo should sit behind all main site pages, not just the homepage.
              </p>
              <p className="mt-3 font-sans text-base text-navy">
                Use <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">KOTRlogoinvert.png</code> in the floating navy navbar, sized to sit at the height of the bar itself.
              </p>
              <p className="mt-3 font-sans text-base text-navy">
                Use Open Doodles illustrations from <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">app/open-doodles</code> in the homepage intro and as the illustration style for blog post imagery going forward.
              </p>
              <p className="mt-3 font-sans text-base text-navy">
                In first header boxes, keep illustration treatment the same as the homepage: no extra beige frame, no inner rounded image card, and no extra illustration background. Let the doodle sit cleanly inside the white box.
              </p>
              <p className="mt-3 font-sans text-base text-navy">
                Avoid repeating the same doodle mood across major pages. Keep the blog on a reading-themed illustration, and use something more family- or child-feeling on the homepage.
              </p>
            </div>

            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
                Image Hover
              </h4>
              <p className="font-sans text-base text-navy">
                Images should use a soft shadow where they need depth and a subtle hover zoom for responsiveness. Default interaction: gentle scale-up only, never dramatic motion.
              </p>
              <p className="mt-3 font-sans text-sm text-navy/60">
                Preferred pattern: outer element hover around <code className="rounded bg-navy/10 px-1.5 py-0.5 text-xs">scale-[1.02]</code> to <code className="rounded bg-navy/10 px-1.5 py-0.5 text-xs">scale-[1.03]</code>, image hover around <code className="rounded bg-navy/10 px-1.5 py-0.5 text-xs">scale-[1.05]</code> to <code className="rounded bg-navy/10 px-1.5 py-0.5 text-xs">scale-[1.06]</code>.
              </p>
            </div>

            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
                Popups & Lightboxes
              </h4>
              <ul className="space-y-2 font-sans text-base text-navy">
                <li>Render popups and lightboxes through a portal into <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">document.body</code>, not inside cards, white tables, or blurred panels. Transforms and backdrop filters can otherwise pull fixed-position elements up to the header or another ancestor.</li>
                <li>For small information popovers, position from the clicked link’s <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">getBoundingClientRect()</code> plus <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">window.scrollX/Y</code>, then clamp to the viewport. This keeps the box beside the hyperlink text, even after scrolling.</li>
                <li>For full image lightboxes, keep the viewer fixed to the viewport but still portal it to <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">document.body</code>. This prevents Buy/Sell cards and other transformed containers from changing where the enlarged image appears.</li>
                <li>Do not use a page-dimming overlay for tiny text popovers. Use just the compact white box. Reserve dark overlays for proper image lightboxes and larger modal moments.</li>
                <li>If several links share the same popover system, clicking from one link to another should switch the details in one click, not require one click to close and another to open.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
                Blog Share Images
              </h4>
              <ul className="space-y-2 font-sans text-base text-navy">
                <li>Every blog article must be SEO-optimised before it is treated as finished: search-friendly title, useful excerpt, specific tags, natural first paragraph, and internal links where relevant.</li>
                <li>Keep unfinished blog posts as drafts until the content, SEO, doodle, Open Graph thumbnail, and Instagram image are all checked.</li>
                <li>Every blog article must include an inline Open Doodle, SVG, or supplied illustration. If one has not been provided, ask for one before finalising the post.</li>
                <li>For every new blog post, make both images: the Open Graph thumbnail and the Instagram version.</li>
                <li>Use the same layout pattern as the passport/ID article: Goldplay Alt for the main title, Lexend for the subtitle/excerpt, and an Open Doodles illustration on the right.</li>
                <li>Keep the warm beige background, navy text, salmon eyebrow, and plenty of breathing space around the doodle.</li>
                <li>The subtitle must always be in Lexend, never in the same display face as the title.</li>
                <li>Use a stable local font file in the image route, not a remote fetch and not a variable font that can break the renderer.</li>
                <li>Use local image assets converted to data URLs inside the OG and Instagram routes so the image renderer stays self-contained.</li>
                <li>Do not save a static <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">public/blog/slug-og.png</code> unless it has been checked and confirmed to be a real PNG file. A broken HTML file with a <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">.png</code> name will break social previews.</li>
                <li>After creating or updating a blog share image, always check the live OG URL directly and confirm it returns a real PNG before relying on Facebook or WhatsApp previews.</li>
                <li>When the OG image design changes, bump the version query in <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">lib/blog-share-image.ts</code> so the URL changes, for example from <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">v=2</code> to <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">v=3</code>. This forces Facebook and other platforms to fetch the new thumbnail instead of reusing the older cached one.</li>
                <li>After deploying a changed thumbnail, use Facebook Sharing Debugger and hit <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">Scrape Again</code>. Do not assume a corrected live image will appear immediately if the URL itself has not changed.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            title="Navigation"
            description="The top navigation can carry utility information as well as links. Keep it light, readable, and consistent with the rounded KOTR system."
          />

          <div className="mt-8 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Utility Strip
            </h4>
            <p className="font-sans text-base text-navy">
              Show the current day, date, month, and a simple weather symbol in the top navigation. Use an <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">EN / ES</code> toggle there as well.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              The date and weather pill can open into a weekly forecast panel. Keep that pop-open card soft, rounded, and consistent with the same white-table language as the rest of the site.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              When translating interface copy, keep the same layout, spacing, and pill styles rather than introducing a separate visual system for Spanish.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              The weather pill and the <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">EN / ES</code> pill should always match in height and text size, so utility controls feel like one quiet family.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Navigation pill text must always stay on one line. If translation or wording makes a label wrap, widen the pill instead of allowing two lines.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Put the `Kids on the Rock` wordmark directly in the top nav bar itself rather than repeating that title inside the homepage intro box.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              To avoid clutter, related top-nav destinations can be grouped into dropdown pills, for example `Things to Do` and `Useful Stuff`, while keeping the same rounded pill styling and colour logic.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              On mobile, the hamburger should open a proper navigation drawer from the right rather than a floating dropdown, with a soft overlay behind it.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Use outer margins for the fixed nav shell rather than extra wrapper padding, and place a thin divider line directly underneath it aligned to the same width as the body tables.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              If the desktop header uses a second utility row above the main nav, increase the fixed-header spacer underneath to match the full stacked height. The first white body table should never slide under the header.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Leave exactly <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">30px</code> between the divider under the fixed nav and the top of the first white body table. Use that same spacing on every main page.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Main header boxes should have modest, consistent top padding across pages. Enough to breathe below the nav, but not so much that they feel floaty.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              The first white content box on each main page should use the same internal top padding rhythm. Do not let the homepage, blog, and events headers drift into different amounts of white space above their content.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Keep the main heading scale in those first white header boxes consistent too. The events page should sit in the same title band as home and blog, not jump up into a much larger hero style.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            title="Forms Layout"
            description="Forms should feel like a practical working page, not a dump of links and not another card gallery."
          />

          <div className="mt-8 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Structure
            </h4>
            <ul className="space-y-2 font-sans text-base text-navy">
              <li>Use the standard first white header box with an Eyebrow, Header Title, Body, Helper Text, and a clean Open Doodles illustration on the right.</li>
              <li>Keep the Forms page as one continuous white working table. Put any Rocky helper strip, filters, and form rows inside that same table, separated with dividers rather than split into multiple big cards.</li>
              <li>Use filter pills for practical parent tasks like `School`, `Health`, `Benefits`, `ID &amp; Records`, and `Other`.</li>
              <li>Inside the working table, list forms in tidy rows with the form name, what it&apos;s for, source, and an `Open form` action.</li>
              <li>The `Open form` action should open a small in-row menu with `Download blank form` and, where Rocky supports it, `Help me fill it`.</li>
              <li>If Rocky cannot build the form yet, scroll to the first missing field and keep all currently invalid inputs glowing in salmon until they are filled correctly.</li>
              <li>When a form has timing rules or supporting-document requirements, Rocky should turn those into plain-language yes/no questions and a short pre-download checklist, not bury them in dense government copy.</li>
              <li>Rocky warning and info pop-ups should use one shared pattern: Rocky visible at the top, compact white modal that hugs its contents, display-style `Stop!` or `Rocky says:` heading, centered Lexend body copy, and a clear single-button close action underneath.</li>
            </ul>
          </div>

          <div className="mt-6 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Tone
            </h4>
            <p className="font-sans text-base leading-7 text-navy">
              Keep the Forms page practical and human. It should feel like someone has already done the annoying digging around and put the useful paperwork in one place.
            </p>
            <p className="mt-3 font-sans text-base leading-7 text-navy">
              No confusing bureaucratic headings. Ask for information in plain parent language, with short explainer text underneath where it helps.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            title="Clubs & Classes"
            description="Filters should reflect how parents actually hunt for activities, especially once one discipline starts to dominate the page."
          />

          <div className="mt-8 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Categories
            </h4>
            <p className="font-sans text-base leading-7 text-navy">
              If there are enough dance listings to crowd out the broader creative category, give dance its own filter rather than double-listing it under `Arts` and `Health &amp; Fitness`.
            </p>
            <p className="mt-3 font-sans text-base leading-7 text-navy">
              Keep `Arts` for art, drama, music, makers, and library-style creative sessions. Keep `Dance` as its own parent-friendly shortcut once the page has real volume.
            </p>
            <p className="mt-3 font-sans text-base leading-7 text-navy">
              Cross-list sparingly. Only let a class appear in a second category when that second use case is genuinely part of how parents would search for it, like Stagecoach under `Arts` or a movement class with clear wellbeing sessions under `Health &amp; Fitness`.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            title="Map Directory"
            description="For baby changing and similar quick-reference location pages, use a visual map rather than a plain list."
          />

          <div className="mt-8 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Structure
            </h4>
            <ul className="space-y-2 font-sans text-base text-navy">
              <li>Use the standard first white header box with Eyebrow, Header Title, Body, and a clean doodle on the right.</li>
              <li>The main working area should be one large white table with a flat vector-style Gibraltar map on the left and the selected location card on the right.</li>
              <li>Pins should feel like little round thumbnail pills, not generic red map markers.</li>
              <li>Clicking a pin should open the saved facility photo plus the location name and address.</li>
              <li>If the page is not populated yet, keep the map visible and use an honest empty state rather than fake locations.</li>
            </ul>
          </div>
        </section>

        <section>
          <SectionHeading
            title="Tone Of Voice"
            description="All website copy should sound like one local mum talking to another: warm, useful, human, and rooted in everyday Gibraltar family life."
          />

          <div className="mt-8 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Core Voice
            </h4>
            <ul className="space-y-2 font-sans text-base text-navy">
              <li>Write as one local mum speaking to another.</li>
              <li>Keep it warm, relatable, conversational, and genuinely human.</li>
              <li>Sound knowledgeable and reassuring, but never polished to the point of feeling corporate.</li>
              <li>Let it feel a bit lived-in and slightly imperfect in a good way, not over-edited or content-team tidy.</li>
              <li>Keep a strong sense of local reality, community, and everyday parent life in Gibraltar.</li>
            </ul>
          </div>

          <div className="mt-6 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Personality
            </h4>
            <ul className="space-y-2 font-sans text-base text-navy">
              <li>Sound like a capable mum who knows her stuff because she has lived it.</li>
              <li>Be practical, emotionally intelligent, and funny in a low-key way.</li>
              <li>It is fine to sound lightly frazzled, candid, or self-aware, but never chaotic or incompetent.</li>
              <li>The feeling should be: “I get it, I’ve had that kind of day too.”</li>
              <li>Never sound twee, smug, try-hard, or overly sentimental.</li>
            </ul>
          </div>

          <div className="mt-6 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Relationship To Reader
            </h4>
            <ul className="space-y-2 font-sans text-base text-navy">
              <li>Always write to make the reader feel understood, not instructed.</li>
              <li>Be encouraging, never preachy.</li>
              <li>Be honest that parenting can be lovely, exhausting, boring, joyful, and a bit crap all at once.</li>
              <li>Prioritise making another mum feel seen over sounding neat or impressive.</li>
            </ul>
          </div>

          <div className="mt-6 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Language Rules
            </h4>
            <ul className="space-y-2 font-sans text-base text-navy">
              <li>Use natural, everyday British-style wording where it fits.</li>
              <li>Specific and familiar beats generic every time.</li>
              <li>Mild swears like <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">crap</code> or <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">bloody</code> are fine when they feel natural.</li>
              <li>Never use stronger swears like <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">fuck</code>.</li>
              <li>Vary sentence length. Let some lines be short, dry, and punchy.</li>
              <li>Use occasional asides, mild humour, and sharp observation, but do not force it.</li>
            </ul>
          </div>

          <div className="mt-6 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Absolutely Avoid
            </h4>
            <ul className="space-y-2 font-sans text-base text-navy">
              <li>Generic openings like “In today’s fast-paced world” or “As a parent, you may be wondering”.</li>
              <li>Empty support language like “we’re here to support your journey”.</li>
              <li>Brochure voice, brand-deck copy, or anything that sounds AI-helpful instead of human.</li>
              <li>LinkedIn wording, therapy-speak, wellness jargon, or robotic transitions.</li>
              <li>Americanised parenting language unless there is a clear reason.</li>
              <li>Fake perkiness, listicle neatness, or repetitive templated phrasing.</li>
            </ul>
          </div>

          <div className="mt-6 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Copy Test
            </h4>
            <ul className="space-y-2 font-sans text-base text-navy">
              <li>Does this sound like a real mum?</li>
              <li>Would another mum feel more seen after reading it?</li>
              <li>Is it specific and human, or vague and generic?</li>
              <li>Does it sound warm, clever, and slightly imperfect in an appealing way?</li>
              <li>If a line sounds too written, too clever, or too “on brand”, flatten it until it sounds like a real person just saying it properly.</li>
            </ul>
          </div>
        </section>

        <section>
          <SectionHeading
            title="What&apos;s On Data"
            description="What&apos;s On should stay clearly filtered, child-focused, and honest about freshness."
          />

          <div className="mt-8 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Sourcing Rules
            </h4>
            <ul className="space-y-2 font-sans text-base text-navy">
              <li>Use `culture.gi`, `visitgibraltar.gi`, and carefully checked community tip-offs.</li>
              <li>Only surface events suitable for babies, kids, teens, or the whole family, always staying within the under-16 family brief.</li>
              <li>Do not list past events once they are no longer current for today&apos;s date.</li>
              <li>Keep event audience info inside the cards, but use only simple top-level filters such as `All` and `Free` so the page stays easy to scan.</li>
              <li>Mark recurring or not-yet-confirmed listings as watchlist items instead of presenting them as confirmed upcoming events.</li>
            </ul>
          </div>

          <div className="mt-6 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Layout Pattern
            </h4>
            <p className="font-sans text-base text-navy">
              The What&apos;s On page should read as one main white body table, not several stacked white tables. Keep the header copy and illustration at the top of that single panel, then place event tiles underneath inside the same container.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Event tiles should be shown in date order by default. If a user taps a category pill, filter the same grid so only that audience shows rather than jumping to a different section.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Tiles can use the event&apos;s own source thumbnail on top, keep a small audience pill inside the card, show cost clearly, and avoid long descriptions. Encourage click-through with the image itself and a `More info` button instead.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              On the homepage, the wavy intro header box should stay borderless rather than picking up the white border used on straighter body tables.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            title="Blog Layout"
            description="The blog index should feel tidy and readable, with a clear split between newer visual cards and older skimmable posts."
          />

          <div className="mt-8 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Index Pattern
            </h4>
            <p className="font-sans text-base text-navy">
              Use `Blog` as the small label in the first header box, not `Journal`.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              In the second white blog table, show six article tiles first. Under that, add a divider and list the remaining posts in a simpler text-led archive.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Older post rows should stay clean and easy to scan: title on the left, date on the right, with a thin divider between rows and no extra clutter.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              If older post rows use icons, keep them as simple Lucide icons to the left of the title. Do not place them inside coloured or beige circles.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Category pills in the first blog header box should be clickable filters, not static labels. They should filter both the top tile grid and the older-post list below.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Individual blog posts should feel like proper site pages, not loose documents on a beige background. Keep the cover image visible on the post page, hide tags from the live post header, and use a simple meta row with the date on the left and small share/save actions on the right.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Social/share thumbnails for individual blog posts should be literal screenshots of the real post header, not recreated cards. Capture only the white header area with the title, subtitle, and inline Open Doodle or SVG, and leave generous padding around the text so the preview breathes on Facebook and WhatsApp.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Workflow: preview the clean header at <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">/share-previews/blog/[slug]</code>, take the screenshot from there, then save it as <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">public/blog/[slug]-og.png</code>. Blog post metadata should always use that stable filename automatically when it exists.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Every blog post should also have an Instagram portrait asset at <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">1080×1350</code> with a beige background, the post title in the display font, and the inline Open Doodle or SVG underneath. Preview it at <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">/share-previews/blog/[slug]/instagram</code> and save it as <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">public/blog/[slug]-instagram.png</code>.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            title="Clubs & Classes Layout"
            description="The Clubs & Classes page should feel like a steady, hand-kept directory rather than a live events feed."
          />

          <div className="mt-8 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Directory Pattern
            </h4>
            <p className="font-sans text-base text-navy">
              Keep Clubs & Classes as a manually maintained static list stored in code, not a scraping-style live feed. This one should feel steady and easy to update by hand.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Use the same first-header-box rhythm as Home, Blog, and What&apos;s On, then place the actual directory in a second white body table underneath.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Category pills should be real filters. Use buckets such as `Babies & Tots`, `For Mums`, `Sports`, `Learning & Skills`, `Arts`, and `Youth Groups`.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              The main `Clubs & Classes` directory should stay simple: logo plus title on the browse cards, with the fuller ages, timing, location, and source details moved onto each club&apos;s own detail page.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Use dynamic detail routes under <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">/clubs-classes/[slug]</code>. The listing page is for scanning; the detail page is where the practical information lives.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              On individual club pages, the `About` section should not just repeat the intro. When possible, rewrite it from the organiser&apos;s own evergreen source copy into clear KOTR tone, and add a small photo carousel using real images from that same source.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Keep that copy useful to a parent deciding whether to click through: regular classes, structure, ages, training style, venue rhythm, or safeguarding context. Skip one-off event chatter, and do not make up extra detail just to pad it out.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Do not narrate the sourcing in the live copy with phrases like &quot;their page says&quot; or &quot;their website describes&quot;. Pull the verified facts through into natural parent-facing prose instead.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Keep the tone direct. Avoid lines like &quot;For parents, the appeal is...&quot; when the same point can just be written plainly.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Club-page galleries should keep one main image with smaller faded thumbnails underneath, side chevrons over the image, and a tap-to-expand full-image pop-up so important details in posters or photos do not get cropped away.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Little English Language School is the only language-school listing to include on KOTR. Other educational listings are fine, but do not add competing language lessons or language schools.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              For regular clubs and classes, it is fine to use a Facebook or Instagram page as the source if that is the real home of the activity. Social-led local listings are acceptable here in a way they would not be for one-off events.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            title="Useful Numbers Layout"
            description="The Useful Numbers page should feel like a calm old-school phone directory for Gibraltar parents."
          />

          <div className="mt-8 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Directory Pattern
            </h4>
            <p className="font-sans text-base text-navy">
              Keep this page Gibraltar-only and parent-focused. Group the entries into practical sections such as `Emergency & Safety`, `Healthcare`, `Education & School`, `Family Support`, and `Support Lines`.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              The page should not use chunky category cards for the actual numbers. It should read more like a tidy phone directory: section headers, ruled rows, service name on the left, number aligned on the right.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Use real filters at the top if needed, but keep the directory itself text-led and easy to scan. Numbers should still be tappable on mobile.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            title="Family Day Out Layout"
            description="The Family Day Out page should hold evergreen Gibraltar outings that are neither weekly clubs nor one-off dated events."
          />

          <div className="mt-8 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Page Role
            </h4>
            <p className="font-sans text-base text-navy">
              Use `Family Day Out` for occasional outings and attractions: places you might do once in a while, with visiting family, or when you just want somewhere decent to go. Do not mix these into `Clubs & Classes`.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              `Clubs & Classes` is for regular weekly things. `What&apos;s On` is for dated one-offs. `Family Day Out` is for evergreen outings that sit in the middle.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Layout-wise, keep the same first-header-box system as the other main pages, then use filterable outing cards underneath for buckets such as `Animals & Nature`, `Adventure & Views`, `Rainy Day`, and `History & Heritage`.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            title="What’s On Calendar"
            description="The What’s On page can grow into a proper family calendar, but it should stay events-first and readable."
          />

          <div className="mt-8 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Page Role
            </h4>
            <p className="font-sans text-base text-navy">
              Treat `What&apos;s On` as a real calendar workspace with `Day`, `Week`, and `Month` views. Default to `Week`, because that is the most useful family-planning view.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Keep one-off scraped events as the primary content. Recurring `Clubs &amp; Classes` can appear as an optional overlay, not the default view, so the page does not become cluttered.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              If recurring clubs are shown, style them more softly than real one-off events. The one-offs should still read first.
            </p>
          </div>

          <div className="mt-6 rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Day", active: false },
                  { label: "Week", active: true },
                  { label: "Month", active: false },
                ].map((view) => (
                  <button
                    key={view.label}
                    type="button"
                    className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${view.active ? "bg-navy text-beige" : "border border-navy/10 bg-white text-navy hover:bg-beige"}`}
                  >
                    {view.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 rounded-full border border-navy/10 bg-beige px-3 py-2 text-navy">
                <ChevronRight className="size-4 rotate-180" />
                <p className="px-1 text-sm font-semibold">23-29 March</p>
                <ChevronRight className="size-4" />
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { label: "All", active: true },
                  { label: "Free", active: false },
                  { label: "Show clubs too", active: false },
                ].map((filter) => (
                  <button
                    key={filter.label}
                    type="button"
                    className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${filter.active ? "bg-salmon text-white" : "border border-navy/10 bg-white text-navy hover:bg-beige"}`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-navy/10">
              <div className="grid grid-cols-7 border-b border-navy/10 bg-beige/80">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <div
                    key={day}
                    className="px-3 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-navy/55"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7">
                {[
                  {
                    day: "Mon 23",
                    items: [],
                  },
                  {
                    day: "Tue 24",
                    items: [
                      { title: "Museum craft morning", kind: "event" },
                    ],
                  },
                  {
                    day: "Wed 25",
                    items: [
                      { title: "Stagecoach", kind: "creative-class" },
                      { title: "Storytelling", kind: "creative-class" },
                    ],
                  },
                  {
                    day: "Thu 26",
                    items: [
                      { title: "Free family workshop", kind: "event" },
                    ],
                  },
                  {
                    day: "Fri 27",
                    items: [],
                  },
                  {
                    day: "Sat 28",
                    items: [
                      { title: "Botanic trail", kind: "outdoors" },
                    ],
                  },
                  {
                    day: "Sun 29",
                    items: [
                      { title: "Football fundamentals", kind: "health-class" },
                    ],
                  },
                ].map((column, index) => (
                  <div
                    key={column.day}
                    className={`min-h-44 space-y-3 border-navy/10 bg-white p-3 ${index === 6 ? "" : "border-r"}`}
                  >
                    <p className="text-sm font-semibold text-navy">{column.day}</p>
                    {column.items.length === 0 ? (
                      <div className="rounded-2xl border border-dashed border-navy/10 px-3 py-4 font-sans text-sm text-navy/35">
                        Nothing booked in
                      </div>
                    ) : (
                      column.items.map((item) => (
                        <div
                          key={item.title}
                          className={`rounded-2xl px-3 py-2.5 ${
                            item.kind === "creative-class"
                              ? "bg-kotr-blue text-white"
                              : item.kind === "health-class"
                                ? "bg-kotr-green text-white"
                                : "bg-salmon text-white"
                          }`}
                        >
                          <p className="font-sans text-[13px] font-medium leading-[1.15rem]">
                            {item.title}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionHeading
            title="Rocky Chat"
            description="Rocky should feel like a proper KOTR guide, not a generic website chatbot. Warm, clear, and easy to start using."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
                AI Chat
              </p>
              <h3 className="mt-4 max-w-[30rem] text-3xl font-bold leading-tight text-navy md:text-4xl">
                Meet Rocky
              </h3>
              <p className="mt-5 max-w-[32rem] font-sans text-lg leading-8 text-navy/72">
                A helpful little KOTR sidekick for when you just want a straight answer, a nudge in the right direction, or help finding the right page without opening twelve tabs.
              </p>
              <p className="mt-5 max-w-[30rem] font-sans text-sm leading-7 text-navy/60">
                Keep Rocky friendly, honest, and specific. He should suggest next steps, admit when he is not sure, and never sound like a corporate support bot.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "What’s on this weekend for little kids?",
                  "Where can I take a toddler if it rains?",
                  "How do I find school forms quickly?",
                  "What clubs are good for older kids?",
                ].map((question) => (
                  <button
                    key={question}
                    type="button"
                    className="rounded-full border border-navy/10 bg-beige px-4 py-2 font-sans text-sm text-navy transition-colors hover:bg-white"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_18px_60px_rgba(45,56,77,0.08)] backdrop-blur-sm md:p-8">
              <div className="flex items-center gap-4">
                <div className="relative size-20 shrink-0 overflow-hidden rounded-[1.5rem] bg-beige">
                  <Image
                    src={rockyMascot}
                    alt="Rocky mascot"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-salmon">
                    Assistant
                  </p>
                  <h4 className="mt-1 text-2xl font-bold text-navy">Rocky</h4>
                  <p className="mt-2 font-sans text-sm leading-6 text-navy/60">
                    Warm, practical, and local.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 rounded-[1.5rem] bg-[#fffdfa] p-4">
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-[1.5rem] rounded-br-md bg-salmon px-4 py-3 font-sans text-sm leading-6 text-white">
                    What can I do with a four-year-old if it’s raining?
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-navy text-beige">
                    <Sparkles className="size-4" />
                  </div>
                  <div className="max-w-[85%] rounded-[1.5rem] rounded-bl-md bg-white px-4 py-3 shadow-[0_10px_24px_rgba(45,56,77,0.06)]">
                    <p className="font-sans text-sm leading-6 text-navy/80">
                      A few easy ones: King&apos;s Bastion if you need a proper outing, Rock Escape Rooms if they&apos;re older, or the library storytelling sessions if you want something calmer. I can narrow that down by age if you want.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-[1.25rem] border border-navy/10 bg-beige px-4 py-3">
                <MessageCircle className="size-5 text-salmon" />
                <p className="flex-1 font-sans text-sm text-navy/45">
                  Ask Rocky something...
                </p>
                <SendHorizonal className="size-5 text-navy/35" />
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-white/60 p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
              Rocky Rules
            </h4>
            <p className="font-sans text-base text-navy">
              Rocky should have a dedicated full-page chat experience and can also later become a floating launcher. Suggested questions should always be visible near the empty state so the page never feels blank or intimidating.
            </p>
            <p className="mt-3 font-sans text-base text-navy">
              Keep the mascot visible in the chat experience. Rocky should feel like part of KOTR, not like a bolted-on support widget.
            </p>
          </div>
        </section>

        {/* ─── COLOUR PALETTE ─── */}
        <section>
          <SectionHeading
            title="Colour Palette"
            description="Warm, friendly colours inspired by the Gibraltar community. Salmon for primary actions, beige background, dark blue for text."
          />

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ColourSwatch
              name="Salmon"
              hex="#ea8685"
              token="primary"
              usage="Primary buttons, active states, links"
              className="bg-salmon text-white"
            />
            <ColourSwatch
              name="Beige"
              hex="#FFF0E3"
              token="background"
              usage="Page background, card backgrounds"
              className="bg-beige text-navy border border-border"
            />
            <ColourSwatch
              name="Dark Blue"
              hex="#2d384d"
              token="secondary"
              usage="Secondary buttons, headings, nav, text"
              className="bg-navy text-beige"
            />
            <ColourSwatch
              name="Green"
              hex="#9baa86"
              token="kotr-green"
              usage="Nature categories, success states"
              className="bg-kotr-green text-white"
            />
            <ColourSwatch
              name="Orange"
              hex="#fba07f"
              token="kotr-orange"
              usage="Events, seasonal highlights, warnings"
              className="bg-kotr-orange text-white"
            />
            <ColourSwatch
              name="Pink"
              hex="#ee81a1"
              token="kotr-pink"
              usage="Fun/playful sections, accent cards"
              className="bg-kotr-pink text-white"
            />
            <ColourSwatch
              name="Light Blue"
              hex="#92b6cc"
              token="kotr-blue"
              usage="Info states, calm/neutral categories"
              className="bg-kotr-blue text-white"
            />
            <ColourSwatch
              name="Yellow"
              hex="#f9d874"
              token="kotr-yellow"
              usage="Featured items, star ratings, highlights"
              className="bg-kotr-yellow text-navy"
            />
            <ColourSwatch
              name="Muted Teal"
              hex="#a1aca9"
              token="kotr-teal"
              usage="Muted/disabled states, subtle borders"
              className="bg-kotr-teal text-white"
            />
          </div>
        </section>

        <section>
          <SectionHeading
            title="Club Detail Pages"
            description="Individual club and class pages should stay useful for both evergreen info and upcoming one-off dates."
          />

          <div className="mt-8 rounded-3xl bg-white/60 p-8">
            <p className="font-sans text-base leading-7 text-navy">
              If a dated one-off event clearly belongs to a club or class, show
              it underneath the gallery with the eyebrow <code className="rounded bg-navy/10 px-1.5 py-0.5 text-sm">UPCOMING</code>.
              Use the same soft salmon event-card language as the calendar, but
              without embedding the calendar itself.
            </p>
          </div>
        </section>

        {/* ─── BUTTONS ─── */}
        <section>
          <SectionHeading
            title="Buttons"
            description="Large, rounded, and tappable. Minimum 48px height for touch-friendliness. Salmon and dark blue buttons lighten on hover, while white buttons flip to dark blue. Button labels stay in normal case, with a clear pointer cursor."
          />

          <div className="mt-8 space-y-8">
            {/* Default size */}
            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-salmon">
                Default Size — h-14, rounded-2xl
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Primary Action</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link Style</Button>
              </div>
            </div>

            {/* Large size */}
            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-salmon">
                Large Size — h-16, rounded-2xl
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="default">
                  Primary Large
                </Button>
                <Button size="lg" variant="secondary">
                  Secondary Large
                </Button>
                <Button size="lg" variant="outline">
                  Outline Large
                </Button>
              </div>
            </div>

            {/* Small size */}
            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-salmon">
                Small Size — h-10, rounded-xl
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button size="sm" variant="default">
                  Small
                </Button>
                <Button size="sm" variant="secondary">
                  Small
                </Button>
                <Button size="sm" variant="outline">
                  Small
                </Button>
              </div>
            </div>

            {/* With icons */}
            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-salmon">
                With Icons
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Instagram /> Follow Us
                </Button>
                <Button variant="secondary">
                  <Phone /> Call Now
                </Button>
                <Button variant="outline">
                  Learn More <ArrowRight />
                </Button>
              </div>
            </div>

            {/* On dark background */}
            <div className="rounded-3xl bg-navy p-8">
              <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-salmon">
                On Dark Background
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button>Primary Action</Button>
                <Button className="border-beige/30 bg-transparent text-beige hover:border-beige/50 hover:bg-white/12 hover:text-beige">
                  Outline on Dark
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CARDS ─── */}
        <section>
          <SectionHeading
            title="Category Cards"
            description="Large, colourful, rounded. Each category gets its own colour. No shadows — colour creates hierarchy."
          />

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <CategoryCard
              title="Clubs & Classes"
              subtitle="Sports, classes & more"
              icon={Volleyball}
              color="bg-salmon"
            />
            <CategoryCard
              title="What&apos;s On"
              subtitle="What's coming up"
              icon={CalendarHeart}
              color="bg-kotr-orange"
            />
            <CategoryCard
              title="Shop Local"
              subtitle="Gibraltar finds"
              icon={ShoppingBag}
              color="bg-kotr-green"
            />
            <CategoryCard
              title="Forms"
              subtitle="School & family forms"
              icon={FileText}
              color="bg-kotr-blue"
            />
            <CategoryCard
              title="Phone Numbers"
              subtitle="Contacts you'll need"
              icon={Phone}
              color="bg-navy"
            />
            <CategoryCard
              title="Family Map"
              subtitle="Useful local stops"
              icon={Baby}
              color="bg-kotr-pink"
            />
            <CategoryCard
              title="Duty Pharmacy"
              subtitle="Open today"
              icon={Pill}
              color="bg-kotr-yellow"
              textColor="text-navy"
            />
            <CategoryCard
              title="Home"
              subtitle="Back to start"
              icon={Home}
              color="bg-kotr-teal"
            />
          </div>
        </section>

        {/* ─── ICONS ─── */}
        <section>
          <SectionHeading
            title="Icons"
            description="Lucide React icons throughout. Stroke width 1.8, sized with Tailwind utility classes."
          />

          <div className="mt-8 rounded-3xl bg-white/60 p-8">
            <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8">
              {[
                { Icon: Home, label: "Home" },
                { Icon: Search, label: "Search" },
                { Icon: Menu, label: "Menu" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Mail, label: "Mail" },
                { Icon: Phone, label: "Phone" },
                { Icon: Heart, label: "Heart" },
                { Icon: Star, label: "Star" },
                { Icon: ArrowRight, label: "Arrow" },
                { Icon: ChevronRight, label: "Chevron" },
                { Icon: Info, label: "Useful Stuff" },
                { Icon: MapPin, label: "MapPin" },
                { Icon: Clock, label: "Clock" },
                { Icon: Users, label: "Users" },
                { Icon: Baby, label: "Baby" },
                { Icon: Pill, label: "Pill" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 text-navy"
                >
                  <Icon className="size-8" strokeWidth={1.8} />
                  <span className="text-xs text-navy/60">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-beige p-4">
              <p className="font-sans text-sm text-navy/60">
                <code className="rounded bg-navy/10 px-1.5 py-0.5 text-xs">
                  npm install lucide-react
                </code>{" "}
                — import icons individually for tree-shaking.
              </p>
            </div>
          </div>
        </section>

        {/* ─── LAYOUT ─── */}
        <section>
          <SectionHeading
            title="Layout Patterns"
            description="Mobile-first responsive grids. 1 column on mobile, 2 on tablet, 3 on desktop."
          />

          <div className="mt-8 space-y-8">
            {/* Page container */}
            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
                Page Container
              </h4>
              <div className="rounded-2xl border-2 border-dashed border-salmon/30 p-6">
                <div className="mx-auto max-w-[61rem] rounded-xl border-2 border-dashed border-navy/20 p-4 text-center text-sm text-navy/60">
                  max-w-[61rem] mx-auto
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
                Floating Navbar Width
              </h4>
              <div className="rounded-[2rem] bg-navy px-6 py-5 text-center text-sm text-beige/80">
                Floating navbar width must match the white body tables below and
                never extend beyond them.
              </div>
            </div>

            {/* Responsive grid demo */}
            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
                Category Grid — responsive
              </h4>
              <p className="mb-6 font-sans text-sm text-navy/60">
                grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "bg-salmon",
                  "bg-kotr-orange",
                  "bg-kotr-green",
                  "bg-kotr-blue",
                  "bg-navy",
                  "bg-kotr-pink",
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`flex h-32 items-center justify-center rounded-3xl text-white font-bold ${color}`}
                  >
                    Card {i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Full width card */}
            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
                Full Width Card
              </h4>
              <div className="rounded-3xl bg-navy p-8 text-center text-beige">
                <p className="text-2xl font-bold">Hero or CTA Section</p>
                <p className="mt-2 font-sans text-beige/70">
                  Full-width cards span the entire grid
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SPACING ─── */}
        <section>
          <SectionHeading
            title="Spacing"
            description="Generous spacing keeps the interface breathable. Think: parent scrolling one-handed with a toddler."
          />

          <div className="mt-8 rounded-3xl bg-white/60 p-8">
            <div className="space-y-6">
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-salmon">
                  Between Tables
                </h4>
                <div className="space-y-6">
                  <div className="h-14 rounded-[1.75rem] border border-navy/8 bg-white/85"></div>
                  <div className="h-14 rounded-[1.75rem] border border-navy/8 bg-white/85"></div>
                </div>
                <p className="mt-2 font-sans text-xs text-navy/60">
                  gap-6 (24px) minimum between stacked white tables
                </p>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-salmon">
                  Before Footer
                </h4>
                <div className="space-y-6">
                  <div className="h-14 rounded-[1.75rem] border border-navy/8 bg-white/85"></div>
                  <div className="h-8 rounded-xl bg-navy/12"></div>
                </div>
                <p className="mt-2 font-sans text-xs text-navy/60">
                  gap-6 (24px) minimum between the final white table and footer
                </p>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-salmon">
                  Between Cards
                </h4>
                <div className="flex gap-4">
                  <div className="h-16 flex-1 rounded-2xl bg-salmon/20 flex items-center justify-center text-xs text-navy/60">Card</div>
                  <div className="h-16 flex-1 rounded-2xl bg-salmon/20 flex items-center justify-center text-xs text-navy/60">Card</div>
                  <div className="h-16 flex-1 rounded-2xl bg-salmon/20 flex items-center justify-center text-xs text-navy/60">Card</div>
                </div>
                <p className="mt-2 font-sans text-xs text-navy/60">gap-4 (16px)</p>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-salmon">
                  Between Sections
                </h4>
                <div className="space-y-8">
                  <div className="h-12 rounded-2xl bg-kotr-blue/20 flex items-center justify-center text-xs text-navy/60">Section 1</div>
                  <div className="h-12 rounded-2xl bg-kotr-blue/20 flex items-center justify-center text-xs text-navy/60">Section 2</div>
                </div>
                <p className="mt-2 font-sans text-xs text-navy/60">space-y-8 (32px)</p>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-salmon">
                  Card Padding
                </h4>
                <div className="rounded-3xl border-2 border-dashed border-navy/20 p-8">
                  <div className="rounded-xl bg-navy/5 p-4 text-center text-xs text-navy/60">
                    Content inside card
                  </div>
                </div>
                <p className="mt-2 font-sans text-xs text-navy/60">p-8 (32px) for cards, p-6 (24px) minimum</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── COMPONENT EXAMPLES ─── */}
        <section>
          <SectionHeading
            title="Component Examples"
            description="Breadcrumbs, badges, and other UI elements."
          />

          <div className="mt-8 space-y-8">
            {/* Breadcrumbs */}
            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
                Breadcrumbs
              </h4>
              <nav className="flex items-center gap-2 font-sans text-sm text-navy/60">
                <a href="#" className="text-salmon hover:underline">
                  Home
                </a>
                <ChevronRight className="size-4" />
                <a href="#" className="text-salmon hover:underline">
                  Clubs & Classes
                </a>
                <ChevronRight className="size-4" />
                <span className="text-navy font-medium">Swimming</span>
              </nav>
            </div>

            {/* Badges */}
            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
                Badges
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center rounded-full bg-salmon/15 px-4 py-1.5 text-sm font-medium text-salmon">
                  New
                </span>
                <span className="inline-flex items-center rounded-full bg-kotr-green/15 px-4 py-1.5 text-sm font-medium text-kotr-green">
                  Open
                </span>
                <span className="inline-flex items-center rounded-full bg-kotr-orange/15 px-4 py-1.5 text-sm font-medium text-kotr-orange">
                  Coming Soon
                </span>
                <span className="inline-flex items-center rounded-full bg-navy/10 px-4 py-1.5 text-sm font-medium text-navy">
                  Updated
                </span>
                <span className="inline-flex items-center rounded-full bg-kotr-blue/15 px-4 py-1.5 text-sm font-medium text-kotr-blue">
                  Useful Stuff
                </span>
              </div>
            </div>

            {/* List item */}
            <div className="rounded-3xl bg-white/60 p-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-salmon">
                List Items
              </h4>
              <div className="space-y-3">
                {[
                  { label: "GHA Health Centre", detail: "+350 200 72266" },
                  { label: "Royal Gibraltar Police", detail: "+350 200 72500" },
                  { label: "Fire & Rescue", detail: "+350 200 75566" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl bg-beige p-4"
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="size-5 text-salmon" strokeWidth={1.8} />
                      <span className="font-medium text-navy">
                        {item.label}
                      </span>
                    </div>
                    <span className="font-sans text-sm text-navy/60">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-navy text-beige">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center">
          <p className="font-sans text-sm text-beige/60">
            A friendly little guide for Gibraltar families.
          </p>
          <p className="mt-1 font-sans text-xs text-beige/40">
            Always double-check official pages and businesses directly for the
            latest details.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ─── Helper components ─── */

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-navy">{title}</h2>
      <p className="mt-2 font-sans text-base text-navy/60">{description}</p>
    </div>
  );
}

function ColourSwatch({
  name,
  hex,
  token,
  usage,
  className,
}: {
  name: string;
  hex: string;
  token: string;
  usage: string;
  className: string;
}) {
  return (
    <div className={`flex flex-col gap-3 rounded-3xl p-6 ${className}`}>
      <span className="text-xl font-bold">{name}</span>
      <span className="font-mono text-sm opacity-80">{hex}</span>
      <span className="text-xs opacity-60">Token: {token}</span>
      <span className="font-sans text-sm opacity-70">{usage}</span>
    </div>
  );
}
