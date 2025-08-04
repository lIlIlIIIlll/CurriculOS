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
// Nenhuma mudança nos estilos

const CustomResizeHandle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  bottom: 0;
  right: 0;
  cursor: se-resize;
  z-index: 10;
`;

const WindowWrapper = styled(motion.div)`
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: transparent;
  width: 100%;
  height: 100%;
`;

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

const WindowBody = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow: auto;
  background: ${({ isExplorer }) => (isExplorer ? 'transparent' : '#f0f0f0')};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
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

const windowSizeVariants = {
  restored: (size) => ({
    width: size.width,
    height: size.height,
  }),
  maximized: {
    width: '100vw',
    height: 'calc(100vh - 28px)',
  },
};

// --- Componente ---

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
      // 1. A prop 'size' do componente Window é passada para o ExplorerWindow
      //    como 'parentSize'. Isso conecta o estado de tamanho da janela
      //    ao seu conteúdo.
      return (
        <ExplorerWindow
          directoryId={directory}
          selectedItemId={id}
          isParentMaximized={isMaximized}
          parentSize={size}
        />
      );
    }
    return component;
  };

  const windowContent = (
    <WindowWrapper style={{ zIndex }}>
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
      <WindowBody isExplorer={!!directory}>{renderContent()}</WindowBody>
    </WindowWrapper>
  );

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-header"
      bounds="parent"
      position={isMaximized ? { x: 0, y: 0 } : position}
      onStop={(e, data) => {
        if (!isMaximized) {
          updateWindowPosition(id, { x: data.x, y: data.y });
        }
      }}
      disabled={isMaximized}
      onStart={() => focusWindow(id)}
    >
      <motion.div
        ref={nodeRef}
        animate={isMaximized ? 'maximized' : 'restored'}
        variants={windowSizeVariants}
        custom={size}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex,
        }}
      >
        {resizable && !isMaximized ? (
          <ResizableBox
            height={size.height}
            width={size.width}
            minConstraints={[350, 200]}
            maxConstraints={[1200, 800]}
            onResizeStop={(e, data) => {
              updateWindowSize(id, {
                width: data.size.width,
                height: data.size.height,
              });
            }}
            onResizeStart={() => focusWindow(id)}
            resizeHandles={['se']}
            handle={<CustomResizeHandle />}
          >
            {windowContent}
          </ResizableBox>
        ) : (
          <div style={{ width: '100%', height: '100%' }}>{windowContent}</div>
        )}
      </motion.div>
    </Draggable>
  );
}

export default Window;