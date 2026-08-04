# hush landing page

Modern static Next.js landing page for Hush, built from the Figma design and paired with a Docusaurus documentation site.

## Development

```bash
npm install
npm run dev
```

This starts both servers. The landing page is available at `http://localhost:3000` and the docs are proxied at `http://localhost:3000/docs/`.

The waitlist form stores an email in the browser when no endpoint is configured. For central collection, set `NEXT_PUBLIC_WAITLIST_ENDPOINT` to a form endpoint before building.

To run the docs server by itself:

```bash
npm run docs:dev
```

## Production build

```bash
npm run build
```

The landing page is exported to `out/` for GitHub Pages. The docs build is copied into `out/docs/` by the Pages workflow. The custom domain is configured through `public/CNAME`.
