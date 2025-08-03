// src/components/window-content/ImageWindowContent.jsx

import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

// Um container para garantir que a imagem se comporte corretamente.
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden; /* Garante que a imagem não ultrapasse as bordas arredondadas da janela */
  background-color: #000; /* Fundo preto caso a imagem demore a carregar ou tenha transparência */
`;

// O componente de imagem, estilizado para preencher todo o seu container.
const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Garante que a imagem cubra todo o espaço sem distorcer, cortando o excesso se necessário */
  user-select: none; /* Impede que a imagem seja selecionada */
  -webkit-user-drag: none; /* Impede que a imagem seja arrastada */
`;

// --- Componente ---

// O componente recebe o caminho da imagem como uma prop 'src'.
function ImageWindowContent({ src }) {
  return (
    <ImageWrapper>
      <ProfileImage src={src} alt="Foto do Perfil" />
    </ImageWrapper>
  );
}

export default ImageWindowContent;