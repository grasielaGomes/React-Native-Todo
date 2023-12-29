import { useEffect, useState } from 'react'
import { TaskProps } from '@components/index'
import { getStorage, setStorage } from '@storage'

const STORAGE_KEY = 'tasks'

export const useTodoList = () => {
  const [newTasks, setNewTasks] = useState<TaskProps[]>([])
  const [tasksDone, setTasksDone] = useState(0)
  const [tasksCreated, setTasksCreated] = useState(0)

  const handleAddTask = async (value: string) => {
    const task = {
      id: String(Math.random()),
      title: value,
      isDone: false,
    }

    const tasks = [...newTasks, task]
    setNewTasks(tasks)
    await setStorage({ key: STORAGE_KEY, value: tasks })
  }

  const handleDoneTask = async (id: string) => {
    const task = newTasks.find((task) => task.id === id)
    if (task) {
      task.isDone = !task.isDone
      const tasks = newTasks.map((task) => ({ ...task }))
      setNewTasks(tasks)
      await setStorage({ key: STORAGE_KEY, value: tasks })
    }
  }

  const handleDeleteTask = async (id: string) => {
    const filteredTasks = newTasks.filter((task) => task.id !== id)
    setNewTasks(filteredTasks)
    await setStorage({ key: STORAGE_KEY, value: filteredTasks })
  }

  const getTasks = async () => {
    const tasks = await getStorage(STORAGE_KEY)
    if (tasks) setNewTasks(tasks)
  }

  useEffect(() => {
    const tasksDone = newTasks.filter((task) => task.isDone).length
    setTasksDone(tasksDone)
    setTasksCreated(newTasks.length)
  }, [newTasks])

  useEffect(() => {
    getTasks()
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
