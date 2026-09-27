# TaskNest — Project Discovery

## 1. Purpose

TaskNest is a deliberately small frontend application used to learn product discovery, frontend implementation, version control, and automatic deployment.

The application itself should remain simple. The project process is the primary learning objective.

## 2. Problem Statement

A user needs a simple way to maintain a short list of tasks and understand which tasks remain active and which have been completed.

## 3. Initial User

The initial product assumes a single local user.

There is no account system in the first version.

## 4. Core User Goals

The user should be able to:

1. See existing tasks.
2. Add a new task.
3. Mark a task as completed.
4. Remove a task.
5. Filter the visible task list.
6. Understand the number of active and completed tasks.

## 5. Initial User Flow

### Add a task

Open TaskNest  
→ Enter task title  
→ Select Add  
→ New task appears in the task list

### Complete a task

View task  
→ Mark task complete  
→ Task changes to completed state

### Delete a task

View task  
→ Select delete  
→ Task is removed

### Filter tasks

Select All / Active / Completed  
→ List updates to show matching tasks

## 6. Initial Functional Requirements

### FR-001 — Display tasks

The application shall display the current task list.

### FR-002 — Add task

The application shall allow the user to create a task with a title.

### FR-003 — Complete task

The application shall allow the user to change a task between active and completed states.

### FR-004 — Delete task

The application shall allow the user to remove a task.

### FR-005 — Filter tasks

The application shall provide filters for:

- All
- Active
- Completed

### FR-006 — Task counts

The interface should display useful counts such as total, active and completed tasks.

## 7. Initial Non-Functional Requirements

- Application should load quickly.
- Interface should work on desktop and mobile-sized screens.
- TypeScript should be used for application code.
- Components should be reasonably separated.
- Code should remain understandable to a learner.
- The application should build successfully using the production build command.
- The application should be deployable to Vercel.

## 8. Data Model — Initial

A task can initially be represented conceptually as:

- `id`
- `title`
- `completed`

Persistence is intentionally not part of the initial scope.

## 9. Persistence Decision

Initial version:

**No persistent storage.**

Tasks may exist only while the application is running.

Later learning stages may introduce browser persistence such as local storage, followed by a backend/database if desired.

## 10. UI Areas

Initial screen:

- Application header
- Task creation area
- Task summary/counts
- Task filters
- Task list
- Individual task row
- Empty-state message

## 11. Questions To Resolve During Implementation

These are deliberately not decided yet:

- Exact visual design
- Color palette
- Typography
- Whether the task title can be edited
- Whether completed tasks can be restored
- Whether confirmation is needed before deletion
- Whether keyboard shortcuts are needed
- Whether local storage should be introduced later

## 12. Future Possibilities

Possible future learning stages:

- Local storage
- Task editing
- Due dates
- Priority
- Tags
- Search
- Better responsive design
- Component testing
- End-to-end testing
- Backend API
- Database
- Authentication

These are future possibilities, not current requirements.

## 13. Discovery Status

This document represents the initial discovery baseline. New decisions should be added rather than silently replacing earlier decisions.
