import { useState } from 'react'

export const useHeader = (onAddTask: (task: string) => void) => {
  const [textValue, setTextValue] = useState('')

  const handleInputChange = (text: string) => setTextValue(text)

  const handleAddTask = () => {
    onAddTask(textValue)
    setTextValue('')
  }
  return { handleAddTask, handleInputChange, textValue }
}
