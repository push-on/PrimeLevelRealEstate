# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
Prime Level Real Estate is a React-based real estate website built with TypeScript, Vite, and TailwindCSS. The project uses ShadcnUI for components and follows a modern React architecture with React Router for navigation.

## Development Commands

### Setup and Installation
```bash
npm install
```

### Development
```bash
# Start development server
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Build for development
npm run build:dev

# Preview production build
npm run preview
```

## Architecture Overview

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with ShadcnUI components
- **State Management**: React Query for API state
- **Routing**: React Router v6
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives
- **Animations**: GSAP

### Project Structure
```
src/
├── components/         # Reusable components
│   ├── ui/            # Shadcn UI components
│   └── Navigation.tsx # Main navigation component
├── pages/             # Route components
├── lib/              # Utility functions and helpers
├── hooks/            # Custom React hooks
├── App.tsx           # Main application component
└── main.tsx         # Application entry point
```

### Key Features
1. Component-based architecture using functional components and hooks
2. Type-safe development with TypeScript
3. Responsive design using TailwindCSS
4. Accessible UI components built on Radix UI primitives
5. Client-side routing with React Router
6. Toast notifications using Sonner
7. Theme support with light/dark modes

### Code Organization
- Pages are organized under `src/pages/`
- Reusable UI components are in `src/components/ui/`
- Business logic components are in `src/components/`
- Hooks and utilities are separated into `src/hooks/` and `src/lib/`
- Routing configuration is centralized in `App.tsx`

### Best Practices
1. Use TypeScript types for props and state
2. Follow component composition patterns
3. Implement responsive designs using Tailwind's breakpoint system
4. Maintain accessibility standards using Radix UI primitives
5. Keep components focused and single-responsibility
6. Use React Query for data fetching and caching
7. Implement proper error boundaries and loading states

### Configuration Files
- `tsconfig.json`: TypeScript configuration
- `eslint.config.js`: ESLint rules
- `tailwind.config.ts`: TailwindCSS configuration
- `postcss.config.js`: PostCSS plugins
- `components.json`: ShadcnUI configuration
