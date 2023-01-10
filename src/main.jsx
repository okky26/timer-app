import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import timeStore from './components/redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={timeStore}>
      <App />
    </Provider>
  </Router>
  
)
