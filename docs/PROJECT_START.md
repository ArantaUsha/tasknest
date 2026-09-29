# TaskNest — Project Start

## 1. Project Overview

**Product name:** TaskNest  
**Repository:** `tasknest`  
**Application type:** Frontend web application  
**Initial scope:** Frontend only  
**Database:** None  
**Backend:** None  
**Hosting:** Vercel Hobby/Free plan  
**Source control:** Git + GitHub

TaskNest is a small task-management web application being built as a practical learning project. The primary objective is not the complexity of the application itself, but learning the complete modern frontend development lifecycle from local development through GitHub and automatic Vercel deployment.

## 2. Learning Objectives

This project will be used to learn:

- Web application structure
- React
- TypeScript
- Vite
- Components
- Props
- State
- Events
- Forms
- Lists
- Conditional rendering
- Basic CSS and responsive UI
- npm and package management
- Git fundamentals
- GitHub repositories and remotes
- Commits, branches and pushes
- Vercel deployment
- Automatic deployment from GitHub
- Basic troubleshooting of frontend builds and deployments
- Working with an AI coding agent using project documentation

## 3. Initial Product Scope

The first version will provide a simple task-management experience.

Planned initial capabilities:

- View tasks
- Add a task
- Mark a task complete
- Delete a task
- Filter tasks
- Display basic task counts

The initial application will use frontend/browser state only.

No database or backend will be introduced in the initial version.

## 4. Technology Decisions

| Area | Decision |
|---|---|
| UI library/framework | React |
| Programming language | TypeScript |
| Build tool | Vite |
| Styling | CSS initially |
| Package manager | npm |
| Source control | Git |
| Source repository | GitHub |
| Hosting | Vercel |
| Database | None initially |
| Backend | None initially |

## 5. Deployment Model

The intended development-to-production flow is:

VS Code
→ Git
→ GitHub
→ Vercel
→ Live application

A push to the GitHub repository should eventually trigger an automatic Vercel build and deployment.

## 6. Current Environment

Verified at project start:

- macOS
- Node.js `v24.13.0`
- npm `11.6.2`
- Git `2.50.1`
- Git user identity already configured
- VS Code terminal available
- Local repository initialized on `main`
- GitHub remote configured
- GitHub repository: `ArantaUsha/tasknest`
- GitHub repository currently empty
- No commits yet

## 7. Project Location

Local project:

`/Users/aranta/Documents/VSCodex/tasknest`

## 8. Working Principles

1. Do not assume knowledge of tools or terminology.
2. Explain the purpose of a command before asking the user to run it.
3. Prefer small, verifiable steps.
4. Do not introduce backend/database complexity until explicitly required.
5. Keep documentation synchronized with implementation.
6. Do not remove existing work unless there is a clear reason.
7. Record important decisions and changes.
8. Keep AI agent instructions explicit and traceable.
9. Verify the local result before moving to GitHub or deployment.
10. Keep the application simple enough that the learning objective remains clear.

## 9. Initial Out of Scope

The following are intentionally excluded from the first version:

- Database
- Backend API
- Authentication
- User accounts
- External APIs
- Payment processing
- Cloud infrastructure beyond Vercel hosting
- Complex state-management libraries
- Automated end-to-end testing
- Production monitoring

These may be introduced later as separate learning stages.

## 10. Definition of Initial Success

The initial project is successful when:

1. TaskNest runs locally.
2. The main frontend functionality works.
3. The code is committed to Git.
4. The repository is pushed to GitHub.
5. Vercel is connected to the GitHub repository.
6. The application is automatically deployed.
7. A later GitHub push results in a new deployment without manual file upload.

## 11. Current Status

**Phase:** Core application implemented, pending commit/push/deploy  
**Application code:** Initial feature set implemented (add/complete/delete/filter/counts) — see [AI_HANDOVER.md](AI_HANDOVER.md)  
**Git commits:** Scaffold committed; feature implementation pending commit  
**GitHub push:** Scaffold pushed; feature implementation pending push  
**Vercel connection:** Not configured  
**Next step:** Commit and push the implementation, then connect Vercel. See [AI_HANDOVER.md](AI_HANDOVER.md) and [SESSION_HANDOVER.md](SESSION_HANDOVER.md) for details.
