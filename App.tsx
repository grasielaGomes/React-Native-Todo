import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { colors } from './src/styles/tokens'
import { useFonts } from 'expo-font'
import { ToDoList } from './src/pages/ToDoList'

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  })

  if (!fontsLoaded && !fontError) {
    return null
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent />
      <ToDoList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray600,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
