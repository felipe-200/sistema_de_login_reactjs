import React from 'react';
import { BrowserRouter } from "react-router-dom"
import GlobalStyleComponent from './styles/global'
import { Routes } from './Routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyleComponent />
      <Routes />
    </BrowserRouter>
  )
}

export default App;
