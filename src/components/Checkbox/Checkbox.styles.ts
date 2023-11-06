import { StyleSheet } from 'react-native'
import { colors } from '../../styles/tokens'

const SIZE = 22

export const styles = StyleSheet.create({
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE,
    borderWidth: 1,
    borderColor: colors.blue,
  },
  hover: {
    backgroundColor: colors.blueDark,
  },
  checkboxChecked: {
    borderColor: colors.purpleDark,
    backgroundColor: colors.purpleDark,
  },
})
