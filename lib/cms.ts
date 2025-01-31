import { createClient } from "contentful"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

interface GalleryItem {
  id: string
  title: string
  description: string
  type: "image" | "video"
  url: string
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  try {
    const entries = await client.getEntries({
      content_type: "galleryItem",
    })

    return entries.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title,
      description: item.fields.description,
      type: item.fields.type,
      url: item.fields.media.fields.file.url,
    }))
  } catch (error) {
    console.error("Error fetching gallery items:", error)
    return []
  }
}

