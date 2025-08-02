// src/App.jsx
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './styles/theme';
import Desktop from './components/Desktop';
import Dock from './components/Dock';

// O GlobalStyle foi atualizado para usar uma imagem de fundo.
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    
    /* 
      1. As propriedades de 'background-image' e 'background-size'
         que criavam a grade foram removidas.
    */

    /* 
      2. Adicionando o novo wallpaper.
      - A imagem 'waves.jpg' é carregada a partir da pasta /public.
      - 'background-size: cover' garante que a imagem cubra toda a tela.
      - 'background-position: center' centraliza a imagem.
      - 'background-repeat: no-repeat' impede que a imagem se repita.
    */
    background-image: url('/waves.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    overflow: hidden;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Desktop />
      <Dock />
    </ThemeProvider>
  );
}

export default App;