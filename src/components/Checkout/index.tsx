import { useEffect } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Navigate } from 'react-router-dom'

import { usePurchaseMutation } from '../../services/api'
import { ButtonContainer } from '../../components/Button/styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { open, clear } from '../../store/reducers/cart'
import {
  openDelivery,
  openPayment,
  openConfirmation,
  closeDelivery,
  closePayment,
  closeConfirmation
} from '../../store/reducers/checkout'

import {
  CartContainer,
  ContainerConfirmation,
  InputGroup,
  Overlay,
  Row,
  Sidebar,
  Title
} from './styles'

const Checkout = () => {
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const { deliveryIsOpen, paymentIsOpen, confirmationIsOpen } = useSelector(
    (state: RootReducer) => state.checkout
  )

  const dispatch = useDispatch()

  // fechar o sidebar ao clicar
  const closeCart = () => {
    dispatch(closeDelivery())
    dispatch(closePayment())
    dispatch(closeConfirmation())
  }

  const openCart = () => {
    dispatch(closeDelivery())
    dispatch(open())
  }

  const openPaymentCart = () => {
    dispatch(closeDelivery())
    dispatch(openPayment())
  }

  const openDeliveryCart = () => {
    dispatch(closePayment())
    dispatch(openDelivery())
  }

  const openConfirmationCart = () => {
    dispatch(closePayment())
    dispatch(openConfirmation())
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      if (valorAtual.preco) {
        return (acumulador += valorAtual.preco)
      }
      return 0
    }, 0)
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      adress: '',
      city: '',
      zipCode: '',
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
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.adress,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.touched
    const hasError = isTouched && isInvalid

    return hasError
  }

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(clear())
  //   }
  // }, [isSuccess, dispatch])

  // if (items.length === 0 && !isSuccess) {
  //   return <Navigate to="/restaurantes/:id" />
  // }

  return (
    <div>
      <form onSubmit={form.handleSubmit}>
        <CartContainer className={deliveryIsOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCart} />
          <Sidebar>
            <Title>Entrega</Title>
            <InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                className={checkInputHasError('receiver') ? 'error' : ''}
                type="text"
                id="receiver"
                name="receiver"
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="adress">Endereço</label>
              <input
                className={checkInputHasError('adress') ? 'error' : ''}
                type="text"
                id="adress"
                name="adress"
                value={form.values.adress}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                className={checkInputHasError('city') ? 'error' : ''}
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <Row>
              <InputGroup>
                <label htmlFor="zipCode">CEP</label>
                <input
                  className={checkInputHasError('zipCode') ? 'error' : ''}
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  className={checkInputHasError('number') ? 'error' : ''}
                  type="text"
                  id="number"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
            </Row>
            <InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                className={checkInputHasError('complement') ? 'error' : ''}
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <ButtonContainer
              type="button"
              title="Clique aqui para continuar o pagamento"
              onClick={openPaymentCart}
            >
              Continuar com o pagamento
            </ButtonContainer>
            <ButtonContainer
              onClick={openCart}
              type="button"
              title="Clique aqui para voltar ao carrinho"
            >
              Voltar ao carrinho
            </ButtonContainer>
          </Sidebar>
        </CartContainer>

        <CartContainer className={paymentIsOpen ? 'is-open' : ''}>
          <Overlay onClick={closeCart} />
          <Sidebar>
            <Title>
              Pagamento - Valor a pagar {formataPreco(getTotalPrice())}
            </Title>
            <InputGroup>
              <label htmlFor="cardDisplayName">Nome no cartão</label>
              <input
                className={checkInputHasError('cardDisplayName') ? 'error' : ''}
                type="text"
                id="cardDisplayName"
                name="cardDisplayName"
                value={form.values.cardDisplayName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </InputGroup>
            <Row>
              <InputGroup>
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="cardCode">CVV</label>
                <input
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                  type="text"
                  id="cardCode"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  className={checkInputHasError('expiresMonth') ? 'error' : ''}
                  type="text"
                  id="expiresMonth"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  className={checkInputHasError('expiresYear') ? 'error' : ''}
                  type="text"
                  id="expiresYear"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
              </InputGroup>
            </Row>
            <ButtonContainer
              type="submit"
              title="Clique aqui para finalizar a compra"
            >
              Finalizar pagamento
            </ButtonContainer>
            <ButtonContainer type="button" onClick={openDeliveryCart}>
              Voltar para a edição de endereço
            </ButtonContainer>
          </Sidebar>
        </CartContainer>

        <CartContainer className={confirmationIsOpen ? 'is-open' : ''}>
          <Overlay />
          <Sidebar>
            <Title>Pedido realizado - </Title>
            <ContainerConfirmation>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.{' '}
                <br /> <br />
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras. <br /> <br />
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição. <br /> <br />
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite! <br /> <br />
              </p>
              <ButtonContainer
                type="submit"
                onClick={closeCart}
                title="Clique aqui para concluir"
              >
                Concluir
              </ButtonContainer>
            </ContainerConfirmation>
          </Sidebar>
        </CartContainer>
      </form>
    </div>
  )
}

export default Checkout

{
  /* <CartContainer>
  <Overlay />
  <Sidebar>
  <Title>Pedido realizado - </Title>
  <ContainerConfirmation>
          <p>
            Estamos felizes em informar que seu pedido já está em processo
            de preparação e, em breve, será entregue no endereço fornecido.{' '}
            <br /> <br />
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras. <br /> <br />
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o
            recebimento do pedido, garantindo assim sua segurança e
            bem-estar durante a refeição. <br /> <br />
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
    </CartContainer> */
}