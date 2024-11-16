import { useEffect, useState } from 'react'
import HeaderHome from '../../components/HeaderHome'
import RestaurantsList from '../../components/RestaurantsList'

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao?: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado?: boolean
  tipo?: string
  avaliacao?: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}
const Home = () => {
  const [restaurante, setRestaurante] = useState<Restaurante[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])
  return (
    <>
      <HeaderHome />
      <RestaurantsList restaurantes={restaurante} />
    </>
  )
}

export default Home
