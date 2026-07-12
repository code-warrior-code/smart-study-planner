# CLAUDE.md

This file gives context to AI coding assistants (Claude Code, Cursor, etc.) working in this repository.

## Project

Smart Study Planner — a React web app that generates and adaptively re-plans study schedules for students preparing for exams.

## Tech stack

- **Frontend:** React (Vite), Tailwind CSS, JavaScript (no TypeScript for now)
- **AI integration:** Claude API for generating and re-adjusting study schedules
- **State:** React state (useState/useReducer) — no external state library yet
- **Storage:** Browser-side only for now (in-memory or localStorage in local dev, not in deployed artifacts)

## Conventions

- Components go in `src/components/`, one component per file, PascalCase filenames (e.g. `SubjectCard.jsx`)
- Use functional components with Hooks only — no class components
- Tailwind utility classes only, no custom CSS files unless absolutely necessary
- Commit messages follow Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`
- Keep components small and single-purpose; extract logic into `src/utils/` when it grows

## Current goals

- Working demo of: add subject → generate schedule → daily check-in → auto re-plan
- Clean, beginner-readable code (this is a learning project as much as a portfolio piece)

## What NOT to do

- Don't add a backend/database yet — keep it frontend-only until the core flow works
- Don't over-engineer with extra libraries before the basic flow is solid
