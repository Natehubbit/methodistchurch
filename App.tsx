import React from 'react'
import { StatusBar } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { theme } from './common/theme'
import Home from './screens/Home'

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <StatusBar />
      <Home />
    </PaperProvider>
  )
}
export default App
