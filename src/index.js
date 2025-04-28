import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './index.css'
import { ThemeProvider } from './context/ThemeContext'

async function enableMocking() {
  if (process.env.REACT_APP_API_MODE !== "msw") {
    return
  }

  const { worker } = await import('./mocks/browser')

  return worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'))
enableMocking().then(() => {
  root.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
})

