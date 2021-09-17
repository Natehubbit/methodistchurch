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

export const COLORS = {
  white: '#fff',
  green: 'green',
  border: 'rgba(0, 0,0,0.2)',
  lightText: 'rgba(0,0,0,0.5)',
  brown: 'brown',
  red: 'red',
  blue: 'blue',
}
