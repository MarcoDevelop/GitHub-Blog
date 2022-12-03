import styled from 'styled-components'
import background from '../../assets/background.png'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 18.5rem;
  background: url(${background}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 5rem;
  }
`
