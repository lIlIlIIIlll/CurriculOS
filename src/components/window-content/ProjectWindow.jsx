// src/components/window-content/ProjectWindow.jsx

import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

// --- Styled Components ---

const ProjectWindowWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.medium};
  position: relative;

  /*
    1. CORREÇÃO PRINCIPAL: Adicionando clip-path.
    Esta propriedade cria uma máscara de recorte no elemento.
    'inset(0 0 20px 0 round 0 0 0 12px)' significa:
    - O recorte começa 0px do topo, 0px da direita, 20px de baixo e 0px da esquerda.
      Isso efetivamente "encolhe" a área clicável do componente em 20px na parte inferior.
    - 'round ... 12px' garante que o recorte no canto inferior direito respeite
      o arredondamento da borda da janela.
    - O resultado é um "buraco" de 20x20px no canto inferior direito, permitindo
      que o mouse interaja com a alça de redimensionamento que está por baixo.
  */
  clip-path: inset(0 0 20px 0 round 0 0 0 12px);
`;

// --- Componente ---

/**
 * Renderiza uma área de conteúdo semelhante a um desktop,
 * com ícones arrastáveis.
 * @param {object[]} items - Um array de objetos de ícone a serem renderizados.
 * @param {boolean} isParentMaximized - O estado de maximização da janela pai.
 * @param {object} parentSize - O tamanho da janela pai ({ width, height }).
 */
function ProjectWindow({ items, isParentMaximized, parentSize }) {
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
        // 2. A lógica de atualização da key, implementada anteriormente,
        //    permanece. Ela garantirá que os ícones se reposicionem
        //    corretamente assim que o redimensionamento for concluído.
        <Icon
          key={`${item.id}-${isParentMaximized}-${parentSize.width}x${parentSize.height}`}
          item={item}
        />
      ))}
    </ProjectWindowWrapper>
  );
}

export default ProjectWindow;