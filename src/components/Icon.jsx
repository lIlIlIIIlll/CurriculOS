// src/components/Icon.jsx

import React, { useRef } from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

// O wrapper principal do ícone.
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

// Container para o elemento visual do ícone.
// Agora ele tem 'position: relative' para posicionar o overlay de seleção.
const IconVisual = styled.div`
  width: 64px; /* Tamanho fixo para a imagem do ícone */
  height: 64px;
  position: relative; /* Essencial para o pseudo-elemento ::before */
  user-select: none;
  margin-bottom: 8px; /* Espaço entre o ícone e o texto */

  /* 
    O overlay de seleção. É um pseudo-elemento que cobre o ícone.
    Ele fica invisível por padrão e aparece ao passar o mouse.
  */
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
    opacity: 0; /* Invisível por padrão */
    transition: opacity 150ms ease-in-out; /* Animação suave */
  }

  /* Mostra o overlay ao passar o mouse sobre o IconWrapper */
  ${IconWrapper}:hover &::before {
    opacity: 1;
  }
`;

// A imagem do ícone em si.
const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* Garante que a imagem caiba sem distorcer */
`;

// Rótulo de texto abaixo do ícone
const IconLabel = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  padding: 2px 5px;
  border-radius: 4px;
  user-select: none;
  max-width: 100%;
  word-wrap: break-word; /* Garante que nomes longos quebrem a linha */

  /* Simula o fundo selecionado do macOS ao passar o mouse */
  ${IconWrapper}:hover & {
    background-color: #007bff; /* Azul de seleção do macOS */
    color: white;
  }
`;

// A prop 'type' foi substituída por 'icon' (nome do arquivo de imagem).
// A função getIconComponent foi removida.
function Icon({ name, icon }) {
  const nodeRef = useRef(null);

  return (
    <Draggable bounds="parent" handle=".icon-handle" nodeRef={nodeRef}>
      <IconWrapper ref={nodeRef} className="icon-handle">
        <IconVisual>
          {/* Renderiza a imagem do ícone dinamicamente */}
          <IconImage src={`/${icon}`} alt={name} />
        </IconVisual>
        <IconLabel>{name}</IconLabel>
      </IconWrapper>
    </Draggable>
  );
}

export default Icon;