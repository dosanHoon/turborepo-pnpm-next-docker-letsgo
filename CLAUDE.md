# Project Overview

Turborepo + pnpm monorepo with Next.js apps and shared packages.

## Architecture

```
apps/
  client/     → Next.js 15 (main user-facing app)
  admin/      → Next.js 15 (admin dashboard)
  storybook/  → Storybook (component library & visual testing)
packages/
  ui/                → Shared UI components (shadcn/ui + Radix)
  eslint-config/     → Shared ESLint flat config
  tailwind-config/   → Shared Tailwind configuration
  typescript-config/ → Shared TypeScript configurations
```

## Commands

```bash
pnpm dev              # Start all apps in dev mode
pnpm build            # Build all apps
pnpm lint             # Lint all workspaces
pnpm check-types      # Type check all workspaces
pnpm test             # Run unit tests (Vitest)
pnpm format           # Format with Prettier

# Per-app commands
pnpm --filter client dev
pnpm --filter client test:run
pnpm --filter client test:e2e
```

## Conventions

- **Package scope**: `@repo/*` for internal packages
- **Commits**: Conventional Commits (`feat:`, `fix:`, `chore:`, etc.)
- **Styling**: Tailwind CSS + shadcn/ui components from `@repo/ui`
- **Imports**: Use `@/*` alias for app-internal imports, `@repo/*` for shared packages
- **Testing**: Vitest for unit tests, Playwright for E2E
- **TypeScript**: Strict mode, extend shared configs from `@repo/typescript-config`

## Rules

- Always use `pnpm` (not npm or yarn)
- Use `workspace:*` protocol for internal package dependencies
- Shared components go in `packages/ui`, not in individual apps
- Run `pnpm lint` and `pnpm check-types` before pushing
- New features should include unit tests
- Do not modify generated files or lock files manually
