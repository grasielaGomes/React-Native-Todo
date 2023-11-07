import { StyleSheet } from 'react-native'
import { colors } from '../../../styles/tokens'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  created: {
    color: colors.blue,
  },
  completed: {
    color: colors.purple,
  },
  counterContainer: {
    backgroundColor: colors.gray400,
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  counter: {
    color: colors.gray100,
  },
})
