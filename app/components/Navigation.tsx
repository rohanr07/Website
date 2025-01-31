"use client"

import Link from "next/link"
import { Home, User, Briefcase, Code, Mail, Book, Image, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const Navigation = () => {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            Rohan Renganathan
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/" className="hover:text-gray-300">
              <Home className="inline mr-1" size={18} /> Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              <User className="inline mr-1" size={18} /> About
            </Link>
            <Link href="/projects" className="hover:text-gray-300">
              <Code className="inline mr-1" size={18} /> Projects
            </Link>
            <Link href="/experience" className="hover:text-gray-300">
              <Briefcase className="inline mr-1" size={18} /> Experience
            </Link>
            <Link href="/blog" className="hover:text-gray-300">
              <Book className="inline mr-1" size={18} /> Blog
            </Link>
            <Link href="/gallery" className="hover:text-gray-300">
              <Image className="inline mr-1" size={18} /> Gallery
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              <Mail className="inline mr-1" size={18} /> Contact
            </Link>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

