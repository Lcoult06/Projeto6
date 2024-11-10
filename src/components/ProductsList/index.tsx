import { CardapioItem, Restaurante } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'
import ProdutoImg from '../../assets/images/pizza.png'
import Restaurant from '../Restaurant'
import banner from '../../assets/images/japonesa.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// export type Props = {
//   cardapio: Restaurante[]
// }

// const ProductsList = () => {
//   const { id } = useParams()

//   const [cardapios, setCardapio] = useState<Restaurante>()

//   useEffect(() => {
//     fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
//       .then((res) => res.json())
//       .then((res) => setCardapio(res))
//   }, [id])

//   if (!cardapios) {
//     return <h3>Carregando...</h3>
//   }

//   return (
//     <Container>
//       <div className="container">
//         {/* <ul>
//           <List key={cardapios.id}>
//             <Product items={cardapios.cardapio} />
//           </List>
//         </ul> */}
//         <List>
//           <li key={cardapios.id}>
//             <Product items={cardapios.cardapio} />
//           </li>
//         </List>
//       </div>
//     </Container>
//   )
// }

// export default ProductsList

{
  /* <Product items={[]} />
<Product items={[]} />
<Product items={[]} />
<Product items={[]} />
<Product items={[]} /> */
}
const ProductsList = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurant, setRestaurant] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
  }, [id])

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurant.cardapio.map((item: CardapioItem) => (
            <li key={item.id}>
              <Product items={restaurant.cardapio} />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
