// src/data/desktopItems.js

/*
  Este arquivo funciona como um "banco de dados" estático para os itens
  que serão exibidos na área de trabalho. Manter os dados separados da
  lógica de renderização (componentes) torna o código mais limpo e fácil de manter.
*/

const desktopItems = [
  {
    id: 'resume',
    name: 'Resume.pdf',
    type: 'file-pdf',
    initialPosition: { top: '35%', left: '5%' },
  },
  {
    id: 'about',
    name: 'About Me',
    type: 'folder',
    initialPosition: { top: '60%', left: '20%' },
  },
  {
    id: 'project01',
    name: 'Project 01 (AbsolutMess)',
    type: 'folder',
    initialPosition: { top: '40%', right: '10%' },
  },
  {
    id: 'project02',
    name: 'Project 02 (Simplingo)',
    type: 'folder',
    initialPosition: { top: '25%', right: '12%' },
  },
  {
    id: 'project03',
    name: 'Project 03 (Leafpress)',
    type: 'folder',
    initialPosition: { top: '60%', right: '25%' },
  },
  {
    id: 'project04',
    name: 'Project 04 (Amazon)',
    type: 'folder',
    initialPosition: { top: '70%', right: '15%' },
  },
  {
    id: 'trash',
    name: "Don't Look",
    type: 'trash',
    initialPosition: { top: '65%', right: '5%' },
  },
];

export default desktopItems;