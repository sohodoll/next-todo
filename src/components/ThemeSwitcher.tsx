'use client'
import { useTheme } from 'next-themes'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className='flex gap-4'>
      <button className='border-b-2 border-black dark:border-0' onClick={() => setTheme('light')}>
        Light Mode
      </button>
      <button className='dark:border-b-2 border-white' onClick={() => setTheme('dark')}>
        Dark Mode
      </button>
    </div>
  )
}
