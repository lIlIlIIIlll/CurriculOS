// src/components/Icon.jsx

import React from 'react';
import styled from 'styled-components';
import { FaFolder, FaFilePdf, FaTrash } from 'react-icons/fa';

// O wrapper principal do ícone.
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px; /* Largura fixa para o ícone e texto */
  cursor: pointer;
  
  /* 
    Posiciona o ícone de forma absoluta dentro do container pai (Desktop).
    As coordenadas são lidas diretamente das props.
  */
  position: absolute;
  top: ${({ position }) => position.top};
  left: ${({ position }) => position.left};
  right: ${({ position }) => position.right};

  &:hover {
    /* Efeito simples para dar feedback ao usuário */
    filter: brightness(0.9);
  }
`;

// Container para o elemento visual do ícone (da biblioteca react-icons)
const IconVisual = styled.div`
  font-size: 48px; /* Tamanho do ícone */
  color: #5c9ce5; /* Cor azulada, similar ao macOS */
`;

// Rótulo de texto abaixo do ícone
const IconLabel = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  margin-top: ${({ theme }) => theme.spacing.small};
  text-align: center;
  padding: 2px 4px;
  border-radius: 3px;
  
  /* Um pequeno truque para simular o fundo selecionado do macOS ao passar o mouse */
  ${IconWrapper}:hover & {
    background-color: rgba(0, 123, 255, 0.2);
  }
`;

// Função auxiliar para selecionar o componente de ícone correto baseado no tipo.
const getIconComponent = (type) => {
  switch (type) {
    case 'folder':
      return <FaFolder />;
    case 'file-pdf':
      return <FaFilePdf />;
    case 'trash':
      return <FaTrash />;
    default:
      // Retorna um ícone de pasta como padrão para tipos não reconhecidos.
      return <FaFolder />;
  }
};

function Icon({ name, type, initialPosition }) {
  return (
    <IconWrapper position={initialPosition}>
      <IconVisual>{getIconComponent(type)}</IconVisual>
      <IconLabel>{name}</IconLabel>
    </IconWrapper>
  );
}

export default Icon;