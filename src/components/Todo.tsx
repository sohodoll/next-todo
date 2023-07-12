import { Todo } from '@/types/Todo'

export const TodoElement = ({ todo }: { todo: Todo }) => {
  return (
    <button>
      <span>{todo.title}</span>
      <span>{todo.description}</span>
    </button>
  )
}
