import { useState } from 'react'
import type { FormEvent } from 'react'

interface TaskFormProps {
  onAddTask: (title: string) => void
}

function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    if (trimmedTitle === '') {
      return
    }

    onAddTask(trimmedTitle)
    setTitle('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-form-input"
        placeholder="What needs to be done?"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        aria-label="New task title"
      />
      <button type="submit" className="task-form-button">
        Add
      </button>
    </form>
  )
}

export default TaskForm
