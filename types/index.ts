export type ThemeMode = 'dark' | 'light'

export interface IForm {
  organisation: string
  age: string
  suggestion: string
  category: string
}

export type SnackbarType = 'success' | 'error' | null

export interface ActionType {
  action: string
  text: string
  onPress: () => void
}

export interface OptionsType {
  categories: string[]
  organisations: string[]
}
