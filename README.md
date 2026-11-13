This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## ZoikoSuite Assistant (chatbot)

Every page except `/sign-in` and `/sign-up` shows the ZoikoSuite Assistant, the
anonymous public chatbot specified in the Suivo Docs 01–11. It is the same
widget as the console's (`zoiko-suite-frontend-platform/components/assistant`)
and talks to the `public-ai-svc` service in `zoiko-suite-backend`.

- `components/assistant/` — the widget. `mount.ts` decides where it shows and
  the Doc 02 §22 page family each page sends (pricing, platform, trust,
  support, demo, else the four Homepage chips).
- `app/public-ai/v1/[...path]/route.ts` — same-origin proxy to the service.
  Only the assistant's own headers cross; cookies and `Authorization` are
  dropped, cross-site calls are refused, and nothing is cached but `/config`
  and `/menu`.

Server settings (environment variables):

| Variable | Default | Production |
|---|---|---|
| `ZOIKO_PUBLIC_AI_URL` | `http://127.0.0.1:8001` | the service's internal URL |
| `ZOIKO_PUBLIC_AI_ORIGIN` | `http://localhost:3000` | this site's origin, e.g. `https://www.zoikosuite.com`; it must also be in the service's `PUBLIC_AI_ALLOWED_ORIGINS` |
| `LAUNCHER_BOTTOM_OFFSET` | `0` | px to lift the launcher above a cookie banner or sticky footer |
| `ZOIKO_SITE_ORIGIN` | (from the Host / X-Forwarded-Host header) | optional: this site's public origin(s), comma-separated, if the proxy in front rewrites the Host header |

Behind Cloudflare or nginx the chat route sees an internal URL, so it accepts
the browser's `Sec-Fetch-Site: same-origin` and otherwise compares `Origin` with
the public host; other sites are still refused.

Locally, start the service once from `zoiko-suite-backend` (it then restarts by
itself): `docker compose -f deployments/docker-compose.public-ai-dev.yml up -d --build`.
Port 3000 is the console's; run this site on another port, e.g. `npx next dev -p 3005`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# CI/CD verification 2026-09-15T10:15:42Z
# CI/CD verification 2026-09-15T10:18:06Z
# CI/CD retry after fixing malformed key 2026-09-15T10:22:27Z
