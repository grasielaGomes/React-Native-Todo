import { Text, View } from 'react-native'
import ClipboardText from 'phosphor-react-native/src/icons/ClipboardText'
import { colors } from '../../../styles/tokens'
import { styles } from './EmptyList.styles'

export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <ClipboardText size={64} color={colors.gray300} weight="light" />
      <View>
        <Text style={styles.text}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={[styles.text, styles.subtext]}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}
