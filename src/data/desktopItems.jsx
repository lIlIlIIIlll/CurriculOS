// src/data/desktopItems.js

import React from 'react';
import AboutMeContent from '../components/window-content/AboutMeContent';
import PdfViewer from '../components/PdfViewer'; // 1. Importando o novo componente PdfViewer

/*
  "Banco de dados" estático para os itens do desktop.
  A estrutura foi expandida para incluir o comportamento das janelas:
  - component: Um componente JSX a ser renderizado dentro da janela.
  - resizable: (boolean) Define se a janela pode ser redimensionada.
  - directory: (number) Um ID que agrupa pastas para o modo "Explorer".
*/

const desktopItems = [
  {
    id: 'resume',
    name: 'Resume.pdf',
    icon: 'file.avif',
    resizable: true,
    // 2. Substituindo o conteúdo placeholder pelo nosso novo componente PdfViewer.
    component: <PdfViewer />,
  },
  {
    id: 'about',
    name: 'About Me',
    icon: 'folder.avif',
    resizable: true,
    component: <AboutMeContent />,
  },
  {
    id: 'project01',
    name: 'Project 01 (AbsolutMess)',
    icon: 'folder.avif',
    resizable: true,
    directory: 1,
  },
  {
    id: 'project02',
    name: 'Project 02 (Simplingo)',
    icon: 'folder.avif',
    resizable: true,
    directory: 1,
  },
  {
    id: 'project03',
    name: 'Project 03 (Leafpress)',
    icon: 'folder.avif',
    resizable: true,
    directory: 1,
  },
  {
    id: 'project04',
    name: 'Project 04 (Amazon)',
    icon: 'folder.avif',
    resizable: true,
    directory: 1,
  },
  {
    id: 'trash',
    name: "Don't Look",
    icon: 'trash.avif',
    resizable: true,
    directory: 2,
  },
];

export default desktopItems;