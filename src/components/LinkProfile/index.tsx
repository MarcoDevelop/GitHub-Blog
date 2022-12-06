import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ComponentProps, ComponentType, ReactNode } from 'react'
import { LinkProfileContainer } from './styles'

type LinkProfileProps = ComponentProps<typeof LinkProfileContainer> & {
  text: string
  icon?: ReactNode
  variant?: 'iconLeft' | 'iconRight'
}

export function LinkProfile({ text, icon, ...rest }: LinkProfileProps) {
  return (
    <LinkProfileContainer {...rest}>
      {text}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </LinkProfileContainer>
  )
}
