import {ExpoConfig, ConfigContext} from '@expo/config'

export default ({
  config,
}: ConfigContext): Partial<ExpoConfig> => ({
  ...config,
  name: 'Grace Methodist Church',
  slug: 'grace-church-app',
  icon: './assets/images/iconIOS.png',
  version: '1.0.2',
  ios: {
    requireFullScreen: true,
  },
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#ffffff',
  },
  android: {
    package: 'com.natehubbit.gracemethodist',
    icon: './assets/images/iconAndroid.png',
    versionCode: 3,
    adaptiveIcon: {
      foregroundImage: './assets/images/iconAndroid.png',
    },
  },
})
