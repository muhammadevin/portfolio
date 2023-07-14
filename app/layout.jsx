import './globals.css'
import { sanfrans, firstplace, lowres } from './font'
import Head from './head'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={`${firstplace.variable} font-sans ${sanfrans.variable} 
      font-mono ${lowres.variable} font-serif`}>{children}</body>
    </html>
  )
}
