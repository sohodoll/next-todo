'use client'
import { changeTodoStatus, deleteTodo } from '@/redux/features/todoSlice'
import { AppDispatch } from '@/redux/store'
import { activeTodoStyle, completedTodoStyle } from '@/styles/todo'
import { Todo } from '@/types/Todo'
import { useDispatch } from 'react-redux'
import deleteIcon from '@/assets/icons/delete.png'
import Image from 'next/image'

export const TodoElement = ({ todo }: { todo: Todo }) => {
  const dispatch = useDispatch<AppDispatch>()

  const onClickChangeTodoStatus = () => {
    dispatch(changeTodoStatus(todo.id))
  }

  const onClickDeleteTodo = () => {
    dispatch(deleteTodo(todo.id))
  }

  return (
    <button onClick={onClickChangeTodoStatus} className={todo.completed ? completedTodoStyle : activeTodoStyle}>
      <p className='text-lg'>{todo.title}</p>
      <p className='text-sm'>{todo.description}</p>
      <Image onClick={onClickDeleteTodo} src={deleteIcon} alt='delete icon' width={20} />
    </button>
  )
}
