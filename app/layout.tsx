import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navigation from "./components/Navigation"
import { ThemeProvider } from "./components/ThemeProvider"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rohan Renganathan - Personal Website",
  description: "Personal website of Rohan Renganathan, Software Developer and Computer Science graduate",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-800`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white text-center py-4">
            © 2024 Rohan Renganathan. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

