import type { TaskFilter } from '../types'

interface TaskFiltersProps {
  currentFilter: TaskFilter
  onFilterChange: (filter: TaskFilter) => void
}

const FILTERS: { label: string; value: TaskFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
]

function TaskFilters({ currentFilter, onFilterChange }: TaskFiltersProps) {
  return (
    <div className="task-filters" role="group" aria-label="Filter tasks">
      {FILTERS.map((filter) => (
        <button
          key={filter.value}
          type="button"
          className={
            filter.value === currentFilter
              ? 'task-filter-button active'
              : 'task-filter-button'
          }
          aria-pressed={filter.value === currentFilter}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default TaskFilters
