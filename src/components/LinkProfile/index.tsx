import { LinkProfileContainer } from './styles'

interface LinkProfileProps {
  text: string
}

export function LinkProfile({ text }: LinkProfileProps) {
  return <LinkProfileContainer>{text}</LinkProfileContainer>
}
