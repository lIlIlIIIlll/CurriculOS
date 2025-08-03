// src/styles/theme.js

/*
  Este arquivo centraliza as variáveis de design da aplicação,
  como paleta de cores, fontes, espaçamentos e z-index.
  Usar um tema garante consistência visual e facilita a manutenção.
*/

const theme = {
  colors: {
    background: '#f8f9fa', // Cor de fundo do desktop (um cinza bem claro)
    gridLine: '#e9ecef',   // Cor das linhas da grade
    text: '#212529',       // Cor de texto padrão
    primary: '#007bff',      // Cor primária para destaques, botões, etc.
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  // Camadas de empilhamento para garantir que janelas, docks e menus
  // apareçam na ordem correta.
  zIndex: {
    desktop: 0,
    dock: 100,
    window: 10,
    windowActive: 20,
    menu: 200,
  },
};

export default theme;