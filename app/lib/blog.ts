import fs from "fs"
import path from "path"
import matter from "gray-matter"

// Define the blog post type
export interface BlogPost {
  slug: string
  frontmatter: {
    title: string
    description: string
    date: string
    category: string
    image: string
    color: string
    [key: string]: any
  }
  content: string
}

// Get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  try {
    const contentDirectory = path.join(process.cwd(), "app", "blog", "content")

    // Check if directory exists
    if (!fs.existsSync(contentDirectory)) {
      console.error(`Blog content directory not found: ${contentDirectory}`)
      return []
    }

    const filenames = fs.readdirSync(contentDirectory)

    const posts = filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => {
        const slug = filename.replace(/\.md$/, "")
        const filePath = path.join(contentDirectory, filename)
        const fileContents = fs.readFileSync(filePath, "utf8")
        const { data, content } = matter(fileContents)

        return {
          slug,
          frontmatter: data,
          content,
        } as BlogPost
      })

    // Sort posts by date (newest first)
    return posts.sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime()
      const dateB = new Date(b.frontmatter.date).getTime()
      return dateB - dateA
    })
  } catch (error) {
    console.error("Error getting blog posts:", error)
    return []
  }
}

// Get a single blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const contentDirectory = path.join(process.cwd(), "app", "blog", "content")
    const filePath = path.join(contentDirectory, `${slug}.md`)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error(`Blog post not found: ${filePath}`)
      return null
    }

    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: data,
      content,
    }
  } catch (error) {
    console.error(`Error getting blog post ${slug}:`, error)
    return null
  }
}

