import { View } from 'react-native'
import { styles } from './TaskList.styles'
import { ListHeader } from './ListHeader/ListHeader'
import { EmptyList } from './EmptyList/EmptyList'
import { TaskCard, type TaskProps } from '../TaskCard/TaskCard'

export interface TaskListProps {
  list: TaskProps[]
  onDelete: (id: string) => void
  onToggleDone: (id: string) => void
  tasksCompleted: number
  tasksCreated: number
}

export const TaskList = ({
  list,
  onDelete,
  onToggleDone,
  tasksCompleted,
  tasksCreated,
}: TaskListProps) => {
  const hasTasks = list.length > 0
  return (
    <View style={styles.container}>
      <ListHeader created={tasksCreated} completed={tasksCompleted} />
      {!hasTasks && <EmptyList />}
      {hasTasks && (
        <View style={styles.list}>
          {list.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDelete}
              onToggleDone={onToggleDone}
            />
          ))}
        </View>
      )}
    </View>
  )
}
