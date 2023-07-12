import { Todo } from '@/types/Todo'

export const createTodo = (title: string = 'Default Title', description: string = 'Default description of a todo'): Todo => {
  return {
    title,
    description,
    completed: false,
    id: Date.now() + Math.random(), //add the math random method to avoid duplicate ids on mock todos
  }
}
