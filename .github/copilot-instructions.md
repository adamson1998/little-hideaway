# Copilot & AI Agent Instructions for Little Hide Away Frontend

## Project Overview
- **Stack:** Vite + React + TypeScript + shadcn-ui + TailwindCSS
- **Purpose:** Booking and information site for Little Hide Away Apartment
- **Main entry:** `src/App.tsx` (routing, providers)
- **Pages:** `src/pages/` (Index, Suites, Gallery, Experience, About, NotFound)
- **Layout:** `src/components/layout/` (Header, Footer, Layout)
- **UI Components:** `src/components/ui/` (atomic, shadcn-ui style, use `cn` from `src/lib/utils.ts`)
- **Config:** `src/config/site.ts` (site info, booking, contact, room data)

## Key Patterns & Conventions
- **Routing:** Uses `react-router-dom` for SPA navigation. All routes defined in `App.tsx`.
- **Component Import Aliases:** Use `@/` for `src/` (see `vite.config.ts` alias).
- **UI Variants:** Use `buttonVariants` and similar CVA patterns for consistent styling.
- **State/Async:** Use React hooks, `@tanstack/react-query` for async data (see `App.tsx`).
- **Booking:** Booking actions use `siteConfig.bookingUrl` and open in new tab (see `BookingSearchBar.tsx`).
- **Forms:** Use `react-hook-form` and shadcn-ui form components for validation/UI.
- **Toasts:** Use both `Toaster` and `Sonner` from `src/components/ui/` for notifications.
- **Utilities:** Use `cn` from `src/lib/utils.ts` for class merging.

## Developer Workflows
- **Install:** `npm i`
- **Dev server:** `npm run dev` (localhost:8080)
- **Build:** `npm run build`
- **Preview:** `npm run preview`
- **Lint:** `npm run lint`
- **Config changes:** Update `src/config/site.ts` for site/room/contact info.

## Project-Specific Notes
- **Component Tagging:** Uses `lovable-tagger` in dev mode (see `vite.config.ts`).
- **No backend:** All data/config is static or client-side.
- **Room data:** Extend `rooms` array in `src/config/site.ts` for new rooms.
- **Booking integration:** Booking URL is external; query params are built in `BookingSearchBar.tsx`.
- **UI Consistency:** Use shadcn-ui patterns and atomic components from `src/components/ui/`.
- **Aliases:** Always use `@/` for imports from `src/`.

## Examples
- **Add a new page:** Create a file in `src/pages/`, add a `<Route />` in `App.tsx`.
- **Add a new room:** Add to `rooms` in `src/config/site.ts`.
- **Update booking:** Change `bookingUrl` in `siteConfig`.

---
For more, see `README.md` and `src/config/site.ts`. Keep instructions concise and project-specific.