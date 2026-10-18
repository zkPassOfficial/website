# zkPass

## Setup and configuration

This checkout is a Next.js `14.0.3`, React `18.2.0`, TinaCMS `^1.5.28` site. `.nvmrc` records Node `18`, and `pnpm-lock.yaml` is tracked. These are repository settings, not a current compatibility or support guarantee. No installation/build was run for this review.

Review dependency lifecycle scripts before installing with the intended pnpm toolchain: `prepare` runs `husky install`. The repository's pre-commit hook invokes `npx lint-staged`, which can run tooling and modify staged files. The hook was not installed or executed for this documentation change.

There is no tracked `.env.template`. [tina/config.js](tina/config.js) reads `NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN`, `TINA_SEARCH_TOKEN`, and `VERCEL_GIT_COMMIT_REF`. Other source/configuration references include `NEXT_PUBLIC_GOOGLE_ANALYTICS`, `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID`, `WEBSITE_URL`, and `ANALYZE`. Obtain only the configuration needed for your authorized local/CMS environment; do not commit secrets or pull an entire production environment merely to start reviewing source. Browser-prefixed values are public.

Vercel CLI linking or environment export is not a necessary source-inspection step. `pnpm dev` invokes Tina's development command around Next and is the repository's local development entry; operation without cloud credentials must be verified against the intended Tina setup. No offline guarantee is made. The Tina branch fallback is configured separately from the Git checkout branch; inspect it before using cloud editing.

| Command | Declared behavior |
| --- | --- |
| `pnpm dev` | `tinacms dev -c "next dev"` |
| `pnpm build` | `tinacms build && next build`; postbuild runs `next-sitemap` |
| `pnpm start` | `tinacms build && next start -p 9992`; starts with another CMS build and expects a completed Next build |
| `pnpm lint` | `next lint` |
| `pnpm analyze` | `cross-env ANALYZE=true next build`; does not include the Tina build step |
| `pnpm size` | Runs the build and then `size-limit` |

The source route [pages/index.js](pages/index.js) delegates to [pages/home/index.js](pages/home/index.js), which uses generated Tina client/data and site components. A bare Next command does not necessarily perform the required CMS generation. These commands are documented from the manifest, not reported as passing checks.

## Stack

- [Lenis](https://github.com/studio-freight/lenis)
- [Tempus](https://github.com/studio-freight/tempus)
- [Hamo](https://github.com/studio-freight/hamo)
- [PNPM](https://pnpm.io/)
- [Next.js](https://nextjs.org/)
- [Three.js](https://threejs.org/)
- [@react-three/drei](https://github.com/pmndrs/drei)
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [GSAP](https://greensock.com/gsap/)
- [Embla Carousel](https://github.com/davidcetinkaya/embla-carousel)
- Sass (Modules)
- [Zustand](https://github.com/pmndrs/zustand)
- GraphQL (CMS API)
- [Next-Sitemap](https://github.com/iamvishnusankar/next-sitemap) (postbuild script)
- [@svgr/webpack](https://github.com/gregberge/svgr/tree/main) (SVG Imports in `next.config.js`)

## Code Style & Linting

- Eslint ([Next](https://nextjs.org/docs/basic-features/eslint#eslint-config) and [Prettier](https://github.com/prettier/eslint-config-prettier) plugins)
- [Prettier](https://prettier.io/) with the following settings available in `.prettierrc`:
  ```json
  {
    "endOfLine": "auto",
    "semi": false,
    "singleQuote": true
  }
  ```
- [Husky + lint-staged precommit hooks](https://github.com/okonet/lint-staged)

## Third Party

- [TinaCMS](https://tina.io/)
- [Vercel (Hosting & Continuous Deployment)](https://vercel.com/home)
- [GitHub Versioning](https://github.com/)

## Folder Structure

Alongside the usual Next.js folder structure (`/public`, `/pages`, etc.) We've added a few other folders to keep the code easier to read:

- **/assets:** General Images/Videos and SVGs
- **/components:** Reusable components with their respective Sass file
- **/tina:** Fragments/Queries/Renderers
- **/config:** General settings (mostly Leva for now)
- **/hooks:** Reusable Custom Hooks
- **/layouts:** High level layout component
- **/libs:** Reusable Scripts and State Store
- **/styles:** Global styles and Sass partials

## Content and validation boundaries

[tina/content/pages/home/home.md](tina/content/pages/home/home.md) is CMS frontmatter consumed by the site, not developer documentation. It includes historical campaign copy, metrics, protocol/performance descriptions, partner names, and links. These business/research claims were not verified or rewritten from frontend code. Generated types, CMS content, images, and licenses remain unchanged.

[checklist.md](checklist.md) contains pending frontend review items. An unchecked item is a follow-up, not a reproduced defect or a test failure. The empty `todo.md` has no executable instructions.

The tracked Lighthouse workflow triggers on pushes to `main`; this checkout's original branch is `master`. It obtains a Vercel preview URL, runs Lighthouse, uploads reports (including temporary public storage), and posts a commit comment. It does not provide functional test coverage or evidence of a passing audit. The workflow is unchanged and is not triggered by this documentation push to `master`; external hosting integrations are unknown.

No dependency installation, Husky setup, project scripts, tests, build, preview browsing, CMS write, deployment, or business request was performed. No automated test suite was identified. Review generated CMS artifacts, configuration, source/content accuracy, accessibility, performance, and deployment behavior separately before relying on the site.
