# E-Klaim - Manual Web Service

Documentation for the E-Klaim Manual Web Service. This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Prerequisites

- Node.js >= 20.0
- Yarn package manager

## Environment Variables

Create a `.env` file in the root directory to configure the site variables:

```bash
APP_URL=http://localhost:3000
BASE_URL=/
EDIT_URL=https://github.com/irfans18/eklaim-manws-docs/tree/main/
GITHUB_BASE_URL=https://github.com/irfans18/eklaim-manws-docs
```

Production builds on Netlify set `APP_URL` and `BASE_URL` via `netlify.toml` so the site matches the public URL **https://inacbg.kemkes.go.id/e-klaim-doc** (reverse proxy origin: **https://eklaim-manual-ws.netlify.app**). The kemkes proxy must strip the `/e-klaim-doc` path segment when forwarding to Netlify.


## Installation

```bash
yarn install
```

## Local Development

```bash
yarn dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

### Using SSH

```bash
USE_SSH=true yarn deploy
```

### Not using SSH

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Project Structure

- `docs/` - General documentation files.
- `manual-webservice/` - Specific documentation for the Manual Web Service, accessible via the sidebar.
- `src/` - React components and pages.
- `versioned_docs/` - Documentation for previous versions (e.g., 5.9.x).
- `docusaurus.config.ts` - Main configuration file for the site.

## Contributing

1.  **Editing**: Updates can be made directly in the markdown files within `manual-webservice/`.
2.  **Versioning**: This project uses Docusaurus versioning. Historical versions are stored in `versioned_docs/`.
