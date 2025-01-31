import Link from "next/link"

const projects = [
  {
    title: "Retail R Us – E-Commerce Platform Enhancement",
    description:
      "Revamped an ASP.NET MVC-based e-commerce platform, optimizing product search with recursive subcategory filtering, improving accuracy and enhancing UX.",
    link: "#",
  },
  {
    title: "University Chatbot in LangChain",
    description:
      "Developed a university AI chatbot in Python using LangChain, Pinecone, MongoDB and OpenAI's GPT-3.5 Turbo LLM.",
    link: "#",
  },
  {
    title: "MoneyMaven – Expense Management System",
    description:
      "Engineered an expense management application using JHipster empowering users to track and improve spending habits.",
    link: "https://youtu.be/FoqowgVPG1k?si=tq5wecaLD_UP9_nl",
  },
  {
    title: "Dash & Dodge – Car Game in Python",
    description:
      "Architected and delivered a car game using Pygame tailored to market research conducted where the aim is to avoid oncoming obstacles on the road.",
    link: "https://youtu.be/xaa5nmT-zp4?si=SNj8t3LXKmUQTKij",
  },
  {
    title: "BullsEye Strategy Game in Swift",
    description:
      "Crafted a strategy game in Swift UI using XCode where players must precisely position a slider to approximate a randomly generated number between 1 – 500.",
    link: "#",
  },
]

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h2>
            <p className="mb-4 dark:text-gray-300">{project.description}</p>
            {project.link !== "#" && (
              <Link href={project.link} className="text-blue-500 hover:underline dark:text-blue-400">
                View Project
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

