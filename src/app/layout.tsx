import { ReduxProvider } from '@/redux/components/ReduxProvider'
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: 'Todo List',
  description: 'Todo List App built with Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning={true} lang='en'>
      <body className='bg-gray-100 dark:bg-gray-800 dark:text-white'>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
