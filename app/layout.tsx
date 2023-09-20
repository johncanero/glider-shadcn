import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/darkmode/theme-provider"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shadcn Demo',
  description: 'Shadcn Demo: Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source. ',
  icons: {
    icon: '/images/logo/shadcnUILogo.png',
    shortcut: '/images/logo/shadcnUILogo.pngg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-screen'>
      <body
        className={`${inter.className} rounded-ee-3xl flex-grow`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
