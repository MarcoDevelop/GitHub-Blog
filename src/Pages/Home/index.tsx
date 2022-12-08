import { useCallback, useEffect, useState } from 'react'
import { Publications } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { SearchInput } from '../../components/SearchInput'
import { api } from '../../lib/axios'
import { PostsListContainer } from './styles'

const username = 'MarcoDevelop'
const repoName = 'blog-posts'

export interface PostAPIProps {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<PostAPIProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`,
        )

        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [posts],
  )

  useEffect(() => {
    getPosts()
  }, [getPosts])

  return (
    <>
      <Profile />
      <SearchInput getPosts={getPosts} />
      <PostsListContainer>
        {posts.map((post) => (
          <Publications key={post.number} post={post} />
        ))}
      </PostsListContainer>
    </>
  )
}
