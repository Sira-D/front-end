// src/app/layout.tsx
import type { Metadata } from 'next'
import './global.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'คณะอักษรศาสตร์',
  description: 'คณะกรรมการนิสิตอักษรศาสตร์',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      {/* Moved your background color and font family here so it applies globally */}
      <body className="min-h-screen bg-color-background-default font-serif text-color-text-default">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

