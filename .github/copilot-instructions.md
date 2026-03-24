# Copilot Instructions

This is a Turborepo + pnpm monorepo with Next.js 15 and React 19.

## Project Structure

- `apps/client` - Main Next.js app
- `apps/admin` - Admin Next.js app
- `apps/storybook` - Component library & visual testing
- `packages/ui` - Shared UI components (shadcn/ui + Radix UI)
- `packages/eslint-config` - Shared ESLint flat config
- `packages/tailwind-config` - Shared Tailwind configuration
- `packages/typescript-config` - Shared TypeScript configurations

## Conventions

- Package manager: pnpm (never npm or yarn)
- Internal package scope: `@repo/*` with `workspace:*` protocol
- Path alias: `@/*` maps to `./src/*` in each app
- Commit messages: Conventional Commits (feat:, fix:, chore:, etc.)
- TypeScript: Strict mode, shared configs from `@repo/typescript-config`
- Styling: Tailwind CSS with shadcn/ui components
- Testing: Vitest for unit tests, Playwright for E2E tests

## Code Patterns

- Use React Server Components by default; add "use client" only when needed
- Shared components go in `packages/ui`, not individual apps
- Import UI: `import { Button } from "@repo/ui/components/button"`
- Import utils: `import { cn } from "@repo/ui/lib/utils"`
- Always include unit tests for new features
