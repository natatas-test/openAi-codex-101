# AGENTS Guidelines for This Repository

## Project summary

This repository contains a Next.js Pages Router site for Codex collaboration
exercises. Prefer small, reviewable diffs and fast iteration through the development
server so changes are easy to inspect and verify.

## Key entrypoints

- `pages/index.tsx` composes the main page.
- `pages/_app.tsx` defines application-wide behavior and wrappers.
- `components/` contains reusable page sections and UI components.
- `styles/globals.css` contains global styles and Tailwind integration.

## Development workflow

1. Install the dependencies recorded in `pnpm-lock.yaml`:

   ```bash
   pnpm install
   ```

2. Start the Next.js development server with hot reload:

   ```bash
   pnpm dev
   ```

3. Keep the development server running while iterating and manually smoke-test the
   affected pages or interactions in the browser.

## Validation workflow

Run both repository checks before considering work complete:

```bash
pnpm lint
pnpm typecheck
```

## Guardrails

- Use `pnpm dev` and the development server for iterative changes.
- Do not run `pnpm build` during interactive agent work. A production build can
  replace `.next` development assets and disrupt hot reload.
- Keep diffs scoped to the requested task and avoid unrelated cleanup or refactors.
- Prefer TypeScript (`.ts` and `.tsx`) for new components and utilities.
- If dependencies change, update `pnpm-lock.yaml` in the same change and restart the
  development server so Next.js loads the updated dependency graph.

## Definition of done

Work is complete when:

- `pnpm lint` passes.
- `pnpm typecheck` passes.
- Manual smoke checks are completed and documented, including the pages or
  interactions checked.
- A concise pull request summary and test plan are ready.
