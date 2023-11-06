import { Text, View } from 'react-native'
import Trash from 'phosphor-react-native/src/icons/Trash'
import { Checkbox } from '../Checkbox/Checkbox'
import { Button } from '../Button/Button'
import { colors } from '../../styles/tokens'
import { styles } from './TaskCard.styles'

interface TaskProps {
  id: string
  isDone: boolean
  title: string
}

export interface TaskCardProps {
  onDelete: (id: string) => void
  onToggleDone: (id: string) => void
  task: TaskProps
}

export const TaskCard = ({ onDelete, onToggleDone, task }: TaskCardProps) => {
  const handleDelete = () => onDelete(task.id)

  const handleToggleDone = () => onToggleDone(task.id)
  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <Checkbox isChecked={task.isDone} onPress={handleToggleDone} />
        <Text style={[styles.text, task.isDone && styles.completed]}>
          {task.title}
        </Text>
      </View>
      <Button onPress={handleDelete} variant="ghost">
        <Trash size={20} color={colors.gray100} />
      </Button>
    </View>
  )
}
