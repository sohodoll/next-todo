import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './features/todoSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: todoReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//exporting a custom hook to use the typed useSelector hook in our components
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
