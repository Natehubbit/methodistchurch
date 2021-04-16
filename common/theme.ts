import {DefaultTheme} from 'react-native-paper'
import {Theme} from 'react-native-paper/lib/typescript/types'

export const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0A53A2',
    accent: '#0A53A2',
  },
}
