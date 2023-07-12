import { Todo } from '@/types/Todo'
import { createTodo } from '@/utils/createTodo'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  value: TodoState
}

type TodoState = {
  todos: Todo[]
  filter: 'all' | 'completed' | 'active'
}

const initialState = {
  value: {
    todos: [],
    filter: 'all',
  } as TodoState,
} as InitialState

if (initialState.value.todos.length === 0) {
  for (let i = 0; i < 3; i++) {
    const todo = createTodo()
    initialState.value.todos.push(todo)
  }
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      return {
        value: {
          ...state.value,
          todos: [...state.value.todos, action.payload],
        },
      }
    },
  },
})

export const { addTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer
