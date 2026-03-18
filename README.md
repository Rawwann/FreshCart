<div align="center">
  <img src="public/favicon.png" alt="FreshCart Logo" width="160" />

  <h2>FreshCart</h2>
<p>E-commerce storefront powered by Next.js 16 App Router, TypeScript & Tailwind CSS v4</p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js" />
    <img src="https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react&logoColor=black" />
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
    <img src="https://img.shields.io/badge/Zod-4.3.6-3E67B1?style=flat-square" />
    <img src="https://img.shields.io/badge/NextAuth-4.x-purple?style=flat-square" />
  </p>
</div>

---

FreshCart is a modern e-commerce storefront built on the Next.js 16 App Router, covering fashion, electronics, and more. It delivers a complete shopping experience — product discovery, cart, wishlist, secure checkout (Cash & Stripe), and order tracking — architected around Clean Architecture principles

## Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16 App Router · React 19 · TypeScript 5 |
| **Styling** | Tailwind CSS v4 · shadcn/ui · Radix UI · Framer Motion |
| **Forms** | React Hook Form v7 · Zod v4 · @hookform/resolvers |
| **Auth** | NextAuth.js v4 · JWT strategy · jwt-decode |
| **UI Extras** | Swiper 12 · Lucide React · react-icons · Sonner toasts |
| **Compiler** | React Compiler (babel-plugin-react-compiler) |

## Features

- 🛒 &nbsp;Cart management with real-time navbar badge
- 💳 &nbsp;Checkout — Cash on Delivery + Stripe online payment
- ❤️ &nbsp;Wishlist with optimistic count updates
- 📦 &nbsp;Order history with expandable order details
- 🔐 &nbsp;Auth — Login · Register · 3-step password reset (email → OTP → new password)
- 🔍 &nbsp;Search with category/brand filters, price range, sort, pagination
- 👤 &nbsp;Account — profile settings, password change, address book
- 💀 &nbsp;Route-level skeleton loading states
- 🚫 &nbsp;Animated global 404 page

## Architecture

```
UI Components (pure shells)
    ↓ props only
Domain Hooks  (state + async logic)
    ↓ calls
Services      (fetch wrappers → REST API)
    ↓
Context       (CartContext, WishlistContext — global state)
```

All business logic lives in domain-scoped hooks under `src/hooks/{domain}/`. Components never own state — they receive data and callbacks as props. Constants are co-located by domain under `src/constants/{domain}/`.

## Quick Start

```bash
git clone https://github.com/Rawwann/FreshCart.git
cd FreshCart
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

## Project Layout

```
src/
├── app/              # Pages, layouts, loading.tsx, not-found.tsx
├── components/       # UI shells organized by domain
├── hooks/            # Domain-scoped custom hooks
├── constants/        # Static data by domain
├── services/         # API communication layer
├── context/          # CartContext, WishlistContext
├── schema/           # Zod schemas (source of truth for types)
├── interfaces/       # TypeScript interfaces & .d.ts files
├── lib/              # authOptions, cn utility
├── utils/            # Pure helper functions
└── middleware.ts     # Edge auth guard
```

---

<div align="center">
  <img src="https://img.shields.io/badge/Made_with-Next.js-black?style=flat-square&logo=next.js" />
  <img src="https://img.shields.io/badge/Type_Safe-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Styled_with-Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
</div>