import { StyleSheet } from 'react-native'
import { colors, paddings } from '../../../styles/tokens'

export const styles = (hasTasks: boolean) =>
  StyleSheet.create({
    container: {
      marginHorizontal: paddings.medium,
      paddingVertical: 18,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 0.5,
      borderColor: hasTasks ? 'transparent' : colors.gray400,
    },
  })
