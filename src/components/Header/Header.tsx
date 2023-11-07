import { Image, View } from 'react-native'
import PlusCircle from 'phosphor-react-native/src/icons/PlusCircle'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { colors } from '../../styles/tokens'
import { styles } from './Header.styles'
import { useHeader } from './useHeader'

export interface HeaderProps {
  onAddTask: (task: string) => void
}

export const Header = ({ onAddTask }: HeaderProps) => {
  const { handleAddTask, handleInputChange, textValue } = useHeader(onAddTask)
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Adicione uma nova tarefa"
          onChangeText={handleInputChange}
          value={textValue}
        />
        <Button variant="solid" onPress={handleAddTask}>
          <PlusCircle size={20} color={colors.gray100} />
        </Button>
      </View>
    </View>
  )
}
