// src/components/window-content/ExplorerWindow.jsx

import React, { useState } from 'react'; // 1. Importando o useState
import styled from 'styled-components';
import desktopItems from '../../data/desktopItems';
import { glassmorphismStyle } from '../../styles/sharedStyles'; // 2. Importando o estilo compartilhado

// --- Styled Components ---

const ExplorerWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  /* O fundo do wrapper geral agora é transparente, pois a sidebar e o conteúdo terão seus próprios fundos */
  background-color: transparent;
`;

const Sidebar = styled.aside`
  width: 220px;
  flex-shrink: 0;
  padding: 16px 8px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 12px;

  /* 3. Injetando o estilo de vidro fosco na sidebar */
  ${glassmorphismStyle}
`;

const SidebarSection = styled.div`
  margin-bottom: 24px;
`;

const SectionHeader = styled.h3`
  font-size: 11px;
  font-weight: 600;
  color: #555; /* Cor ajustada para melhor contraste */
  padding: 0 12px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  /* O fundo ativo agora é um azul semitransparente, mais fiel ao macOS */
  background-color: ${({ active }) =>
    active ? 'rgba(0, 123, 255, 0.9)' : 'transparent'};
  color: ${({ active }) => (active ? 'white' : '#333')};
  font-weight: ${({ active }) => (active ? '600' : '400')};

  &:hover {
    background-color: ${({ active }) =>
      active ? 'rgba(0, 123, 255, 0.9)' : 'rgba(0, 0, 0, 0.05)'};
  }

  img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;

const ContentArea = styled.main`
  flex-grow: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0; /* Fundo sólido para a área de conteúdo */
`;

// Nenhuma mudança no restante dos styled-components
const ContentHeader = styled.div`
  margin-bottom: 24px;
  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #222;
  }
  p {
    font-size: 14px;
    color: #777;
  }
`;

const ContentBody = styled.div`
  p {
    color: #555;
  }
`;

// --- Component ---

function ExplorerWindow({ directoryId, selectedItemId }) {
  // 4. Lógica de estado local para controlar o item ativo
  const [activeItemId, setActiveItemId] = useState(selectedItemId);

  const directoryItems = desktopItems.filter(
    (item) => item.directory === directoryId
  );

  // 5. O item exibido no conteúdo agora é baseado no estado local 'activeItemId'
  const activeItem = desktopItems.find((item) => item.id === activeItemId);

  // 6. O clique agora apenas atualiza o estado local, não abre uma nova janela
  const handleItemClick = (itemId) => {
    setActiveItemId(itemId);
  };

  return (
    <ExplorerWrapper>
      <Sidebar>
        <SidebarSection>
          <SectionHeader>Projetos</SectionHeader>
          {directoryItems.map((item) => (
            <SidebarItem
              key={item.id}
              // O estado 'active' é determinado pelo estado local
              active={item.id === activeItemId}
              onClick={() => handleItemClick(item.id)}
            >
              <img src={`/${item.icon}`} alt="" />
              {item.name}
            </SidebarItem>
          ))}
        </SidebarSection>
      </Sidebar>

      <ContentArea>
        {activeItem && (
          <>
            <ContentHeader>
              <h2>{activeItem.name}</h2>
              <p>Classroom Project</p>
            </ContentHeader>
            <ContentBody>
              <p>
                Conteúdo para o projeto {activeItem.name} viria aqui.
                Poderia incluir uma descrição, imagens, ou mais ícones.
              </p>
            </ContentBody>
          </>
        )}
      </ContentArea>
    </ExplorerWrapper>
  );
}

export default ExplorerWindow;