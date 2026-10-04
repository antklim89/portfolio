FROM oven/bun:1 AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production


FROM base AS builder
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .

ARG BUILD=true
RUN --mount=type=secret,id=PAYLOAD_SECRET,env=PAYLOAD_SECRET \
    bun next build


FROM base AS runner
COPY --from=builder --chown=bun:bun /app/public ./public
RUN mkdir .next
RUN chown bun:bun .next
COPY --from=builder --chown=bun:bun /app/.next/standalone ./
COPY --from=builder --chown=bun:bun /app/.next/static ./.next/static
USER bun
VOLUME [ "/app/db", "/app/media" ]
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
CMD ["bun", "--bun", "./server.js"]
