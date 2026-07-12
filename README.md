# AI Research Portfolio

A premium, research-focused portfolio built for AI professors, research labs, and admission committees.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide Icons**
- **shadcn/ui** (Button, Sheet)
- **next-themes** (dark mode)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                  # App Router pages & layout
│   ├── layout.tsx        # Global layout (nav, footer, theme)
│   ├── page.tsx          # Homepage
│   ├── research/
│   ├── projects/
│   ├── publications/
│   ├── research-notes/
│   ├── resume/
│   └── contact/
├── components/
│   ├── ui/               # shadcn/ui primitives
│   ├── layout/           # Navbar, Footer, Theme
│   └── common/           # Shared components
├── sections/
│   └── home/             # Homepage sections
├── data/                 # Content & configuration
├── lib/                  # Utilities & animations
└── hooks/                # Custom React hooks
```

## Design Principles

- Dark mode first
- Minimal, premium aesthetic
- Large typography with generous whitespace
- Subtle Framer Motion animations
- Mobile responsive & accessible

## Pages

| Page | Status |
|------|--------|
| Home | ✅ Built |
| Research | Placeholder |
| Projects | Placeholder |
| Publications | Placeholder |
| Research Notes | Placeholder |
| Resume | Placeholder |
| Contact | Placeholder |

## Customization

Edit content in `src/data/`:

- `site.ts` — Site config, nav links, social URLs
- `research.ts` — Featured research & interests
- `publications.ts` — Publication list
- `journey.ts` — Research timeline
