import { View } from 'react-native'
import { Header, TaskList } from '../components'
import { useTodoList } from './useToDoList'

export const ToDoList = () => {
  const {
    handleAddTask,
    handleDeleteTask,
    handleDoneTask,
    newTasks,
    tasksCreated,
    tasksDone,
  } = useTodoList()
  return (
    <View
      style={{
        width: '100%',
      }}
    >
      <Header onAddTask={handleAddTask} />
      <TaskList
        list={newTasks}
        onDelete={handleDeleteTask}
        onToggleDone={handleDoneTask}
        tasksCompleted={tasksDone}
        tasksCreated={tasksCreated}
      />
    </View>
  )
}
