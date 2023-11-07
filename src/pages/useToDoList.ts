import { useEffect, useState } from 'react'
import { TaskProps } from '../components'

export const useTodoList = () => {
  const [newTasks, setNewTasks] = useState<TaskProps[]>([])
  const [tasksDone, setTasksDone] = useState(0)
  const [tasksCreated, setTasksCreated] = useState(0)

  const handleAddTask = (value: string) => {
    const task = {
      id: String(Math.random()),
      title: value,
      isDone: false,
    }
    setNewTasks((prev) => [...prev, task])
  }

  const handleDoneTask = (id: string) => {
    const task = newTasks.find((task) => task.id === id)
    if (task) {
      task.isDone = !task.isDone
      setNewTasks((prev) => {
        const newTasks = prev.map((task) => ({ ...task }))
        return newTasks
      })
    }
  }

  const handleDeleteTask = (id: string) => {
    const filteredTasks = newTasks.filter((task) => task.id !== id)
    setNewTasks(filteredTasks)
  }

  useEffect(() => {
    const tasksDone = newTasks.filter((task) => task.isDone).length
    setTasksDone(tasksDone)
    setTasksCreated(newTasks.length)
  }, [newTasks])

  return {
    handleAddTask,
    handleDeleteTask,
    handleDoneTask,
    newTasks,
    tasksCreated,
    tasksDone,
  }
}
