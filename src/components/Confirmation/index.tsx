import { ButtonContainer } from '../Button/styles'
import { Overlay } from '../Cart/styles'
import { CartContainer, ContainerConfirmation, Sidebar, Title } from './styles'

const Confirmation = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <Title>Pedido realizado - </Title>
      <ContainerConfirmation>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido. <br />{' '}
          <br />
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras. <br /> <br />
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.{' '}
          <br /> <br />
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite! <br /> <br />
        </p>
        <ButtonContainer type="button" title="Clique aqui para concluir">
          Concluir
        </ButtonContainer>
      </ContainerConfirmation>
    </Sidebar>
  </CartContainer>
)
export default Confirmation
