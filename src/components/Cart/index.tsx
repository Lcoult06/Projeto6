import Button from '../Button'
import pizza from '../../assets/images/pizza.png'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={pizza} />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizza} />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizza} />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Prices>
        Valor Total <span>R$ 182,70</span>
      </Prices>
      <Button type="button" title="Clique aquipara continuar com a entrega">
        Continuar com a entrega
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
