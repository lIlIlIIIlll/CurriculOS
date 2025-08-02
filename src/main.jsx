import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
// 1. Importando os estilos da biblioteca react-resizable.
// Isso adiciona o CSS para a alça de redimensionamento (o pequeno triângulo no canto).
import 'react-resizable/css/styles.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);