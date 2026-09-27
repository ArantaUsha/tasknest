# TaskNest — Codex Handover

## Purpose

This document is the working handover for a VS Code Codex coding agent.

Codex should use this document together with the other project documents before making implementation changes.

## Project

TaskNest is a small frontend task-management application used as a learning project.

## Current Technology

- React
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

## Repository

GitHub repository:

`ArantaUsha/tasknest`

Local project:

`/Users/aranta/Documents/VSCodex/tasknest`

Default branch:

`main`

## Current Repository State

At the time this handover was created:

- Git repository initialized.
- `origin` remote configured.
- GitHub repository exists.
- No commits yet.
- Application implementation has not started.

## Product Requirements

Initial functionality:

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

## Coding-Agent Behaviour

Before modifying code:

1. Read relevant project documentation.
2. Inspect the existing implementation.
3. Identify the smallest change needed.
4. Explain important assumptions when necessary.
5. Avoid broad refactoring unrelated to the requested task.

After modifying code:

1. Check the changed files.
2. Run relevant validation.
3. Report what changed.
4. Report any unresolved issue.
5. Update documentation when the project state or decisions change.

## Current Next Task

The next implementation task is to initialize the React + Vite + TypeScript application in the existing repository.

Do not implement the TaskNest feature set yet unless explicitly instructed.

## Expected Initial Project Structure

The exact Vite-generated structure should be inspected after initialization rather than assumed.

The project should eventually have a documentation directory similar to:

```text
docs/
├── PROJECT_START.md
├── PROJECT_DISCOVERY.md
├── IMPLEMENTATION_PLAN.md
├── CODEX_HANDOVER.md
└── SESSION_HANDOVER.md
```

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

## Important

Do not make deployment, backend, database, authentication, or architecture decisions beyond the current scope without discussing them first.
