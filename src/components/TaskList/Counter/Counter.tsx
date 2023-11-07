import { Text, View } from 'react-native'
import { styles } from './Counter.styles'

export interface CounterProps {
  counter: number
  label: string
  variant: 'created' | 'completed'
}

export const Counter = ({ counter, label, variant }: CounterProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles[variant]]}>{label}</Text>
      <View style={styles.counterContainer}>
        <Text style={[styles.text, styles.counter]}>{counter}</Text>
      </View>
    </View>
  )
}
