'use client'

import { ReactNode } from 'react'
import { store } from '../store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'next-themes'

//the core component that wraps the entire app with the redux store and the next-themes provider

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider attribute='class'>{children}</ThemeProvider>
    </Provider>
  )
}
