import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Noto_Serif } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kavita & Rahul — Raksha Bandhan',
  description: 'A traditional, heartfelt Raksha Bandhan gift for Kavita from Rahul.',
  generator: 'v0.dev',
}

const NotoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400','700'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${NotoSerif.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="antialiased text-[15px] md:text-base bg-[#fffaf0]">{children}</body>
    </html>
  )
}
