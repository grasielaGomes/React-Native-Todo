import { PropsWithChildren } from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './Button.styles'

export interface ButtonProps {
  onPress: () => void
  variant: 'solid' | 'ghost'
}

export const Button = ({
  children,
  onPress,
  variant,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles[variant]}>
      {children}
    </TouchableOpacity>
  )
}
