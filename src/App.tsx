import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Footer from './components/Footer'
import Rotas from './routes'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
      <Cart />
    </BrowserRouter>
  )
}

export default App
