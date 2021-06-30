import {ExpoConfig, ConfigContext} from '@expo/config'

export default ({
  config,
}: ConfigContext): Partial<ExpoConfig> => ({
  ...config,
  name: 'GraceMethodist-mobile',
  android: {
    splash: {
      // image: './assets/images/splash.png',
    },
  },
})
