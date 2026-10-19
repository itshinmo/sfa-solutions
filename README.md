# SFA Solutions

Marketing site and admin dashboard for **Smart Farm Aqua (SFA)** — a platform
for AI-assisted irrigation and soil management.

The site is a client-side React application. The backend lives in a separate
repository and is consumed through the feedback service described below.

## Tech stack

- React 19 + TypeScript
- Vite 8 (Rolldown) with the React Compiler preset
- Tailwind CSS v4
- React Router 7
- TanStack Query
- React Hook Form + Zod
- i18next / react-i18next (English + Persian, LTR/RTL)
- Recharts, Motion, Base UI

## Getting started

```bash
yarn install
yarn dev
```

The dev server runs at the URL printed by Vite. Production build:

```bash
yarn build
yarn preview
```

### Scripts

| Script              | Description                         |
| ------------------- | ----------------------------------- |
| `yarn dev`          | Start the Vite dev server           |
| `yarn build`        | Type-check and build for production |
| `yarn typecheck`    | Run TypeScript only                 |
| `yarn lint`         | ESLint + type-check                 |
| `yarn lint:fix`     | ESLint with autofix                 |
| `yarn format`       | Format the repository with Prettier |
| `yarn format:check` | Check formatting without writing    |
| `yarn preview`      | Preview the production build        |

## Environment variables

Copy `.env.example` to `.env` and fill in the backend URLs when they are
available:

```bash
VITE_API_BASE_URL=https://api.example.com
# or point directly at the endpoint:
VITE_FEEDBACK_ENDPOINT=https://api.example.com/feedback
```

If neither value is set, feedback submissions are **simulated locally** so the
form stays usable during development.

### Feedback API contract

The feedback form sends `multipart/form-data` to the configured endpoint with:

| Field      | Type   | Required |
| ---------- | ------ | -------- |
| `category` | string | yes      |
| `title`    | string | yes      |
| `content`  | string | yes      |
| `image`    | File   | no       |

A non-2xx response is treated as an error and shown as a toast.

## Project structure

```text
src/
├── assets/            # Images, logos, blog media
├── components/
│   ├── fields/        # Reusable React Hook Form fields
│   ├── forms/         # Feature forms + Zod schemas
│   ├── helpers/       # Small shared components (CountUp, PageLoader)
│   ├── tables/        # Data tables
│   ├── ui/            # Base UI / shadcn-style primitives
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── LanguageChanger.tsx
├── constants/         # Routes, site metadata, blog metadata
├── hooks/             # useMediaQuery, usePageTitle, …
├── i18n/              # i18next setup + en/fa locale files
├── layouts/           # MainLayout (header + outlet + footer)
├── lib/               # App-wide singletons (QueryClient)
├── pages/             # Route-level pages
│   ├── BlogsPage/
│   │   ├── articles/  # Lazy-loaded blog articles
│   │   └── components/
│   ├── HomePage/
│   └── NotFoundPage/
├── services/          # Backend API calls
├── styles/            # Tailwind theme + global CSS
├── types/             # Shared types and i18next augmentation
└── utils/             # `cn()` and other helpers
```

Route-level pages other than the home page are code-split, and blog articles are
lazy-loaded on demand.

## Internationalization

- English and Persian resources live in `src/i18n/locales`.
- The document `lang` and `dir` are updated synchronously from the i18n
  instance, so RTL does not flash on reload or Fast Refresh.
- Add new namespaces to `src/i18n/resources.ts`; the English resources are the
  source of truth for typed `t()` keys.

## Notes / known limitations

- The admin dashboard and feedback table currently render sample data until the
  backend endpoints are connected.
- Social links in the footer are placeholders (see the `TODO` in
  `src/components/Footer.tsx`).
