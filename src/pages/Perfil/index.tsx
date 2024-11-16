import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Product from '../../components/Product'
import { CardapioItem, Restaurante } from '../Home'
import { useParams } from 'react-router-dom'
import { ProductList } from './styles'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setCardapio] = useState<Restaurante>()
  const [menu, setMenu] = useState<CardapioItem[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setCardapio(res)
        const { cardapio } = res
        setMenu(cardapio)
      })
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Banner restaurante={restaurante} />
      <ProductList className="container">
        {menu.map((restaurante) => (
          <Product key={restaurante.id} restaurante={restaurante} />
        ))}
      </ProductList>
    </>
  )
}

// const Perfil = () => {
//   const [item, setCardapio] = useState<Restaurantes[]>([])

//   useEffect(() => {
//     fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
//       .then((res) => res.json())
//       .then((res) => setCardapio(res))
//   }, [])

//   return (
//     <>
//       <Header />
//       <Banner />
//       <ProductsList cardapio={item} />
//     </>
//   )
// }

export default Perfil
