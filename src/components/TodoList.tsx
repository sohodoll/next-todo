'use client'
import { Todo } from '@/types/Todo'
import { TodoElement } from './Todo'
import { buttonStyles } from '@/styles/button'
import { TodoModal } from './TodoModal'
import { useCallback, useMemo, useState } from 'react'

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  const [filter, setFilter] = useState('all')
  const [showModal, setShowModal] = useState(false)

  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) => {
        if (filter === 'all') return true
        if (filter === 'completed') return todo.completed
        if (filter === 'active') return !todo.completed
        return true
      }),
    [todos, filter]
  )

  const onCreateTodoClick = useCallback(() => {
    setShowModal(true)
  }, [setShowModal])

  return (
    <div className={'flex flex-col items-center'}>
      <div>
        <button onClick={onCreateTodoClick} className={buttonStyles}>
          Create Todo
        </button>
        <select
          className='inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          defaultValue={filter}
          onChange={(e) => {
            setFilter(e.target.value.toLowerCase())
          }}
        >
          <option> All </option>
          <option> Completed </option>
          <option> Active </option>
        </select>
      </div>

      <div className='flex flex-col gap-6 mt-10'>
        {filteredTodos.map((todo: any) => {
          return <TodoElement key={todo.id} todo={todo}></TodoElement>
        })}
      </div>
      <TodoModal isVisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}
