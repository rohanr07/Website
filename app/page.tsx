import Link from "next/link"
import { Github, Linkedin, Mail, Hash } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 dark:text-white">Rohan Renganathan</h1>
      <p className="text-xl mb-8 dark:text-gray-300">Software Developer</p>
      <div className="flex space-x-4 mb-8">
        <Link
          href="https://github.com/rohanr07"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
        >
          <Github size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/rohanrenganathan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
        >
          <Linkedin size={24} />
        </Link>
        <a
          href="mailto:rohanrq7@gmail.com"
          className="text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
        >
          <Mail size={24} />
        </a>
        <Link
          href="https://rq7.hashnode.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400"
        >
          <Hash size={24} />
        </Link>
      </div>
      <Link href="/about" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        Learn More About Me
      </Link>
    </div>
  )
}

