import { ButtonContainer } from '../Button/styles'
import { Overlay } from '../Cart/styles'
import { CartContainer, InputGroup, Row, Sidebar, Title } from './styles'

const Payment = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <Title>Pagamento - Valor a pagar R$ 190,90</Title>
      <InputGroup>
        <label htmlFor="cardDisplayName">Nome no cartão</label>
        <input type="text" id="cardDisplayName" name="cardDisplayName" />
      </InputGroup>
      <Row>
        <InputGroup>
          <label htmlFor="cardNumber">Número do cartão</label>
          <input type="text" id="cardNumber" name="cardNumber" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="cardCode">CVV</label>
          <input type="text" id="cardCode" name="cardCode" />
        </InputGroup>
      </Row>
      <Row>
        <InputGroup>
          <label htmlFor="expiresMonth">Mês de vencimento</label>
          <input type="text" id="expiresMonth" name="expiresMonth" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="expiresYear">Ano de vencimento</label>
          <input type="text" id="expiresYear" name="expiresYear" />
        </InputGroup>
      </Row>
      <ButtonContainer
        type="button"
        title="Clique aqui para finalizar o pagamento"
      >
        Finalizar pagamento
      </ButtonContainer>
      <ButtonContainer
        type="button"
        title="Clique aqui para voltar a edi;cão de endereço"
      >
        Voltar para a edição de endereço
      </ButtonContainer>
    </Sidebar>
  </CartContainer>
)
export default Payment
