import axios from "axios"

const HASHNODE_API_URL = "https://api.hashnode.com"
const HASHNODE_USERNAME = "rq7"

interface BlogPost {
  _id: string
  title: string
  brief: string
  slug: string
  dateAdded: string
  coverImage: string
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const query = `
    query GetUserArticles($page: Int!) {
      user(username: "${HASHNODE_USERNAME}") {
        publication {
          posts(page: $page) {
            _id
            title
            brief
            slug
            dateAdded
            coverImage
          }
        }
      }
    }
  `

  try {
    const response = await axios.post(HASHNODE_API_URL, { query, variables: { page: 1 } })
    return response.data.data.user.publication.posts
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

