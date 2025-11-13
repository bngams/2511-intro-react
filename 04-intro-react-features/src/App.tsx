import './App.css'
import Header from './components/custom-ui/Header'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';

function App() {

  const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> }
  ];

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
