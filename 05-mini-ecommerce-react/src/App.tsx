import './App.css'
import { BrowserRouter } from 'react-router'
import Header from './components/Header'
import AppRoutes from './AppRoutes'
import CartProvider from './features/cart/providers/CartProvider'

function App() {

  return (
    <>
      <BrowserRouter>
          <CartProvider>
            <Header />
            <AppRoutes />
          </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
