import type { Metadata } from 'next'
import {  Nunito } from 'next/font/google' // Inter
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Ingrid Garcia Portfolio',
  description: 'My professional portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
