import { StyleSheet } from 'react-native'
import { colors } from '../../styles/tokens'

export const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 32,
  },
  solid: {
    padding: 18,
    backgroundColor: colors.blueDark,
  },
  ghost: {
    padding: 8,
    backgroundColor: 'transparent',
  },
})
