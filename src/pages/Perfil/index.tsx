import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import Product from '../../components/Product'
import { CardapioItem, Restaurante } from '../Home'
import { useParams } from 'react-router-dom'

// export interface CardapioItem {
//   foto: string
//   id: number
//   nome: string
//   descricao: string
//   porcao?: string
// }

// export type Restaurantes = {
//   id: number
//   titulo: string
//   destacado?: boolean
//   tipo?: string
//   avaliacao?: number
//   descricao: string
//   capa: string
//   cardapio: {
//     foto: string
//     id: number
//     nome: string
//     descricao: string
//     porcao?: string
//   }
// }

// export type Props = {
//   cardapio: Restaurante[]
// }
const Perfil = () => {
  // // const [item, setCardapio] = useState<Restaurante[]>([])

  // // useEffect(() => {
  // //   fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
  // //     .then((res) => res.json())
  // //     .then((res) => setCardapio(res))
  // // }, [])

  // const { id } = useParams()
  // const [cardapios, setCardapio] = useState<Restaurante>()

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setCardapio(res))
  // }, [id])

  // if (!cardapios) {
  //   return <h3>Carregando...</h3>
  // }

  return (
    <>
      <Header />
      <Banner />
      <ProductsList />
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
