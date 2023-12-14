import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Minecraft API',
  description: 'Minecraft API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" type='image/png' href="/0a17ad0fa0870b05f172deeb05efef8e.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
