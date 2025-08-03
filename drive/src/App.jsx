// src/App.jsx
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styled from 'styled-components'; // 1. Importando 'styled' para criar o wrapper
import theme from './styles/theme';
import Desktop from './components/Desktop';
import Dock from './components/Dock';
import MenuBar from './components/MenuBar';

// Nenhuma mudança no GlobalStyle
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    background-image: url('/waves.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
  }
`;

// 2. Criando o AppWrapper como um container de CSS Grid
const AppWrapper = styled.div`
  height: 100vh; /* Ocupa a altura total da tela */
  display: grid;
  /* Define duas linhas:
     - A primeira ('auto') terá a altura exata do seu conteúdo (a MenuBar).
     - A segunda ('1fr') ocupará todo o espaço restante (o Desktop).
  */
  grid-template-rows: auto 1fr;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* 3. Envolvendo a MenuBar e o Desktop no novo AppWrapper */}
      <AppWrapper>
        <MenuBar />
        <Desktop />
      </AppWrapper>
      {/* A Dock permanece fora do AppWrapper, pois seu posicionamento
          é fixo e independente do fluxo do layout principal. */}
      <Dock />
    </ThemeProvider>
  );
}

export default App;