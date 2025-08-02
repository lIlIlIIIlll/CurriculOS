// src/components/Desktop.jsx

import React from 'react';
import styled from 'styled-components';
import Icon from './Icon'; // Importa o componente Icon
import desktopItems from '../data/desktopItems'; // Importa os dados dos ícones

// O DesktopWrapper é o container principal que ocupa toda a tela.
// Ele serve como o "palco" para todos os outros elementos.
const DesktopWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  
  /*
    Essencial para que possamos posicionar os ícones e janelas (que terão
    position: absolute) em relação à área de trabalho, e não à página inteira.
  */
  position: relative; 
`;

function Desktop() {
  return (
    <DesktopWrapper>
      {/* 
        Este é o container onde renderizaremos os ícones e janelas.
        Ex: <Icon name="About Me" />
            <Icon name="Projects" />
            <Window title="About Me">...</Window> 
      */}
      {desktopItems.map((item) => (
        <Icon
          key={item.id} // A 'key' é essencial para o React identificar cada item da lista
          name={item.name}
          type={item.type}
          initialPosition={item.initialPosition}
        />
      ))}
    </DesktopWrapper>
  );
}

export default Desktop;