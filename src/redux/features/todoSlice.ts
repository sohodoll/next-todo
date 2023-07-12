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
  },
} as InitialState

//fill the initial state with mock todos
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
    deleteTodo: (state, action: PayloadAction<number>) => {
      return {
        value: {
          ...state.value,
          todos: [...state.value.todos].filter((todo) => todo.id !== action.payload),
        },
      }
    },
    changeTodoStatus: (state, action: PayloadAction<number>) => {
      return {
        value: {
          ...state.value,
          todos: state.value.todos.map((todo) => {
            if (todo.id === action.payload) {
              return {
                ...todo,
                completed: !todo.completed,
              }
            }
            return todo
          }),
        },
      }
    },
  },
})

export const { addTodo, deleteTodo, changeTodoStatus } = todoSlice.actions
export const todoReducer = todoSlice.reducer
