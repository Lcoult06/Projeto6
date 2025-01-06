import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'
import { close, remove } from '../../store/reducers/cart'
import { openDelivery } from '../../store/reducers/checkout'
import { RootReducer } from '../../store'

import Button from '../Button'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
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

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const delivery = () => {
    closeCart()
    dispatch(openDelivery())
  }

  const goToCheckout = () => {
    if (items.length === 0) {
      return closeCart()
    }
    return delivery()
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Prices>
              Valor Total <span>{formataPreco(getTotalPrice())} </span>
            </Prices>
            <Button
              onClick={() => delivery()}
              type="button"
              title="Clique aqui para continuar com a entrega"
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
