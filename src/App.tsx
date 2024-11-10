import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { GlobalCss } from './styles'

import Footer from './components/Footer'
import Rotas from './routes'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
