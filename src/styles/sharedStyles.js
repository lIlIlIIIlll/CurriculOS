// src/styles/sharedStyles.js

import { css } from 'styled-components';

/*
  Este arquivo centraliza estilos que são reutilizados em múltiplos componentes.
  Usar o 'css' helper do styled-components nos permite exportar blocos de CSS
  que podem ser facilmente injetados em qualquer styled-component.
  Isso segue o princípio DRY (Don't Repeat Yourself).
*/

// Estilo de "vidro fosco" (Glassmorphism) compartilhado.
// Usado pela Dock, pelo Header da Janela e pela Sidebar do Explorer.
export const glassmorphismStyle = css`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.2) 100%
  );
  backdrop-filter: blur(18px) saturate(120%);
  -webkit-backdrop-filter: blur(18px) saturate(120%);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;