// src/data/dockItems.js

/*
  "Banco de dados" estático para os ícones que serão exibidos na Dock.
  Cada objeto define um ícone, seu nome (para acessibilidade/tooltip) e
  o caminho para o arquivo de imagem na pasta /public.
  A ordem dos itens aqui define a ordem na Dock.
*/

const dockItems = [
  { id: 'finder', name: 'Finder', icon: 'finder.avif' },
  { id: 'launchpad', name: 'Launchpad', icon: 'launchpad.avif' },
  { id: 'safari', name: 'Safari', icon: 'safari.avif' },
  { id: 'messages', name: 'Messages', icon: 'messages.avif' },
  { id: 'mail', name: 'Mail', icon: 'mail.avif' },
  { id: 'maps', name: 'Maps', icon: 'maps.avif' },
  { id: 'facetime', name: 'FaceTime', icon: 'facetime.avif' },
  { id: 'calendar', name: 'Calendar', icon: 'calendar.avif' },
  { id: 'contacts', name: 'Contacts', icon: 'contacts.avif' },
  { id: 'photos', name: 'Photos', icon: 'photos.avif' },
  { id: 'appletv', name: 'Apple TV', icon: 'appletv.avif' },
  { id: 'music', name: 'Music', icon: 'music.avif' },
  { id: 'podcasts', name: 'Podcasts', icon: 'podcasts.avif' },
  { id: 'appstore', name: 'App Store', icon: 'appstore.avif' },
  { id: 'settings', name: 'Settings', icon: 'settings.avif' },
  { id: 'separator', type: 'separator' },
  { id: 'folder-dock', name: 'Projetos', icon: 'folder.avif' },
  { id: 'trash-dock', name: 'Lixeira', icon: 'trashDock.avif' },
];

export default dockItems;