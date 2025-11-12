import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HelloWorld } from './HelloWorld'

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = { count: 0 }
//   }
function App() {
  // const [a, b] = [1, 2]
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  // render() { return `<div> ...  ${viteLogo} </div>` }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React !!!</h1>
      <HelloWorld name="Boris"></HelloWorld>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
