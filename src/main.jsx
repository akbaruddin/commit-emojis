import React from 'react'
import ReactDOM from 'react-dom'
import { HeadProvider } from 'react-head';
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <HeadProvider>
      <App />
    </HeadProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
