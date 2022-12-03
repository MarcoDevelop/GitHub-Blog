import { ProfileContainer, ProfileDetails, ProfileImage } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage src="https://github.com/MarcoDevelop.png" />
      <ProfileDetails>
        <header>
          <h1>Marco Miranda</h1>
        </header>
      </ProfileDetails>
    </ProfileContainer>
  )
}
