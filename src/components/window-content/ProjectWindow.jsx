// src/components/window-content/ProjectWindow.jsx

import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

// --- Styled Components ---
// Nenhuma mudança nos estilos.

const ProjectWindowWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.medium};
  position: relative;
`;

// --- Componente ---

/**
 * Renderiza uma área de conteúdo semelhante a um desktop,
 * com ícones arrastáveis.
 * @param {object[]} items - Um array de objetos de ícone a serem renderizados.
 * @param {boolean} isParentMaximized - O estado de maximização da janela pai.
 */
// 1. O componente agora recebe 'isParentMaximized' como prop.
function ProjectWindow({ items, isParentMaximized }) {
  if (!items || items.length === 0) {
    return (
      <ProjectWindowWrapper>
        <p>Este projeto está vazio.</p>
      </ProjectWindowWrapper>
    );
  }

  return (
    <ProjectWindowWrapper>
      {items.map((item) => (
        // 2. A 'key' do ícone agora é composta pelo seu ID e pelo estado de maximização.
        //    Ex: "curriculos-code-false" -> "curriculos-code-true"
        //    Quando essa key muda, o React destrói o componente antigo e cria um novo,
        //    resetando o estado interno do react-draggable e corrigindo o bug de posicionamento.
        <Icon key={`${item.id}-${isParentMaximized}`} item={item} />
      ))}
    </ProjectWindowWrapper>
  );
}

export default ProjectWindow;