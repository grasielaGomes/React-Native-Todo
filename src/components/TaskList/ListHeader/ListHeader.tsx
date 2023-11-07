import { View } from 'react-native'
import { styles } from './ListHeader.styles'
import { Counter } from '../Counter/Counter'

export interface ListHeaderProps {
  created: number
  completed: number
}

export const ListHeader = ({ created, completed }: ListHeaderProps) => {
  const hasTasks = created > 0 || completed > 0
  const stylesWithProps = styles(hasTasks)
  return (
    <View style={stylesWithProps.container}>
      <Counter counter={created} label="Criadas" variant="created" />
      <Counter counter={completed} label="Concluídas" variant="completed" />
    </View>
  )
}
