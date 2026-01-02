# International-School Families in Singapore: Context for Consumer Patterns

A pnpm + Turborepo monorepo with a student-facing Next.js site and a teacher-facing Vite design studio playground.

## Tech stack
- **Node**: 20.x LTS (required)
- **pnpm**: 9.x (required)
- **Turborepo** for orchestrating workspace tasks
- **Apps**
  - `/apps/web`: Next.js (App Router) + React + TypeScript + Tailwind
  - `/apps/studio`: Vite + React + TypeScript + Tailwind
- **Shared**: `/packages/shared` for types, content, components, Tailwind preset

## Repository layout
```
apps/
  web/      # Main student site (Next.js)
  studio/   # Design studio playground (Vite)
packages/
  shared/   # Shared components, content, types, Tailwind preset
scripts/    # (reserved for future tooling)
.vscode/    # Editor settings & recommendations
```

## VS Code setup
Recommended extensions: ESLint, Prettier, Tailwind CSS IntelliSense. Format on save and ESLint fixes are enabled in `.vscode/settings.json`. Debug launchers are provided for both apps.

## Setup
1. Install Node 20.x LTS and pnpm 9.x.
2. From the repo root, install dependencies:
   ```bash
   pnpm install
   ```

## Workspace scripts
- `pnpm dev` – run both apps concurrently via turbo (Next.js + Vite)
- `pnpm build` – build all packages and apps
- `pnpm lint` – lint all workspaces
- `pnpm typecheck` – TypeScript project references across the monorepo
- `pnpm format` – format with Prettier

### App-specific
- **web (Next.js)**: `pnpm --filter web dev`, `pnpm --filter web build`, `pnpm --filter web lint`, `pnpm --filter web typecheck`
- **studio (Vite)**: `pnpm --filter studio dev`, `pnpm --filter studio build`, `pnpm --filter studio lint`, `pnpm --filter studio typecheck`

## Development notes
- Tailwind uses a single preset at `/packages/shared/tailwind.preset.ts`; both apps extend it in their configs.
- Shared imports use `@shared/*` (configured in root and app tsconfigs and webpack/Vite aliases).
- Global styles are minimal; typography and focus states are tuned for accessibility.

## Content editing
All content is code-based (no CMS) under `/packages/shared/src/content`.
- `siteContent.ts` – stats, framing, hero copy. **EDIT HERE** comments mark safe edit zones. Development levy for UWCSEA is `TBD` until sourced.
- `profiles.ts` – interactive “Choose Your School Context” profiles (composition, cost bundle, pressures, caveats). **EDIT HERE** comment included.
- `glossary.ts`, `inquiry.ts`, `claimToolkit.ts` – glossary entries, inquiry questions, and claim/caveat templates.
- `sources.ts` – deterministic source registry referenced by `sourceId` across the site.

## Interactive modules
- `/choose-your-context` (Next.js): Profile selector + hypothesis panels + “Make a claim + caveat” builder using shared components.
- `/apps/studio` (Vite): Front-End Design Studio for teachers to tweak profile text, preview live output, export `contentPatch.json`, and reset to defaults. Uses `applyContentPatch` from `/packages/shared/src/lib/applyContentPatch.ts` to merge patches in dev.

## Running the apps
- Student site: http://localhost:3000 (Next.js App Router)
- Design studio: http://localhost:4173 (Vite)

## Sources routing
All stats reference `sourceId` entries. The `/sources` page renders anchors as `#source-<id>`; `CitationLink` components link to these anchors for deterministic citations.

## Testing (suggested)
- `pnpm lint`
- `pnpm typecheck`
- `pnpm --filter web build`
- `pnpm --filter studio build`

## Notes on data
Follow the critical data rule: only use numbers provided in the brief. Unknown figures remain `TBD` with a code comment to fill later.
