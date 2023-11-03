import React from 'react'
import { TextInput } from 'react-native'
import type { TextInputProps } from 'react-native'
import { styles } from './Input.styles'
import { colors } from '../../styles/tokens'

export const Input = ({ ...props }: TextInputProps) => {
  const [isFocused, setIsFocused] = React.useState(false)
  const handleOnFocus = () => setIsFocused(true)
  const handleOnBlur = () => setIsFocused(false)
  const stylesWithProps = styles(isFocused)
  return (
    <TextInput
      style={stylesWithProps.input}
      placeholderTextColor={colors.gray300}
      selectionColor={colors.gray100}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      {...props}
    />
  )
}
