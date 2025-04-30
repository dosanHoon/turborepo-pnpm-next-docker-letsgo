FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apk update && \
    apk add --no-cache libc6-compat

RUN npm install -g pnpm@10.8.0

FROM base AS builder
WORKDIR /app

RUN pnpm install --global turbo
COPY . .
RUN turbo prune admin --docker

FROM base AS installer
WORKDIR /app

COPY --from=builder /app/out/json/ .

RUN pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ .
COPY --from=builder /app/apps/admin/.env ./apps/admin/.env
RUN pnpm turbo run build

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer --chown=nextjs:nodejs /app/apps/admin/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/admin/.next/static ./apps/admin/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/admin/public ./apps/admin/public

EXPOSE 3000

CMD [ "node", "apps/admin/server.js" ]