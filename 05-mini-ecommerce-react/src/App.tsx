import './App.css'
import { BrowserRouter } from 'react-router'
import Header from './components/Header'
import AppRoutes from './AppRoutes'
import CartProvider from './features/cart/providers/CartProvider'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
            <CartProvider>
              <Header className='bg-gray-400' />
              <AppRoutes />
            </CartProvider>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
