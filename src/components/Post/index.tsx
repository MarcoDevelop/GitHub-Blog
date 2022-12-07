import { PostAPIProps } from '../../Pages/Home'
import { FormatterDate } from '../../utils/formatter'
import { PostContainer } from './styles'

interface PostProps {
  post: PostAPIProps
}

export function Publications({ post }: PostProps) {
  const date = FormatterDate(post.created_at)

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{date}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  )
}
