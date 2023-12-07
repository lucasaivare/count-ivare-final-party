import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Festinha',
  description: 'Festinha de final de ano da ivare',
  icons: ['yoshi.gif'],
  openGraph: {
    type: "website",
    url: "https://https://count-ivare-final-party.vercel.app/",
    title: "Festinha da ivare",
    description: "Quanto falta?",
    siteName: "Contador festinha",
    images: [{
      url: "https://c.tenor.com/sFsLSgSMtwIAAAAC/tenor.gif",
    }],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
