// src/components/Icon.jsx

import React, { useRef } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import useWindowStore from '../store/windowStore';

// Nenhuma mudança nos styled-components
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  text-align: center;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const IconVisual = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  user-select: none;
  margin-bottom: 8px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 12px;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
  }

  ${IconWrapper}:hover &::before {
    opacity: 1;
  }
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const IconLabel = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  padding: 2px 5px;
  border-radius: 4px;
  user-select: none;
  max-width: 100%;
  word-wrap: break-word;

  ${IconWrapper}:hover & {
    background-color: #007bff;
    color: white;
  }
`;

// 1. O componente agora recebe o objeto 'item' inteiro como prop.
function Icon({ item }) {
  // 2. Desestruturamos as propriedades que o Icon precisa para se renderizar.
  const { id, name, icon } = item;

  const { openWindow } = useWindowStore();
  const nodeRef = useRef(null);

  const handleDoubleClick = () => {
    // 3. Passamos o objeto 'item' COMPLETO para a função openWindow.
    // Agora o store terá acesso a 'component', 'resizable', etc.
    openWindow(item);
  };

  return (
    <Draggable bounds="parent" handle=".icon-handle" nodeRef={nodeRef}>
      <IconWrapper
        ref={nodeRef}
        className="icon-handle"
        onDoubleClick={handleDoubleClick}
      >
        <IconVisual>
          <IconImage src={`/${icon}`} alt={name} />
        </IconVisual>
        <IconLabel>{name}</IconLabel>
      </IconWrapper>
    </Draggable>
  );
}

export default Icon;