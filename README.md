# TaskNest

A small task-management web app built as a learning project for the frontend development lifecycle: React + TypeScript + Vite, Git/GitHub, and Vercel deployment.

See [docs/](docs/) for the full project history, decisions, and handover notes — start with [docs/AI_HANDOVER.md](docs/AI_HANDOVER.md) if you're an AI coding agent picking this up.

## Features

- View tasks
- Add a task
- Mark a task complete/incomplete
- Delete a task
- Filter by All / Active / Completed
- Task counts (total, active, completed)

Tasks live in memory only — there is no backend, database, or persistence yet (by design; see [docs/PROJECT_DISCOVERY.md](docs/PROJECT_DISCOVERY.md)).

## Getting Started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # type-check and produce a production build in dist/
npm run lint     # run ESLint
npm run preview  # preview the production build locally
```

## Project Documentation

| File | Purpose |
|---|---|
| [docs/PROJECT_START.md](docs/PROJECT_START.md) | Project overview, scope, and status |
| [docs/PROJECT_DISCOVERY.md](docs/PROJECT_DISCOVERY.md) | Product requirements and user flows |
| [docs/IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md) | Staged implementation plan and progress |
| [docs/AI_HANDOVER.md](docs/AI_HANDOVER.md) | Handover notes for any AI coding agent continuing this project |
| [docs/SESSION_HANDOVER.md](docs/SESSION_HANDOVER.md) | Latest session-by-session status log |
