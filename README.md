## Built With
- [React](http://www.reactjs.org)
- [Next.js](https://nextjs.org/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Key Files

**`next.config.js`**

 This is a regular Node.js module, not a JSON file. It gets used by the Next.js server and build phases, and it's not included in the browser build. 

**`public`**

Next.js can serve static files, like images, under a folder called public in the root directory.

**`pages`**

In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the pages directory. Each page is associated with a route based on its file name.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
