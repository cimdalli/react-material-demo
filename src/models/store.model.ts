export interface LayoutState {
  useDarkTheme?: boolean
  asyncCount: number
}

export interface AuthState {
  token?: string
}

export interface StoreState {
  layout: LayoutState
  auth: AuthState
}
