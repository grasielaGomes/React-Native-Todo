import { StyleSheet } from 'react-native'
import { paddings } from '../../styles/tokens'

export const styles = StyleSheet.create({
  container: {
    padding: paddings.medium,
    position: 'relative',
    top: -18,
  },
  list: {
    gap: 8,
  },
})
