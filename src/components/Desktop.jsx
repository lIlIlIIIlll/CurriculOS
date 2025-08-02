// src/components/Desktop.jsx

import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import Window from './Window';
import desktopItems from '../data/desktopItems';
import useWindowStore from '../store/windowStore';

const DesktopWrapper = styled.main`
  width: 100%;
  /* 1. A propriedade 'height: 100vh' foi removida.
     O DesktopWrapper agora terá sua altura definida pela segunda linha
     do grid ('1fr') no AppWrapper, preenchendo o espaço restante.
  */
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.medium};

  /* 2. Adicionado 'overflow: hidden' para garantir que os ícones arrastados
     ou as janelas não possam "vazar" para fora da área do desktop.
     Isso é importante porque o 'bounds="parent"' do Draggable se baseia
     nos limites deste container.
  */
  overflow: hidden;
`;

function Desktop() {
  const { openWindows } = useWindowStore();

  return (
    <DesktopWrapper>
      {desktopItems.map((item) => (
        <Icon key={item.id} item={item} />
      ))}

      {openWindows.map((win) => (
        <Window key={win.id} {...win} />
      ))}
    </DesktopWrapper>
  );
}

export default Desktop;