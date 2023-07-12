import { Todo } from '@/types/Todo'

export const createTodo = (title: string, description: string): Todo => {
  if (!title) {
    title = 'Default title'
  }
  if (!description) {
    description = 'Default description'
  }

  return {
    title,
    description,
    completed: false,
    id: Date.now() + Math.random(), //add the math random method to avoid duplicate ids on mock todos
  }
}
