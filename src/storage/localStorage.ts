import AsyncStorage from '@react-native-async-storage/async-storage'

interface StorageProps<ValueType> {
  key: string
  value: ValueType
}

export const setStorage = async <ValueType>({
  key,
  value,
}: StorageProps<ValueType>) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (error) {
    throw error
  }
}

export const getStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    if (jsonValue == null) return null
    return JSON.parse(jsonValue)
  } catch (error) {
    throw error
  }
}
