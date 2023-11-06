import React from 'react'
import { Pressable, View } from 'react-native'
import Check from 'phosphor-react-native/src/icons/Check'
import { styles } from './Checkbox.styles'
import { colors } from '../../styles/tokens'

export interface CheckboxProps {
  isChecked: boolean
  onPress: () => void
}

export const Checkbox = ({ isChecked, onPress }: CheckboxProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
        {isChecked && <Check size={12} color={colors.gray100} />}
      </View>
    </Pressable>
  )
}
