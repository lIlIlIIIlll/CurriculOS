// src/App.jsx
import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from './styles/theme';
import Desktop from './components/Desktop'

// Componente de Estilo Global para aplicar o fundo de grade e outros estilos base.
// Ele utiliza o tema que passamos para o ThemeProvider.
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    
    /* 
      Cria o efeito de grade usando gradientes lineares.
      Duas camadas de gradientes são sobrepostas: uma para as linhas horizontais
      e outra para as verticais.
    */
    background-image: 
      linear-gradient(to right, ${({ theme }) => theme.colors.gridLine} 1px, transparent 1px),
      linear-gradient(to bottom, ${({ theme }) => theme.colors.gridLine} 1px, transparent 1px);
    background-size: 20px 20px; // Define o tamanho de cada célula da grade
    overflow: hidden; // Impede o scroll da página, a "área de trabalho" é fixa.
  }
`;

function App() {
  return (
    // O ThemeProvider disponibiliza o objeto 'theme' para todos os componentes
    // estilizados aninhados, via props.
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* Aqui é onde nosso desktop e todos os outros componentes viverão.*/}
      <Desktop />
    </ThemeProvider>
  );
}

export default App;