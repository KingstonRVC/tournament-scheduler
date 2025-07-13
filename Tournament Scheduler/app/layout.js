
import './globals.css'
import Image from 'next/image'

export const metadata = {
  title: 'Tournament Scheduler | Kingston Rock',
  description: 'Manage volleyball tournaments for Kingston Rock Volleyball Club'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-purple-800 text-white p-4 flex items-center gap-4">
          <Image src="/logo.svg" alt="Kingston Rock Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">Tournament Scheduler</h1>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
