# TaskNest — AI Handover

## Purpose

This document is the working handover for any AI coding agent or assistant (Codex, Claude Code, Copilot, Cursor, or similar) picking up this project.

Any AI agent should read this document together with the other files in `docs/` before making implementation changes. `docs/` is the single source of truth for project intent — it should always be updated alongside code changes so the next session (human or AI) does not have to reconstruct context from the diff alone.

## Project

TaskNest is a small frontend task-management application used as a learning project. The primary objective is not the app itself but learning the full frontend lifecycle: local development, Git/GitHub, and Vercel deployment.

## Current Technology

- React 19
- TypeScript
- Vite
- npm
- Git
- GitHub
- Vercel

## Current Scope

Frontend only.

No backend.

No database.

No authentication.

No external API.

No persistent storage (tasks reset on page reload — this is intentional, see [PROJECT_DISCOVERY.md](PROJECT_DISCOVERY.md) section 9).

## Repository

GitHub repository:

`ArantaUsha/tasknest`

Local project:

`/Users/aranta/Documents/VSCodex/tasknest`

Default branch:

`main`

## Current Repository State

- Git repository initialized, `origin` remote configured, GitHub repository exists.
- Vite + React + TypeScript scaffold generated and committed (`initiatl code`).
- Core TaskNest feature set implemented and pushed to GitHub (`main`).
- Vercel project `tasknest` created and connected to `ArantaUsha/tasknest` — pushes to `main` auto-deploy to production.
- Live production URL: https://tasknest-kappa-nine.vercel.app
- A `VERCEL_TOKEN` is kept in a local `.env` file (git-ignored) for CLI use; `.vercel/` (git-ignored) holds the local project link.

Always run `git status` and `git log --oneline -5` at the start of a session to confirm the real state — do not trust this document's snapshot blindly.

## Product Requirements

Initial functionality (all implemented — see [Implementation Notes](#implementation-notes)):

1. Display tasks.
2. Add task.
3. Mark task complete/incomplete.
4. Delete task.
5. Filter All / Active / Completed.
6. Display task counts.

## Technical Principles

1. Use TypeScript.
2. Keep the implementation simple and readable.
3. Prefer React's built-in capabilities.
4. Avoid adding libraries unless there is a clear reason.
5. Do not add a backend or database.
6. Do not add authentication.
7. Do not introduce persistent storage unless explicitly requested.
8. Do not remove existing functionality without documenting the reason.
9. Keep components reasonably small and understandable.
10. Preserve documentation.

## AI-Agent Behaviour

Before modifying code:

1. Read relevant project documentation in `docs/`.
2. Inspect the existing implementation (don't assume the doc snapshot is current).
3. Identify the smallest change needed.
4. Explain important assumptions when necessary.
5. Avoid broad refactoring unrelated to the requested task.

After modifying code:

1. Check the changed files (`git status` / `git diff`).
2. Run `npm run lint` and `npm run build` to validate.
3. Report what changed.
4. Report any unresolved issue.
5. Update documentation when the project state or decisions change — especially this file and [SESSION_HANDOVER.md](SESSION_HANDOVER.md).

## Implementation Notes

### Project structure

```text
src/
├── main.tsx            entry point
├── App.tsx             top-level state (tasks, filter) and layout
├── App.css             component styling
├── index.css           CSS variables / base/reset styling
├── types.ts            Task and TaskFilter types
└── components/
    ├── TaskForm.tsx     add-task input + submit
    ├── TaskSummary.tsx  total/active/completed counts
    ├── TaskFilters.tsx  All / Active / Completed toggle
    ├── TaskList.tsx     renders TaskItem list or empty state
    └── TaskItem.tsx     single task row: toggle complete, delete
```

### State model

All state lives in `App.tsx` via `useState`:

- `tasks: Task[]` — the full task list, always in memory only (no `localStorage`, no backend).
- `filter: TaskFilter` — `'all' | 'active' | 'completed'`, controls which tasks `TaskList` renders (filtering happens in `App.tsx` via `useMemo`, not inside child components).

Task IDs are generated with `crypto.randomUUID()`.

### Known gaps / deliberately out of scope

- No persistence — refreshing the page clears all tasks (see [PROJECT_DISCOVERY.md](PROJECT_DISCOVERY.md) section 9 and 12 for future possibilities like `localStorage`).
- No task editing, due dates, priority, or tags.
- No automated tests.

## Current Next Task

Stages 1-10 of [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) are done: implementation, commit, push, and Vercel connection with a verified production deployment.

Remaining:

1. Stage 11 — confirm a routine push produces an automatic redeploy (expected to already work now that GitHub is connected; verify next time a change is pushed).
2. Stage 12 — troubleshooting exercise (optional/learning).
3. Stage 13 — keep this document and `SESSION_HANDOVER.md` updated as work continues.

Check [SESSION_HANDOVER.md](SESSION_HANDOVER.md) for the latest session-by-session status before starting.

## Deployment Target

Vercel Hobby/Free plan.

Expected flow:

```text
Local code
→ Git commit
→ GitHub push
→ Vercel detects GitHub change
→ Build
→ Deployment
```

A Vercel MCP server or CLI may be available in the AI agent's environment — check before assuming deployment must be done manually through the Vercel dashboard.

## Important

Do not make deployment, backend, database, authentication, or architecture decisions beyond the current scope without discussing them first.
