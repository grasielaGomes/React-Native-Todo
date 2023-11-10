import { StyleSheet } from 'react-native'
import { colors } from '@styles/tokens'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingVertical: 48,
  },
  text: {
    color: colors.gray300,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtext: {
    fontWeight: '400',
  },
})