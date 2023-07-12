import { Todo } from '@/types/Todo'

export const createTodo = (title: string = 'Default Title', description: string = 'Default description of a todo'): Todo => {
  return {
    title,
    description,
    completed: false,
    id: Date.now(),
  }
}
