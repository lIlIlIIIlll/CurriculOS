// src/components/Dock.jsx

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import dockItems from '../data/dockItems';

// Nenhuma mudança neste componente
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
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  backdrop-filter: blur(18px) saturate(120%);
  -webkit-backdrop-filter: blur(18px) saturate(120%);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.25);
`;

// Nenhuma mudança neste componente
const DockItem = styled.div`
  margin: 0 6px;
  cursor: pointer;
`;

// 1. Novo styled-component para a linha separadora.
const Separator = styled.div`
  width: 1px;
  height: 40px; /* Altura menor que a da dock para ficar centralizado */
  background-color: rgba(0, 0, 0, 0.4); /* Cor sutil */
  margin: 0 8px; /* Espaçamento horizontal */
  align-self: center; /* Centraliza verticalmente dentro da Dock */
`;

// Nenhuma mudança neste componente
const AnimatedIcon = styled(motion.img)`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

function Dock() {
  return (
    <DockWrapper>
      {/* 2. Lógica de renderização atualizada */}
      {dockItems.map((item) => {
        // 3. Se o item for um separador, renderiza o componente Separator
        if (item.type === 'separator') {
          return <Separator key={item.id} />;
        }

        // Caso contrário, renderiza o ícone animado como antes
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