# Refactoring Changes

A summary of the cleanup and refactor applied to the SFA Solutions frontend.

## Overview

- Modularized routing, i18n, blog loading, and feedback handling.
- Removed hardcoded strings and fixed RTL/LTR flicker.
- Fixed several layout/overflow issues on mobile.
- Added per-page titles and meta descriptions.
- Split heavy pages/assets into lazy-loaded chunks.
- Removed unused dependencies and documented backend integration.

## Verification

| Command               | Result                                             |
| --------------------- | -------------------------------------------------- |
| `yarn lint`           | Pass                                               |
| `yarn typecheck`      | Pass                                               |
| `yarn build`          | Pass                                               |
| `yarn format:check`   | Pass                                               |
| Dev server smoke test | Pass (`/`, `/src/main.tsx`, blog URL returned 200) |

Initial JavaScript bundle decreased from **~1.50 MB** to **~739 KB** (before
gzip). The dashboard/Recharts chunk (~376 KB), feedback page (~151 KB), blog
articles, and the 404 animation are now loaded only when needed.

## Routing and app structure

- `src/App.tsx`
  - Lazy-loads all non-home pages.
  - Wraps routes in a shared `Suspense` boundary with `PageLoader`.
  - Replaced generated per-blog routes with a single `/blogs/:blogId` route.
  - Removed inline i18n/document-direction logic.
- `src/constants/routes.ts`
  - Added the missing leading slash to `ADMIN_DASHBOARD`.
  - Added `getBlogPath(blogId)`.
- `src/lib/query-client.ts` (new)
  - Central `QueryClient` with sensible query/mutation defaults.
- `src/constants/blogs.ts` (new)
  - Blog metadata is now a typed `readonly` collection.
  - Articles are lazy-loaded via `React.lazy`.
  - Added `getBlogById()`.
- `src/pages/BlogsPage/BlogPostPage.tsx` (new)
  - Looks up the article by route param and renders the lazy component.
  - Shows a not-found state for unknown blog IDs.
- `src/types/blog.ts`
  - Replaced the old `component: JSX.Element` field with a typed lazy component.
- `src/pages/index.ts`
  - Exports all route-level pages, including feedback and admin.

## Blog organization

- Moved article components out of the generic component folder:
  - `src/components/blogs/SoilTextureTriangle.tsx` →
    `src/pages/BlogsPage/articles/SoilTextureTriangle.tsx`
  - `src/components/blogs/SymphonyOfDroplets.tsx` →
    `src/pages/BlogsPage/articles/SymphonyOfDroplets.tsx`
- Removed `src/constants/blogs-data.tsx`.
- Blog card now uses `getBlogPath()` and responsive widths.
- Article images no longer overflow small screens (`w-xl` / `w-xs` fixed widths
  replaced).
- Fixed “Read more” hardcoded text (now localized).

## Internationalization

- `src/i18n/resources.ts`
  - Single source of truth for English and Persian resources.
  - English resources double as the source of typed translation keys.
- `src/i18n/i18n.ts`
  - `document.lang` and `document.dir` are applied synchronously during
    initialization and on `languageChanged`.
  - Removed the old `useEffect` from `App`, fixing RTL/LTR flicker.
  - Kept the existing localStorage language key to preserve user preference.
- `src/types/i18next.d.ts`
  - Updated to use the new default resource map.
- Added namespaces/locales:
  - `src/i18n/locales/en/blog.json` (new)
  - `src/i18n/locales/fa/blog.json` (new)
  - `src/i18n/locales/en/feedback.json` (new)
  - `src/i18n/locales/fa/feedback.json` (new)
  - Extended `common.json` with achievements, read-more, 404, and social labels.
- `src/components/LanguageChanger.tsx`
  - Shows the current language name.
  - Uses translated labels and typed language values.
  - Icon-only trigger on small screens.

## Hooks

- `src/hooks/use-media-query.ts` (new)
  - `useMediaQuery` built on `useSyncExternalStore`.
  - `useIsMobile` now uses the shared implementation.
  - Avoids an incorrect first render and removes duplicated listeners.
- `src/hooks/use-page-title.ts` (new)
  - Updates `document.title` per page.
  - Optionally updates the `meta[name="description"]` tag.
- `src/hooks/use-is-mobile.ts` (deleted)
  - Replaced by the new media-query hook.
- `src/hooks/index.ts`
  - Updated exports.

## Components and accessibility

- `src/components/Header.tsx`
  - Solid/non-glass background.
  - Responsive nav (icon-only on phones, labeled on larger screens).
  - Active-route styling.
  - Login button now renders as a `Link` via Base UI’s `render` prop.
- `src/components/Footer.tsx`
  - Removed JS breakpoint logic; uses a responsive grid.
  - Removed dependency on fixed footer heights.
  - Contact details come from `src/constants/site.ts`.
  - Social buttons have accessible labels.
  - Added lazy/async image hints and fixed logo alt text.
- `src/components/TeamIcon.tsx`
  - Unchanged behavior; still exported through the component barrel.
- `src/pages/HomePage/components/HeroSection.tsx`
  - Uses a `<picture>` element for responsive hero images (no JS breakpoint).
  - Responsive heading sizes.
  - CTA button renders as a `Link`.
  - Hero image marked `fetchPriority="high"`.
- `src/pages/HomePage/components/SfaSection.tsx`
  - Features rendered from a data array instead of repeated JSX.
- `src/pages/HomePage/components/ResearchSection.tsx`
  - Uses `motion/react` instead of the undeclared `framer-motion`.
  - Stats rendered from a data array.
  - Cleaner IntersectionObserver cleanup.
- `src/pages/HomePage/components/AchievementSection.tsx`
  - Uses `motion/react`.
  - Localized heading.
  - Staggered animation delays.
  - Responsive card widths.
- `src/pages/HomePage/components/TeamSection.tsx`
  - Social icons are real links (`mailto`, LinkedIn, website) with ARIA labels.
  - Respects `prefers-reduced-motion` for the mobile auto-scroll.
  - Stable React keys.
  - Uses the new `useIsMobile` implementation.
- `src/pages/HomePage/HomePage.tsx`
  - Resets the page title when navigating home.
- `src/pages/NotFoundPage/` (restructured from a single file)
  - `NotFoundPage.tsx`: visual 404 page.
  - `NotFoundContent.tsx`: reusable text/CTA block without the GIF.
  - `index.ts`: barrel export.
  - Uses `Link` instead of a full-page `<a href>` reload.
  - Responsive sizing and localized copy.
- `src/pages/BlogsPage/components/BlogCard.tsx`
  - Responsive card sizing.
  - Localized “Read more”.
  - Duplicate image link removed from the accessibility tree.
  - Lazy image loading.
- `src/pages/BlogsPage/BlogsPage.tsx`
  - Added heading, subtitle, empty state, and page metadata.
- `src/pages/AdminDashboardPage.tsx`
  - Responsive container widths.
  - Page title/meta.
  - Fixed chart component export name.
- `src/components/charts/RegisteredUsersChart.tsx`
  - Export renamed from `RegisteredUserChart` to `RegisteredUsersChart`.
- `src/components/charts/FieldsPerCropChart.tsx`
  - Corrected `totalVisitors` variable to `totalFields`.

## Forms and feedback

- `src/components/forms/feedback-schema.ts` (new)
  - Zod schema extracted from the form.
  - Localized validation messages.
  - File type and 5 MB size validation.
  - Shared category values.
- `src/components/forms/FeedbackForm.tsx`
  - Validates with the extracted schema.
  - Submits via a React Query mutation.
  - Shows loading state, success/error toasts, and resets on success.
  - Localized labels and placeholders.
- `src/services/feedback.ts` (new)
  - Sends `multipart/form-data` to the configured backend.
  - Supports `VITE_API_BASE_URL` or `VITE_FEEDBACK_ENDPOINT`.
  - Falls back to a simulated local request when no endpoint is configured.
- `src/components/tables/feedback-data.ts` (new)
  - Typed sample feedback records used until the API is connected.
- `src/components/tables/FeedbackTable.tsx`
  - Typed props and records.
  - Localized headers/status/categories.
  - Empty state.
  - Added missing row keys.
  - Locale-aware date formatting.
- `src/pages/FeedbackPage.tsx`
  - Wider table container.
  - Page title/meta.
  - Cleaner spacing and separator.

## Fields

- `InputField`, `TextareaField`, `SelectField`, `ImageField`
  - Stable field IDs based on the field name instead of the label text.
  - Avoids invalid IDs when a label contains spaces.

## Styles

- `src/styles/responsive.css`
  - Removed duplicate Tailwind/plugin imports.
  - Removed fixed `--footer-height` and `--main-height` variables.
- `src/styles/index.css`
  - Layout now uses a flexible main area instead of fixed header/footer heights.
  - Removed `w-screen` in favor of `w-full`.
  - Added `prefers-reduced-motion` handling for the team marquee.

## UI primitives

- `src/components/ui/button.tsx`
  - Replaced empty CVA variants with the actual CSS-module class names.
- `src/components/ui/toaster.tsx`
  - Removed the `next-themes` dependency (there was no `ThemeProvider`).
  - Uses Sonner’s system theme directly.

## Configuration and tooling

- `package.json`
  - Added `typecheck`, `lint:fix`, and `format:check` scripts.
  - `format` now explicitly uses `--write`.
  - Removed unused dependencies:
    - `moment`
    - `@tanstack/react-table`
    - `embla-carousel-autoplay`
    - `next-themes`
    - `react-is`
    - `autoprefixer`
    - `eslint-import-resolver-typescript`
- `.gitignore`
  - Added `*.tsbuildinfo`, `.env`, `.env.*`, and kept `.env.example`.
- `.prettierignore`
  - Added `yarn.lock`, `.env*`, and `*.tsbuildinfo`.
- `eslint.config.js`
  - Removed the unused import-resolver settings.
- `index.html`
  - Added a meta description and theme color.
- `README.md`
  - Replaced the Vite template with real project documentation, scripts,
    environment variables, API contract, and structure.
- `.env.example` (new)
  - Documents `VITE_API_BASE_URL` and `VITE_FEEDBACK_ENDPOINT`.
- `src/vite-env.d.ts` (new)
  - Types the new environment variables.
- `tsconfig.tsbuildinfo`
  - Removed from version control and ignored.
- `public/favicon/site.webmanifest`
  - Added a trailing newline during formatting.

## Deleted / moved files

| File                                           | Change                                     |
| ---------------------------------------------- | ------------------------------------------ |
| `src/components/blogs/SoilTextureTriangle.tsx` | Moved to `src/pages/BlogsPage/articles/`   |
| `src/components/blogs/SymphonyOfDroplets.tsx`  | Moved to `src/pages/BlogsPage/articles/`   |
| `src/constants/blogs-data.tsx`                 | Replaced by `src/constants/blogs.ts`       |
| `src/hooks/use-is-mobile.ts`                   | Replaced by `src/hooks/use-media-query.ts` |
| `src/pages/NotFoundPage.tsx`                   | Split into `src/pages/NotFoundPage/`       |
| `tsconfig.tsbuildinfo`                         | Untracked and ignored                      |

## New files

```text
.env.example
src/components/forms/feedback-schema.ts
src/components/helpers/PageLoader.tsx
src/components/tables/feedback-data.ts
src/constants/blogs.ts
src/constants/site.ts
src/hooks/use-media-query.ts
src/hooks/use-page-title.ts
src/i18n/locales/en/blog.json
src/i18n/locales/en/feedback.json
src/i18n/locales/fa/blog.json
src/i18n/locales/fa/feedback.json
src/lib/query-client.ts
src/pages/BlogsPage/BlogPostPage.tsx
src/pages/BlogsPage/articles/SoilTextureTriangle.tsx
src/pages/BlogsPage/articles/SymphonyOfDroplets.tsx
src/pages/NotFoundPage/NotFoundContent.tsx
src/pages/NotFoundPage/NotFoundPage.tsx
src/pages/NotFoundPage/index.ts
src/services/feedback.ts
src/vite-env.d.ts
```

## Backend integration

Set one of the following in `.env`:

```bash
VITE_API_BASE_URL=https://api.example.com
# or
VITE_FEEDBACK_ENDPOINT=https://api.example.com/feedback
```

When configured, feedback is posted as `multipart/form-data` with `category`,
`title`, `content`, and optional `image`. When neither is set, the form
simulates a successful submission locally.

## Remaining placeholders

- Dashboard chart data and feedback table rows are still sample data.
- Footer social profile links are placeholders marked with a `TODO`.
- `yarn.lock` was not regenerated because the configured npm mirror returned 500
  errors during dependency removal. Run `yarn install` when the registry is
  reachable to prune the removed packages from the lockfile.

## Blog localization (follow-up)

- Added full English and Persian article content under:
  - `src/i18n/locales/en/blog/soil-texture-triangle.json`
  - `src/i18n/locales/fa/blog/soil-texture-triangle.json`
  - `src/i18n/locales/en/blog/symphony-of-droplets.json`
  - `src/i18n/locales/fa/blog/symphony-of-droplets.json`
- Registered the article content as i18n namespaces:
  - `blog-soil-texture-triangle`
  - `blog-symphony-of-droplets`
- Blog titles and descriptions are now read from i18n instead of being hardcoded
  in `BLOGS`.
- Added `useBlogContent()` to load the localized content bundle for an article.
- Reworked both article components to render from the localized structured
  content instead of hardcoded JSX text.
- Added a localized “Management” label for the soil texture guide.
- Added blog content types (`ReferenceArticleContent`,
  `NarrativeArticleContent`) to `src/types/blog.ts`.
