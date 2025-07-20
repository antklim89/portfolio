FROM node:24-alpine3.22 AS base
WORKDIR /app


FROM base AS builder
RUN apk add --no-cache libc6-compat
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
ARG URL
ARG SMTP_USER
ARG SMTP_HOST
ARG SMTP_PORT
ARG MAIL_LOCALE

RUN --mount=type=secret,id=PAYLOAD_SECRET,env=PAYLOAD_SECRET \
    --mount=type=secret,id=SMTP_PASS,env=SMTP_PASS \
    --mount=type=bind,target=/app/db,source=./db \
    yarn run build


FROM base AS runner
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

COPY --from=builder --chown=node:node /app/public ./public
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

USER node

VOLUME [ "/app/db", "/app/public/media" ]
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

ENTRYPOINT [ "node", "server.js" ]