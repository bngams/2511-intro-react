import './App.css'
import { BrowserRouter } from 'react-router'
import Header from './components/Header'
import AppRoutes from './AppRoutes'
import CartProvider from './features/cart/providers/CartProvider'
import { Provider } from 'react-redux'
import store from './store'
import { AuthProvider } from './features/auth/context/AuthContext'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
            <AuthProvider>
              <CartProvider>
                <Header className='bg-gray-400' />
                <AppRoutes />
              </CartProvider>
            </AuthProvider>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
