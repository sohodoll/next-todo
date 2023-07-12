'use client'

import { TodoList } from '@/components/TodoList'
import { useAppSelector } from '@/redux/store'

export default function Home() {
  const todos = useAppSelector((state) => state.value.todos)

  return (
    <main className='flex min-h-screen flex-col items-center p-24 gap-6'>
      <h1 className='text-4xl font-bold text-center'> TodoApp </h1>
      <TodoList todos={todos} />
    </main>
  )
}
