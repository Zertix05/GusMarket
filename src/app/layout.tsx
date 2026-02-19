import '../styles/globals.css';
import { Metadata } from 'next';
import Header from '../components/Header';
import { Manrope, Cormorant_Garamond } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Гусь Маркет',
  icons:{
    icon: '/images/gus_market.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${manrope.variable} ${cormorant.variable}`}>  
    <head>
     <meta name="google-site-verification" content="SH70XBLQiwSAVpd3U8bj9Ez2XdqmpJLFsY3wdLUUzCs" />
     </head>
      <body>
        <Header/>
        <main>{children}</main>

      </body>
    </html>
  )
}