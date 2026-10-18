# Frontend review checklist

These are retained follow-up items, not results from executed tests. Each requires source/browser verification before marking complete. No browser, build, or Lighthouse run was performed for this documentation review.

- [ ] preload `.woff2` fonts (see pages/\_document.js)
- [ ] add metadata to pages
- [ ] add `sizes` and `alt` props to `<Image/>` components
- [ ] throw 404 for not existing pages
- [ ] load non imperatives svg dynamically with `ssr:false`
