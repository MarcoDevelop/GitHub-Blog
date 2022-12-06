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

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSrc} alt="" />
    </HeaderContainer>
  )
}

export function HeaderPost() {
  const navigate = useNavigate()
  function goBack() {
    navigate(-1)
  }

  return (
    <HeaderPostContainer>
      <header>
        <LinkProfile
          as="button"
          onClick={goBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar"
          variant="iconLeft"
        />
        <LinkProfile text="Ver no GitHub" href="#" target="_blank" />
      </header>

      <h1>JavaScript data types and data structures</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          cameronwll
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />5 comentários
        </li>
      </ul>
    </HeaderPostContainer>
  )
}
