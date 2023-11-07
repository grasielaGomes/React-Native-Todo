import { StyleSheet } from 'react-native'
import { colors } from '../../../styles/tokens'

export const styles = (hasTasks: boolean) =>
  StyleSheet.create({
    container: {
      paddingVertical: 18,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 0.5,
      borderColor: hasTasks ? 'transparent' : colors.gray400,
    },
  })
