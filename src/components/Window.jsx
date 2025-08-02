// src/components/Window.jsx

import React, { useRef } from 'react';
import styled from 'styled-components'; // O 'css' helper não é mais necessário
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import { motion } from 'framer-motion';
import useWindowStore from '../store/windowStore';
import ExplorerWindow from './window-content/ExplorerWindow';
import { glassmorphismStyle } from '../styles/sharedStyles';

// --- Styled Components ---

// O 'maximizedStyle' foi removido. A animação será controlada pelo Framer Motion.
const WindowWrapper = styled(motion.div)`
  position: absolute;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

// O DraggableWrapper agora é um motion.div para controlar a animação de maximização.
const DraggableWrapper = styled(motion.div)`
  position: absolute;
`;

// Nenhuma mudança no resto dos styled-components
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
  overflow: hidden;
`;

// --- Animações ---

// Variants para a animação de entrada da janela
const windowContentVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

// 1. Variants para controlar o estado de maximização do container da janela
const wrapperVariants = {
  initial: {
    // No estado inicial, não definimos tamanho ou posição,
    // deixando o ResizableBox ou o tamanho padrão controlar.
  },
  maximized: {
    top: 0,
    left: 0,
    width: '100vw', // Ocupa a largura total da viewport
    height: '100vh', // Ocupa a altura da viewport menos a Dock
    // O 'transform' é resetado para garantir o posicionamento correto.
  },
};

// --- Componente ---

function Window({ id, title, zIndex, resizable, component, directory, isMaximized }) {
  const { closeWindow, focusWindow, toggleMaximize } = useWindowStore();
  const nodeRef = useRef(null);

  const renderContent = () => {
    if (directory) {
      return <ExplorerWindow directoryId={directory} selectedItemId={id} />;
    }
    return component;
  };

  const windowContent = (
    <WindowWrapper
      // A prop 'isMaximized' foi removida daqui
      style={{ zIndex }}
      onMouseDown={() => focusWindow(id)}
      variants={windowContentVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2, ease: 'easeOut' }}
      layout // A prop 'layout' continua aqui para animar o redimensionamento manual
    >
      <WindowHeader className="window-header">
        <TrafficLights>
          <TrafficLightButton color="#ff5f57" onClick={() => closeWindow(id)} />
          <TrafficLightButton color="#febc2e" onClick={() => closeWindow(id)} />
          <TrafficLightButton color="#28c840" onClick={() => toggleMaximize(id)} />
        </TrafficLights>
        <WindowTitle>{title}</WindowTitle>
      </WindowHeader>
      <WindowBody>{renderContent()}</WindowBody>
    </WindowWrapper>
  );

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-header"
      bounds="parent"
      disabled={isMaximized}
    >
      {/* 2. O DraggableWrapper agora é um motion.div que controla a animação */}
      <DraggableWrapper
        ref={nodeRef}
        variants={wrapperVariants}
        // 3. A prop 'animate' escolhe a variant com base no estado 'isMaximized'
        animate={isMaximized ? 'maximized' : 'initial'}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {resizable && !isMaximized ? (
          <ResizableBox
            height={400}
            width={600}
            minConstraints={[350, 200]}
            maxConstraints={[1200, 800]}
          >
            {windowContent}
          </ResizableBox>
        ) : (
          windowContent
        )}
      </DraggableWrapper>
    </Draggable>
  );
}

export default Window;