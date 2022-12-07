import { useCallback, useEffect, useState } from 'react'
import { Publications } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { SearchInput } from '../../components/SearchInput'
import { api } from '../../lib/axios'
import { PostsListContainer } from './styles'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface postProps {
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
  const [posts, setPosts] = useState<postProps[]>([])

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`,
        )

        setPosts(response.data.items)
      } finally {
      }
    },
    [posts],
  )

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchInput />
      <PostsListContainer>
        <Publications />
        <Publications />
        <Publications />
        <Publications />
      </PostsListContainer>
    </>
  )
}
