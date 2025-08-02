// src/store/windowStore.js

import { create } from 'zustand';
import theme from '../styles/theme';

// Função auxiliar para re-basear os z-indexes.
// Recebe um array de janelas e retorna um novo array com z-indexes sequenciais.
const rebaseZIndexes = (windows) => {
  return windows.map((win, index) => ({
    ...win,
    zIndex: theme.zIndex.window + index, // Ex: 10, 11, 12...
  }));
};

const useWindowStore = create((set, get) => ({
  // ESTADO INICIAL: A propriedade 'nextZIndex' foi removida.
  openWindows: [],

  // AÇÕES

  openWindow: (windowData) => {
    const { openWindows } = get();
    const { id, name: title } = windowData;

    const windowExists = openWindows.some((win) => win.id === id);

    if (windowExists) {
      // Se a janela já existe, apenas a focamos.
      get().focusWindow(id);
    } else {
      // Se não existe, criamos a nova janela.
      const newWindow = {
        ...windowData,
        title,
        isMaximized: false,
      };

      // Adicionamos a nova janela ao final da lista e re-baseamos todos os z-indexes.
      const updatedWindows = rebaseZIndexes([...openWindows, newWindow]);

      set({ openWindows: updatedWindows });
    }
  },

  closeWindow: (id) => {
    const { openWindows } = get();
    // Filtra a janela a ser fechada.
    const remainingWindows = openWindows.filter((win) => win.id !== id);
    // Re-baseia os z-indexes das janelas restantes para manter a sequência.
    const updatedWindows = rebaseZIndexes(remainingWindows);
    set({ openWindows: updatedWindows });
  },

  // A lógica de 'focusWindow' foi completamente refatorada.
  focusWindow: (id) => {
    const { openWindows } = get();

    // Encontra a janela alvo e a separa das outras.
    const targetWindow = openWindows.find((win) => win.id === id);
    const otherWindows = openWindows.filter((win) => win.id !== id);

    if (!targetWindow) return; // Se não encontrar a janela, não faz nada.

    // Verifica se a janela já está no topo. Se sim, não faz nada (otimização).
    if (openWindows[openWindows.length - 1].id === id) {
      return;
    }

    // Cria um novo array com a janela alvo no final (topo da pilha).
    const reorderedWindows = [...otherWindows, targetWindow];

    // Re-baseia os z-indexes da lista reordenada.
    const updatedWindows = rebaseZIndexes(reorderedWindows);

    set({ openWindows: updatedWindows });
  },

  // Nenhuma mudança na ação toggleMaximize.
  toggleMaximize: (id) => {
    set((state) => ({
      openWindows: state.openWindows.map((win) =>
        win.id === id ? { ...win, isMaximized: !win.isMaximized } : win
      ),
    }));
  },
}));

export default useWindowStore;