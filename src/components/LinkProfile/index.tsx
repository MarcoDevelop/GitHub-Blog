import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps, ComponentType } from 'react'
import { LinkProfileContainer } from './styles'

type LinkProfileProps = ComponentProps<typeof LinkProfileContainer> & {
  text: string
}

export function LinkProfile({ text, ...rest }: LinkProfileProps) {
  return (
    <LinkProfileContainer {...rest}>
      {text}
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </LinkProfileContainer>
  )
}
