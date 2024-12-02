import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'

import { useParams } from 'react-router-dom'
import { Restaurante } from '../Home'
import Product from '../../components/Product'
import { ProductList } from './styles'
import { useGetRestauranteQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestauranteQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }
  // const [restaurante, setCardapio] = useState<Restaurante>()

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setCardapio(res))
  // }, [id])

  // if (!restaurante) {
  //   return <h3>Carregando...</h3>
  // }
  return (
    <>
      <Header />
      <Banner restaurante={restaurante} />
      <ProductList className="container">
        <Product key={restaurante.id} restaurante={restaurante.cardapio} />
      </ProductList>
    </>
  )
}

export default Perfil
