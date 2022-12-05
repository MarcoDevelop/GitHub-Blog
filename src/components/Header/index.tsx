import { HeaderContainer, HeaderPostContainer } from './styles'
import logoSrc from '../../assets/Logo.svg'
import { LinkProfile } from '../LinkProfile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faComment } from '@fortawesome/free-solid-svg-icons'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoSrc} alt="" />
    </HeaderContainer>
  )
}

export function HeaderPost() {
  return (
    <HeaderPostContainer>
      <header>
        <LinkProfile text="Voltar" href="#" />
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
