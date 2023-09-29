import Sidemenu from '@/components/Sidemenu'
import './globals.css'
import { Inter } from 'next/font/google'
import Home from './page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Welcome to Anthony\'s blog!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
