// src/data/desktopItems.js
import React from 'react';

// Importando os componentes de conteúdo das janelas
import AboutMeContent from '../components/window-content/AboutMeContent';
import ImageWindowContent from '../components/window-content/ImageWindowContent';
import PdfViewer from '../components/PdfViewer';

/*
  "Banco de dados" estático para os ícones do Desktop.
  Cada objeto representa um item e contém todas as informações necessárias
  para renderizar seu ícone e a janela correspondente.

  - id: Identificador único.
  - name: Nome exibido abaixo do ícone e no título da janela.
  - icon: Caminho para a imagem do ícone (na pasta /public).
  - component: O componente React a ser renderizado dentro da janela.
  - resizable: (Opcional) Booleano que indica se a janela pode ser redimensionada.
  - defaultSize: (Opcional) Tamanho inicial da janela.
  - defaultPosition: (Opcional) Posição inicial da janela.
  - directory: (Opcional) Identificador de diretório para agrupar itens no ExplorerWindow.
*/

const desktopItems = [
  // --- Item 1: Sobre Mim (Abre uma janela com texto) ---
  {
    id: 'about-me',
    name: 'Sobre Mim',
    icon: 'folder.avif',
    component: <AboutMeContent />,
    resizable: true,
    defaultSize: { width: 550, height: 350 },
    defaultPosition: { x: 150, y: 100 },
  },

  // --- Item 3: Currículo (Abre um visualizador de PDF) ---
  {
    id: 'resume-pdf',
    name: 'Currículo (PDF)',
    icon: 'pdf.png',
    component: <PdfViewer />,
    resizable: true,
    defaultSize: { width: 800, height: 600 },
    defaultPosition: { x: 350, y: 50 },
  },

  // --- Item 4: Pasta de Projetos (Abre o ExplorerWindow) ---
  {
    id: 'projects-folder',
    name: 'Projetos',
    icon: 'folder.avif',
    resizable: true,
    directory: 'projects', // Usado pelo Window.js para renderizar o ExplorerWindow
    defaultSize: { width: 750, height: 450 },
    defaultPosition: { x: 200, y: 200 },
  },

  // --- Itens que pertencem ao diretório 'projects' ---
  // Não aparecem no Desktop, mas são usados pelo ExplorerWindow.
  {
    id: 'project-1',
    name: 'Projeto CurriculOS',
    icon: 'folder.avif',
    directory: 'projects',
    component: (
      <div>
        <h4>Sobre este Projeto</h4>
        <p>Este é o próprio projeto que você está vendo! Uma interface de desktop simulada em React para apresentar um portfólio de forma criativa.</p>
      </div>
    ),
  },
  {
    id: 'project-2',
    name: 'API de E-commerce',
    icon: 'folder.avif',
    directory: 'projects',
    component: (
      <div>
        <h4>Sobre este Projeto</h4>
        <p>Uma API RESTful para uma plataforma de e-commerce, construída com Node.js, Express e MongoDB.</p>
      </div>
    ),
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