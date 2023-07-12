'use client'
import { Todo } from '@/types/Todo'
import { TodoElement } from './Todo'
import { buttonStyles } from '@/styles/button'
import { TodoModal } from './TodoModal'
import { useState } from 'react'

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  const [showModal, setShowModal] = useState(false)

  const onCreateTodoClick = () => {
    setShowModal(true)
  }

  return (
    <div className={'flex flex-col items-center'}>
      <button onClick={onCreateTodoClick} className={buttonStyles}>
        Create Todo
      </button>
      <div className='flex flex-col gap-6 mt-10'>
        {todos.map((todo: any) => {
          return <TodoElement key={todo.id} todo={todo}></TodoElement>
        })}
      </div>
      <TodoModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}
