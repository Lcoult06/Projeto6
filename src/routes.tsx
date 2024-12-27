import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Checkout from './components/Checkout'
import Payment from './components/Payment'
import Confirmation from './components/Confirmation'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Perfil />} />
    <Route path="/restaurantes/:id" element={<Perfil />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/confirmation" element={<Confirmation />} />
  </Routes>
)

export default Rotas
