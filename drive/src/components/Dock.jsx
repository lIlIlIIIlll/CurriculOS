// src/components/Dock.jsx

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import dockItems from '../data/dockItems';
import { glassmorphismStyle } from '../styles/sharedStyles'; // 1. Importando o estilo compartilhado

// O container principal da Dock, agora usando o estilo compartilhado.
const DockWrapper = styled.nav`
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 6px;
  height: 64px;
  z-index: ${({ theme }) => theme.zIndex.dock};
  border-radius: 20px;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.25);

  /* 2. Injetando o estilo de vidro fosco. */
  ${glassmorphismStyle}
`;

// Nenhuma mudança no resto do arquivo
const DockItem = styled.div`
  margin: 0 6px;
  cursor: pointer;
`;

const Separator = styled.div`
  width: 1px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  align-self: center;
`;

const AnimatedIcon = styled(motion.img)`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

function Dock() {
  return (
    <DockWrapper>
      {dockItems.map((item) => {
        if (item.type === 'separator') {
          return <Separator key={item.id} />;
        }
        return (
          <DockItem key={item.id}>
            <AnimatedIcon
              src={`/${item.icon}`}
              alt={item.name}
              title={item.name}
              whileHover={{
                scale: 1.5,
                y: -10,
              }}
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 15,
              }}
            />
          </DockItem>
        );
      })}
    </DockWrapper>
  );
}

export default Dock;