import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { Container } from './components/Container'
import GlobalStyleComponent from './styles/global'
import { Routes } from './Routes'


function App() {
  return (
    <BrowserRouter>
      <Container>
        <GlobalStyleComponent />
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
