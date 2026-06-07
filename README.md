# Kafe con Proposito

A multilingual website for **Kafe con Proposito** — a women's community in Central Bohemia. Built with React, TanStack Router, and Tailwind CSS.

## Running Locally

### Prerequisites

- **Node.js 22+** (required by Vite 7)
- **npm** (comes with Node.js)

If you use [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm install 22
nvm use 22
```

### Setup

```bash
# Clone the repository
git clone https://github.com/tamaraM2026/kafe-pro.git
cd kafe-pro

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at **http://localhost:8080**

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Project Structure

```
src/
  assets/           # Images (hero, members, logos, gathering photos)
  components/       # Shared components (SiteHeader, SiteFooter, Animate)
  hooks/            # Custom hooks (useInView, useCountUp, useTranslations)
  i18n/             # Translation files (en.ts, cs.ts, es.ts)
  routes/
    $lang/           # All pages under /$lang/ prefix
      index.tsx      # Homepage
      about.tsx      # What Kafe is
      founder.tsx    # Founder bio
      memberships.tsx
      community.tsx
      contact.tsx
      business-building-blocks.tsx
      10x-productive.tsx
      the-unveiled-experience.tsx
    __root.tsx       # Root layout (header + footer)
    index.tsx        # Redirect / -> /en/
  styles.css         # Tailwind CSS + animations
```

## Languages

The site supports three languages:
- **English** (`/en/`)
- **Czech** (`/cs/`)
- **Spanish** (`/es/`)

Translations are in `src/i18n/`. The language switcher in the header navigates to the same page in the selected language.

## Tech Stack

- [React 19](https://react.dev)
- [TanStack Router](https://tanstack.com/router) (file-based routing)
- [TanStack Start](https://tanstack.com/start) (SSR)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Vite 7](https://vite.dev)
- [Cloudflare Workers](https://workers.cloudflare.com) (deployment target)
