import { StyleSheet } from 'react-native'
import { colors, paddings } from '../../styles/tokens'

export const styles = StyleSheet.create({
  container: {
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray700,
  },
  logo: {
    resizeMode: 'contain',
    width: 110,
  },
  inputContainer: {
    position: 'relative',
    top: -32,
    paddingHorizontal: paddings.medium,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
})
