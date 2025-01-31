import { Mail, Phone, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="mb-6">Feel free to reach out to me through any of the following methods:</p>
      <div className="space-y-4">
        <div className="flex items-center">
          <Mail className="mr-2" />
          <a href="mailto:rohanrq7@gmail.com" className="text-blue-500 hover:underline">
            rohanrq7@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <Phone className="mr-2" />
          <span>+44 7914846716</span>
        </div>
        <div className="flex items-center">
          <Linkedin className="mr-2" />
          <Link
            href="https://www.linkedin.com/in/rohanrenganathan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/rohanrenganathan
          </Link>
        </div>
        <div className="flex items-center">
          <Github className="mr-2" />
          <Link
            href="https://github.com/rohanr07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            github.com/rohanr07
          </Link>
        </div>
      </div>
    </div>
  )
}

