# Gaia Matrix Technologies AG Website

Modern, fast, and responsive website for **Gaia Matrix Technologies AG** built with [Astro](https://astro.build) (Static Site Generation).

---

## ✨ Features

- **🚀 Lightning Fast SSG**: Built with Astro 5 for maximum performance and optimal SEO.
- **🌐 Multilingual Support (i18n)**:
  - English (`/en`) & German (`/de`) localized routes.
  - Root route (`/`) automatically detects browser language and redirects to preferred locale.
  - Remembers user's manual language selection via `localStorage`.
- **📜 Legal Subpages**: Standalone `Impressum` and `Datenschutzerklärung` (Privacy Policy) pages in both languages.
- **🎨 Responsive CSS**: Custom dark-mode design with fluid layout, grid auto-fit reflowing, and styled components.
- **🚢 Deploy Ready**: Pre-configured for hosting on Render, Netlify, Vercel, or any static host.

---

## 📁 Project Structure

```text
├── public/
│   └── favicon.ico          # Site favicon
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Backdrop.astro   # Animated background grid & glow orbs
│   │   ├── Header.astro     # Sticky navigation & language switcher
│   │   └── Footer.astro     # Extensible 4-column footer
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML shell & global scripts
│   ├── pages/
│   │   ├── index.astro      # Root router with language detection
│   │   ├── en/              # English pages (/en, /en/impressum, /en/legal)
│   │   └── de/              # German pages (/de, /de/impressum, /de/legal)
│   └── styles/
│       └── global.css       # Global design tokens and responsive styles
├── astro.config.mjs         # Astro & i18n configuration
├── netlify.toml             # Netlify deployment configuration
├── render.yaml              # Render Blueprint configuration
└── package.json
```

---

## 🛠️ Local Development

### Prerequisites
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher

### Commands

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:4321)
npm run dev

# 3. Build for production (outputs to ./dist)
npm run build

# 4. Preview production build locally
npm run preview
```

### Analytics

Analytics are disabled by default. Enable one of the supported providers by
setting public environment variables in your hosting platform before building:

```bash
# Google Analytics 4
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Plausible Analytics
PUBLIC_PLAUSIBLE_DOMAIN=example.com

# Optional, defaults to https://plausible.io/js/script.js
PUBLIC_PLAUSIBLE_SCRIPT_SRC=https://plausible.io/js/script.js
```

For EU/Swiss compliance, confirm the final provider setup with your privacy
policy and consent requirements before enabling analytics in production.

---

## 🚀 Deployment

### Render (Static Site)
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- *Or connect repository via Render Blueprints (uses `render.yaml`).*

### Netlify
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- *Pre-configured via `netlify.toml`.*

