import { useMemo, useState } from 'react'
import type { Task, TaskFilter } from './types'
import TaskForm from './components/TaskForm'
import TaskSummary from './components/TaskSummary'
import TaskFilters from './components/TaskFilters'
import TaskList from './components/TaskList'
import './App.css'

function createTaskId() {
  return crypto.randomUUID()
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<TaskFilter>('all')

  const addTask = (title: string) => {
    const newTask: Task = {
      id: createTaskId(),
      title,
      completed: false,
    }
    setTasks((currentTasks) => [...currentTasks, newTask])
  }

  const toggleTask = (id: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const deleteTask = (id: string) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
  }

  const visibleTasks = useMemo(() => {
    if (filter === 'active') {
      return tasks.filter((task) => !task.completed)
    }
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed)
    }
    return tasks
  }, [tasks, filter])

  const activeCount = useMemo(
    () => tasks.filter((task) => !task.completed).length,
    [tasks],
  )
  const completedCount = tasks.length - activeCount

  return (
    <main className="app">
      <header className="app-header">
        <h1>TaskNest</h1>
        <p>A small, focused place to keep track of what needs doing.</p>
      </header>

      <TaskForm onAddTask={addTask} />

      <TaskSummary total={tasks.length} active={activeCount} completed={completedCount} />

      <TaskFilters currentFilter={filter} onFilterChange={setFilter} />

      <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </main>
  )
}

export default App
