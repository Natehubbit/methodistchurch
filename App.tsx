import React, {
  useCallback,
  useEffect,
  useState,
} from 'react'
import {StatusBar, StyleSheet, View} from 'react-native'
import {Provider as PaperProvider} from 'react-native-paper'
import * as SplashScreen from 'expo-splash-screen'
import {theme} from './common/theme'
import Home from './screens/Home'
import OptionsService from './services/OptionsService'
import OptionsContext from './contexts/OptionsContext'
import {OptionsType} from './types'
import AuthService from './services/AuthService'
import UtilService from './services/UtilService'

const App = () => {
  const [appReady, setAppReady] = useState(false)
  const [options, setOptions] = useState<OptionsType>({
    categories: [],
    organisations: [],
  })
  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync()
      const uid = await UtilService.getData('uid')
      const authed = !uid && (await AuthService.loginAnon())
      if (authed) {
        const data = await OptionsService.loadAll()
        await OptionsService.populateOptions()
        data && setOptions(data)
        setAppReady(true)
      }
      // AuthService.authListen(setAppReady)
      // const data = await OptionsService.loadAll()
      // await OptionsService.populateOptions()
      // data && setOptions(data)
      setAppReady(true)
    }
    prepare()
  }, [])
  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync()
    }
  }, [appReady])
  if (!appReady) {
    return null
  }
  return (
    <OptionsContext.Provider value={{options}}>
      <View
        style={styles.container}
        onLayout={onLayoutRootView}>
        <PaperProvider theme={theme}>
          <StatusBar />
          <Home />
        </PaperProvider>
      </View>
    </OptionsContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
