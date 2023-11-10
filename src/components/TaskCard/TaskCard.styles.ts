import { StyleSheet } from 'react-native'
import { colors } from '@styles/tokens'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray500,
    borderColor: colors.gray400,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 4,
    marginBottom: 8,
  },
  task: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    width: '90%',
    color: colors.gray100,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: colors.gray300,
  },
})
