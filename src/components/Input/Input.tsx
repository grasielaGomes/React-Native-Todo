import React from 'react'
import { TextInput } from 'react-native'
import type { TextInputProps } from 'react-native'
import { styles } from './Input.styles'
import { colors } from '../../styles/tokens'
import { useInput } from './useInput'

export const Input = ({ ...props }: TextInputProps) => {
  const { isFocused, handleOnFocus, handleOnBlur } = useInput()
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
