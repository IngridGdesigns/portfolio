import type { Metadata } from 'next'
import {  Nunito } from 'next/font/google' // Inter
import './globals.css'

const nunito = Nunito({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Ingrid Garcia | Software Engineer and Designer from the Bay Area, CA',
  description: 'Skilled in Typescript, Postgresql, Node.js, Jest, GraphQL and React.js',
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
 // <meta charSet="UTF-8" />
      // <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      // <title>Ingrid Garcia | Software Engineer and Designer from the Bay Area, CA</title>
      // <meta name="Demonstrating my work and skills in the portfolio site"></meta>
      // <meta name="software engineer" content="Ingrid Garcia,  Skilled in Typescript, Node.js, Jest, and React.js"/>