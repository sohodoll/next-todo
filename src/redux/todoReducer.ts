// import { Todo } from '@/types/Todo'
// import { TodoState } from '@/types/TodoApp'
// import { createTodo } from '@/utils/createTodo'

// const actions = {
//   addTodo: (newTodo: Todo) => ({ type: 'ADD_TODO', newTodo } as const),
// }

// type TodoActions = ReturnType<(typeof actions)[keyof typeof actions]>

// const initialTodoState: TodoState = {
//   todos: [] as Todo[],
//   filter: 'all',
// }

// if (initialTodoState.todos.length === 0) {
//   for (let i = 0; i < 3; i++) {
//     const todo = createTodo()
//     initialTodoState.todos.push(todo)
//   }
// }

// export const todoReducer = (state = initialTodoState, action: TodoActions): TodoState => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return {
//         ...state,
//         todos: [...state.todos, action.newTodo],
//       }

//     default:
//       return state
//   }
// }
