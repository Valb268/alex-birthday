import type { Metadata } from 'next'
import { Rubik_Spray_Paint, Frank_Ruhl_Libre } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

const rubikSprayPaint = Rubik_Spray_Paint({
  weight: '400',
  subsets: ['latin', 'hebrew'],
  variable: '--font-rubik-spray',
})

const frankRuhlLibre = Frank_Ruhl_Libre({
  weight: '400',
  subsets: ['hebrew'],
  variable: '--font-frank-ruhl-libre',
})

export const metadata: Metadata = {
  title: 'יום הולדת 10 של אלכסיי',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={`${rubikSprayPaint.variable} ${frankRuhlLibre.variable}`}>
      <body className="container-fluid">{children}</body>
    </html>
  )
}
