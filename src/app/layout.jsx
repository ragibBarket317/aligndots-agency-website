import { Inter } from 'next/font/google'
import './globals.css'
import { icons } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aligndots- Marketing Agency',
  description: 'We do marketing from another galaxy',
  icons: '/aligndots.ico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
