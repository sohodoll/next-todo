'use client'
import { changeTodoStatus, deleteTodo } from '@/redux/features/todoSlice'
import { AppDispatch } from '@/redux/store'
import { activeTodoStyle, completedTodoStyle } from '@/styles/todo'
import { Todo } from '@/types/Todo'
import { useDispatch } from 'react-redux'
import deleteIcon from '@/assets/icons/delete.png'
import Image from 'next/image'
import { useCallback } from 'react'

export const TodoElement = ({ todo }: { todo: Todo }) => {
  const dispatch = useDispatch<AppDispatch>()

  const onClickChangeTodoStatus = useCallback(() => {
    dispatch(changeTodoStatus(todo.id))
  }, [dispatch, todo.id])

  const onClickDeleteTodo = useCallback(() => {
    dispatch(deleteTodo(todo.id))
  }, [dispatch, todo.id])

  return (
    <button onClick={onClickChangeTodoStatus} className={todo.completed ? completedTodoStyle : activeTodoStyle}>
      <div className='flex gap-6 items-center'>
        <p className='text-lg'>{todo.title}</p>
        <p className='text-sm'>{todo.description}</p>
      </div>
      <Image onClick={onClickDeleteTodo} src={deleteIcon} alt='delete icon' width={20} />
    </button>
  )
}
