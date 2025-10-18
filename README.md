# Managoin demo (Vite + React + TS + Tailwind)

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Netlify
- Push this repo to GitHub.
- In Netlify, **New site from Git**, pick the repo.
- Build command: `npm run build`
- Publish directory: `dist`
- Framework preset: `Vite`
- (SPA) Keep `netlify.toml` for history API fallback.

## Notes
- Web3Forms public key is embedded and submits to https://api.web3forms.com/submit
- Tailwind is preconfigured.
- The app entry is `src/App.tsx`.
