import { HeaderContainer, HeaderPostContainer } from './styles'
import logoSrc from '../../assets/Logo.svg'
import { LinkProfile } from '../LinkProfile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { PostAPIProps } from '../../Pages/Home'
import { Spinner } from '../Spinner'
import { FormatterDate } from '../../utils/formatter'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSrc} alt="" />
    </HeaderContainer>
  )
}

interface PostHeaderProps {
  postData: PostAPIProps
  isLoading: boolean
}

export function HeaderPost({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate()
  function goBack() {
    navigate(-1)
  }

  const formattedDate = FormatterDate(postData?.created_at)

  return (
    <HeaderPostContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <LinkProfile
              as="button"
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              variant="iconLeft"
            />
            <LinkProfile
              text="Ver no GitHub"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </HeaderPostContainer>
  )
}
