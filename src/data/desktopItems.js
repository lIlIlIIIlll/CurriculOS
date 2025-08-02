// src/data/desktopItems.js

/*
  Este arquivo funciona como um "banco de dados" estático para os itens
  que serão exibidos na área de trabalho.

  A propriedade 'type' foi substituída por 'icon', que contém o nome
  do arquivo de imagem correspondente na pasta /public.
*/

const desktopItems = [
  {
    id: 'resume',
    name: 'Resume.pdf',
    icon: 'file.avif', // Alterado de 'type' para 'icon'
  },
  {
    id: 'about',
    name: 'About Me',
    icon: 'folder.avif', // Alterado de 'type' para 'icon'
  },
  {
    id: 'project01',
    name: 'Project 01 (BWR Tracker)',
    icon: 'folder.avif', // Alterado de 'type' para 'icon'
  },
  {
    id: 'project02',
    name: 'Project 02 (Unified Plataform)',
    icon: 'folder.avif', // Alterado de 'type' para 'icon'
  },
  {
    id: 'project03',
    name: 'Project 03 (CurriculOS)',
    icon: 'folder.avif', // Alterado de 'type' para 'icon'
  },
  {
    id: 'trash',
    name: "Don't Look",
    icon: 'trash.avif', // Alterado de 'type' para 'icon'
  },
];

export default desktopItems;