import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HeaderPost } from '../../components/Header'
import { PostContent } from '../../components/PostComtent'
import { Spinner } from '../../components/Spinner'
import { api } from '../../lib/axios'
import { PostAPIProps } from '../Home'

const username = 'MarcoDevelop'
const repoName = 'blog-posts'

export function Post() {
  const [postData, setPostData] = useState({} as PostAPIProps)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams<{ id: string }>()

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`,
      )

      setPostData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    getPostDetails()
  }, [getPostDetails])

  return (
    <>
      <HeaderPost isLoading={isLoading} postData={postData} />
      {!isLoading && <PostContent content={postData.body} />}
    </>
  )
}
