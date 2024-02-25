import React from 'react'
import ReactDOM from 'react-dom/client'
import Title from './Header.jsx'
import Copyright from './Footer.jsx'
import Counter from './Counter.jsx'

ReactDOM.createRoot(document.querySelector('#header')).render(
  <React.StrictMode>
    <Title />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.querySelector('#count')).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
)


ReactDOM.createRoot(document.querySelector('#footer')).render(
  <React.StrictMode>
    <Copyright />
  </React.StrictMode>,
)
