import './globals.css'
import { headers } from 'next/headers'
import { Inter as interFonts } from 'next/font/google'
const inter = interFonts({ subsets: ['latin'] })

import ContextProvider from '../context/index'

export const metadata = {
  title: 'AppKit',
  description: 'AppKit Example'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookies = (await headers()).get('cookie')

  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
      </body>
    </html>
  )
}