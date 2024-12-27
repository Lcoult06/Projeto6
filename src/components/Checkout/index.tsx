import { useFormik } from 'formik'
import { ButtonContainer } from '../Button/styles'
import { Overlay } from '../Cart/styles'
import { CartContainer, InputGroup, Row, Sidebar, Title } from './styles'
import * as Yup from 'yup'

const Checkout = () => {
  const form = useFormik({
    initialValues: {
      receiver: '',
      adress: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome do receptor precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      adress: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'A cidade precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O CEP precisa ter 8 caracteres')
        .max(9, 'O CEP precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O número precisa ter pelo menos um caractere')
        .required('O campo é obrigatório'),
      cardDisplayName: Yup.string()
        .min(5, 'O nome no cartão deve ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'O número do cartão deve ter 16 dígitos')
        .max(19, 'O número do cartão deve ter 16 dígitos')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O código de segurança deve ter 3 dígitos')
        .max(3, 'O código de segurança deve ter 3 dígitos')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(2, 'O mês de vencimento deve ter 2 dígitos')
        .max(2, 'O mês de vencimento deve ter 2 dígitos')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(4, 'O ano de vencimento deve ter 4 dígitos')
        .max(4, 'O ano de vencimento deve ter 4 dígitos')
        .required('O campo é obrigatório')
    }),
    onSubmit(values) {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.touched

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <CartContainer>
        <Overlay />
        <Sidebar>
          <Title>Entrega</Title>
          <InputGroup>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              type="text"
              id="receiver"
              name="receiver"
              value={form.values.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('receiver', form.errors.receiver)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="adress">Endereço</label>
            <input
              type="text"
              id="adress"
              name="adress"
              value={form.values.adress}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('adress', form.errors.adress)}</small>
          </InputGroup>
          <InputGroup>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              id="city"
              name="city"
              value={form.values.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('city', form.errors.city)}</small>
          </InputGroup>
          <Row>
            <InputGroup>
              <label htmlFor="cep">CEP</label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cep', form.errors.cep)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                id="number"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('number', form.errors.number)}</small>
            </InputGroup>
          </Row>
          <InputGroup>
            <label htmlFor="complement">Complemento (opcional)</label>
            <input
              type="text"
              id="complement"
              name="complement"
              value={form.values.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('complement', form.errors.complement)}
            </small>
          </InputGroup>
          <ButtonContainer
            type="button"
            title="Clique aqui para continuar com a entrega"
          >
            Continuar com o pagamento
          </ButtonContainer>
          <ButtonContainer
            type="button"
            title="Clique aqui para voltar ao carrinho"
          >
            Voltar ao carrinho
          </ButtonContainer>
        </Sidebar>
      </CartContainer>

      {/* <CartContainer>
        <Overlay />
        <Sidebar>
          <Title>Pagamento - Valor a pagar R$ 190,90</Title>
          <InputGroup>
            <label htmlFor="cardDisplayName">Nome no cartão</label>
            <input
              type="text"
              id="cardDisplayName"
              name="cardDisplayName"
              value={form.values.cardDisplayName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('cardDisplayName', form.errors.cardDisplayName)}
            </small>
          </InputGroup>
          <Row>
            <InputGroup>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={form.values.cardNumber}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('cardNumber', form.errors.cardNumber)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="cardCode">CVV</label>
              <input
                type="text"
                id="cardCode"
                name="cardCode"
                value={form.values.cardCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cardCode', form.errors.cardCode)}</small>
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <label htmlFor="expiresMonth">Mês de vencimento</label>
              <input
                type="text"
                id="expiresMonth"
                name="expiresMonth"
                value={form.values.expiresYear}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="expiresYear">Ano de vencimento</label>
              <input
                type="text"
                id="expiresYear"
                name="expiresYear"
                value={form.values.expiresMonth}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('expiresYear', form.errors.expiresYear)}
              </small>
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
      </CartContainer> */}
    </form>
  )
}
export default Checkout
