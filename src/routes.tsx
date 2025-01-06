import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Checkout from './pages/Checkout'
// import Payment from './components/Payment'
// import Confirmation from './components/Confirmation'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Perfil />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
