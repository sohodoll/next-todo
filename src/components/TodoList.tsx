'use client'
import { Todo } from '@/types/Todo'
import { AppDispatch } from '@/redux/store'
import { addTodo } from '@/redux/features/todoSlice'
import { useDispatch } from 'react-redux'
import { TodoElement } from './Todo'
import { createTodo } from '@/utils/createTodo'
import { buttonStyles } from '@/styles/button'

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  const dispatch = useDispatch<AppDispatch>()

  const onClickAddTodo = () => {
    const todo = createTodo()
    dispatch(addTodo(todo))
  }

  return (
    <div className={'flex flex-col items-center'}>
      <button onClick={onClickAddTodo} className={buttonStyles}>
        Add Todo
      </button>
      <div className='flex flex-col gap-6 mt-10'>
        {todos.map((todo: any) => {
          return <TodoElement key={todo.id} todo={todo}></TodoElement>
        })}
      </div>
    </div>
  )
}
