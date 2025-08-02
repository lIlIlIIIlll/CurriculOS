// src/components/window-content/PdfViewer.jsx

import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

// Um container para o iframe que garante que ele preencha
// completamente o corpo da janela (WindowBody).
const ViewerWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

// O iframe em si, estilizado para não ter bordas e preencher o wrapper.
const PdfFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none; /* Remove a borda padrão do iframe */
`;

// --- Componente ---

function PdfViewer() {
  // O caminho para o PDF. Como o arquivo está na pasta /public,
  // podemos acessá-lo diretamente pela raiz do site.
  const pdfPath = '/curriculo.pdf';

  return (
    <ViewerWrapper>
      <PdfFrame
        src={pdfPath}
        title="Resume PDF Viewer"
        // A propriedade 'type' ajuda o navegador a entender o conteúdo.
        type="application/pdf"
      />
    </ViewerWrapper>
  );
}

export default PdfViewer;