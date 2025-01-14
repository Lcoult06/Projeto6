import { Container } from './styles'

type Props = {
  children: JSX.Element
}

const Card = ({ children }: Props) => <Container>{children}</Container>

export default Card
