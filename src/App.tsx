import React from 'react';
import { BrowserRouter } from "react-router-dom"
import GlobalStyleComponent from './styles/global'
import { Routes } from './Routes'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleComponent />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
