'use client'
import { addTodo } from '@/redux/features/todoSlice'
import { AppDispatch } from '@/redux/store'
import { createTodo } from '@/utils/createTodo'
import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

export const TodoModal = ({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) => {
  const [todoTitle, setTodoTitle] = useState('')
  const [todoDescription, setTodoDescription] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const onTitleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value)
  }

  const onDescriptionInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoDescription(e.target.value)
  }

  const onClickAddTodo = () => {
    const todo = createTodo(todoTitle, todoDescription)

    dispatch(addTodo(todo))

    //reset the input fields after adding a todo
    setTodoTitle('')
    setTodoDescription('')

    //close the modal after adding a todo
    onClose()
  }

  if (!isVisible) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[800px]'>
        <div className='bg-white p-6 rounded dark:bg-gray-800'>
          <form>
            <div className='grid gap-6 mb-6 md:grid-cols-2'>
              <div>
                <label htmlFor='first_name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Todo Title
                </label>
                <input
                  onChange={onTitleInputChange}
                  type='text'
                  id='todo_title'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Buy new T-Shirts'
                  required
                />
              </div>
              <div>
                <label htmlFor='last_name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Todo Description
                </label>
                <input
                  onChange={onDescriptionInputChange}
                  type='text'
                  id='todo_description'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Buy new T-Shirts for the upcoming dance night'
                  required
                />
              </div>
            </div>

            <button
              onClick={onClickAddTodo}
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
