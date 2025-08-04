// src/components/window-content/ExplorerWindow.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import desktopItems from '../../data/desktopItems';
import { glassmorphismStyle } from '../../styles/sharedStyles';
import ProjectWindow from './ProjectWindow';

// --- Styled Components ---
// Nenhuma mudança nos estilos.

const ExplorerWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
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
  ${glassmorphismStyle}
`;

const SidebarSection = styled.div`
  margin-bottom: 24px;
`;

const SectionHeader = styled.h3`
  font-size: 11px;
  font-weight: 600;
  color: #555;
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
  background-color: ${({ active }) => (active ? '#007aff' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  font-weight: ${({ active }) => (active ? '500' : '400')};

  &:hover {
    background-color: ${({ active }) =>
      active ? '#007aff' : 'rgba(0, 0, 0, 0.05)'};
  }

  img {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;

const ContentArea = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  border-bottom-right-radius: 12px;
`;

// --- Componente ---

// 1. O componente agora recebe 'isParentMaximized' como prop.
function ExplorerWindow({ directoryId, selectedItemId, isParentMaximized }) {
  const [activeItemId, setActiveItemId] = useState(selectedItemId);

  const directoryItems = desktopItems.filter(
    (item) => item.directory === directoryId
  );

  const activeItem = desktopItems.find((item) => item.id === activeItemId);

  const handleItemClick = (itemId) => {
    setActiveItemId(itemId);
  };

  const renderMainContent = () => {
    if (activeItem && activeItem.subItems) {
      // 2. A prop 'isParentMaximized' é passada para o ProjectWindow.
      return (
        <ProjectWindow
          items={activeItem.subItems}
          isParentMaximized={isParentMaximized}
        />
      );
    }

    return (
      <div style={{ padding: '24px' }}>
        <h2>{activeItem?.name || 'Selecione um item'}</h2>
        <p>Este item não contém um projeto.</p>
      </div>
    );
  };

  return (
    <ExplorerWrapper>
      <Sidebar>
        <SidebarSection>
          <SectionHeader>Projetos</SectionHeader>
          {directoryItems.map((item) => (
            <SidebarItem
              key={item.id}
              active={item.id === activeItemId}
              onClick={() => handleItemClick(item.id)}
            >
              <img src={`/${item.icon}`} alt="" />
              {item.name}
            </SidebarItem>
          ))}
        </SidebarSection>
      </Sidebar>

      <ContentArea>{renderMainContent()}</ContentArea>
    </ExplorerWrapper>
  );
}

export default ExplorerWindow;