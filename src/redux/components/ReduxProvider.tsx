'use client'

import { ReactNode } from 'react'
import { store } from '../store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute='class'>{children}</ThemeProvider>
    </Provider>
  )
}
