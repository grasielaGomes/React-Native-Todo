import { StyleSheet } from 'react-native'
import { colors } from '../../styles/tokens'

export const styles = (hasFocus: boolean) =>
  StyleSheet.create({
    input: {
      backgroundColor: colors.gray500,
      borderRadius: 8,
      padding: 16,
      borderWidth: 1,
      borderColor: hasFocus ? colors.purpleDark : colors.gray700,
      color: colors.gray100,
      width: '100%',
    },
  })
