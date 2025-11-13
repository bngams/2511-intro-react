import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './Home.css'
import { Button } from '../components/ui/button'

function Home() {

    const [count, setCount] = useState(0)
    return (
      <>
        <div>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
            <Button 
            size="lg" 
            variant="destructive"
            onClick={() => setCount((count) => count + 1)}
            className="mx-2 text-white"
            >
            count is {count}
            </Button>
            <button 
            onClick={() => setCount((count) => count + 1)} 
            className="text-white"
            >
            count is {count}
            </button>
            <p>
            Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
      </>
    )
}

export default Home;