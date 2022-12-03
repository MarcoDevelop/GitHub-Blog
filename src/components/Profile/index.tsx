import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkProfile } from '../LinkProfile'
import { ProfileContainer, ProfileDetails, ProfileImage } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage src="https://github.com/MarcoDevelop.png" />
      <ProfileDetails>
        <header>
          <h1>Marco Miranda</h1>

          <LinkProfile text="GitHub" href="#" />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            MarcoDevelop
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Empresa
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            11 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
