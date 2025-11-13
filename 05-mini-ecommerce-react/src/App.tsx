import './App.css'
import { BrowserRouter } from 'react-router'
import Header from './components/Header'
import AppRoutes from './AppRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
          <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
