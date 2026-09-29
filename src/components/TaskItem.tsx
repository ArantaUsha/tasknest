import type { Task } from '../types'

interface TaskItemProps {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <li className="task-item">
      <label className="task-item-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? 'task-title completed' : 'task-title'}>
          {task.title}
        </span>
      </label>
      <button
        type="button"
        className="task-delete-button"
        onClick={() => onDelete(task.id)}
        aria-label={`Delete "${task.title}"`}
      >
        Delete
      </button>
    </li>
  )
}

export default TaskItem
