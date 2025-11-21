import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to React</h1>
        <p>Get started by editing <code>src/App.jsx</code></p>
      </header>
      
      <main className="app-main">
        <div className="card">
          <h2>Counter Example</h2>
          <div className="counter-section">
            <button 
              className="counter-button"
              onClick={() => setCount((count) => count - 1)}
            >
              -
            </button>
            <div className="counter-value">{count}</div>
            <button 
              className="counter-button"
              onClick={() => setCount((count) => count + 1)}
            >
              +
            </button>
          </div>
          <button 
            className="reset-button"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>

        <div className="card">
          <h2>Features</h2>
          <ul className="features-list">
            <li>⚡️ Fast HMR (Hot Module Replacement)</li>
            <li>🎨 Modern UI with CSS</li>
            <li>📦 Optimized build with Vite</li>
            <li>⚛️ React 18 with Hooks</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App

