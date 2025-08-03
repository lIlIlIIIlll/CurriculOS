// src/components/Window.jsx

import React, { useRef } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import { motion } from 'framer-motion';
import useWindowStore from '../store/windowStore';
import ExplorerWindow from './window-content/ExplorerWindow';
import { glassmorphismStyle } from '../styles/sharedStyles';

// --- Styled Components ---

// O WindowWrapper agora é um motion.div para animar seu tamanho.
// O posicionamento (transform) será controlado pelo Draggable.
const WindowWrapper = styled(motion.div)`
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #f0f0f0; // Fundo padrão da janela
  width: 100%; // Ocupa 100% do ResizableBox
  height: 100%; // Ocupa 100% do ResizableBox
`;

// Os demais styled-components não precisam de alteração.
const WindowHeader = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  cursor: grab;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${glassmorphismStyle}
  &:active {
    cursor: grabbing;
  }
`;

const TrafficLights = styled.div`
  display: flex;
  align-items: center;
`;

const TrafficLightButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${({ color }) => color};
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const WindowTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  user-select: none;
`;

const WindowBody = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow: auto; // Alterado para 'auto' para permitir scroll no conteúdo
`;

// --- Animações ---

// 1. Variants para animar o tamanho da janela
const windowSizeVariants = {
  restored: (size) => ({
    width: size.width,
    height: size.height,
  }),
  maximized: {
    // A altura desconta a MenuBar. O 'calc' é uma forma segura de fazer isso.
    width: '100vw',
    height: 'calc(100vh - 28px)',
  },
};

// --- Componente ---

// 2. O componente agora recebe 'position' e 'size' do store.
function Window({
  id,
  title,
  zIndex,
  resizable,
  component,
  directory,
  isMaximized,
  position,
  size,
}) {
  // 3. Pegamos as novas ações para atualizar o estado.
  const {
    closeWindow,
    focusWindow,
    toggleMaximize,
    updateWindowPosition,
    updateWindowSize,
  } = useWindowStore();
  const nodeRef = useRef(null);

  const renderContent = () => {
    if (directory) {
      return <ExplorerWindow directoryId={directory} selectedItemId={id} />;
    }
    return component;
  };

  const windowContent = (
    <WindowWrapper style={{ zIndex }} onMouseDown={() => focusWindow(id)}>
      <WindowHeader className="window-header">
        <TrafficLights>
          <TrafficLightButton color="#ff5f57" onClick={() => closeWindow(id)} />
          <TrafficLightButton color="#febc2e" onClick={() => closeWindow(id)} />
          <TrafficLightButton
            color="#28c840"
            onClick={() => toggleMaximize(id)}
          />
        </TrafficLights>
        <WindowTitle>{title}</WindowTitle>
      </WindowHeader>
      <WindowBody>{renderContent()}</WindowBody>
    </WindowWrapper>
  );

  return (
    // 4. Draggable é agora um componente controlado.
    <Draggable
      nodeRef={nodeRef}
      handle=".window-header"
      bounds="parent"
      // A posição é forçada para (0,0) quando maximizado.
      position={isMaximized ? { x: 0, y: 0 } : position}
      // Quando o usuário para de arrastar, salvamos a nova posição no store.
      onStop={(e, data) => {
        if (!isMaximized) {
          updateWindowPosition(id, { x: data.x, y: data.y });
        }
      }}
      // Desabilita o arraste quando a janela está maximizada.
      disabled={isMaximized}
    >
      {/* 5. Este motion.div é o container que será animado e redimensionado. */}
      <motion.div
        ref={nodeRef}
        // Anima entre os estados 'restored' e 'maximized'.
        animate={isMaximized ? 'maximized' : 'restored'}
        variants={windowSizeVariants}
        // Passa o 'size' para a variant 'restored'.
        custom={size}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          // Garante que o zIndex seja aplicado aqui também.
          zIndex,
        }}
      >
        {resizable && !isMaximized ? (
          // 6. ResizableBox também é controlado pelo estado 'size'.
          <ResizableBox
            height={size.height}
            width={size.width}
            minConstraints={[350, 200]}
            maxConstraints={[1200, 800]}
            // Quando o usuário para de redimensionar, salvamos o novo tamanho.
            onResizeStop={(e, data) => {
              updateWindowSize(id, {
                width: data.size.width,
                height: data.size.height,
              });
            }}
          >
            {windowContent}
          </ResizableBox>
        ) : (
          // Se não for redimensionável ou estiver maximizado, renderiza o conteúdo diretamente.
          <div style={{ width: '100%', height: '100%' }}>{windowContent}</div>
        )}
      </motion.div>
    </Draggable>
  );
}

export default Window;