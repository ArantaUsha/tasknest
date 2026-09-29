interface TaskSummaryProps {
  total: number
  active: number
  completed: number
}

function TaskSummary({ total, active, completed }: TaskSummaryProps) {
  return (
    <div className="task-summary" role="status">
      <span>{total} total</span>
      <span>{active} active</span>
      <span>{completed} completed</span>
    </div>
  )
}

export default TaskSummary
