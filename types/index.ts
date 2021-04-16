export type ThemeMode = 'dark' | 'light'

export interface IForm {
  organisation: string
  age: string
  suggestion: string
}

export type SnackbarType = 'success' | 'error' | null

export interface ActionType {
  action: string
  text: string
  onPress: () => void
}
