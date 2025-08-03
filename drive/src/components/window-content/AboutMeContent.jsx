// src/components/window-content/AboutMeContent.jsx
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  p {
    margin-bottom: 16px;
    line-height: 1.6;
  }
`;

function AboutMeContent() {
  return (
    <Wrapper>
      <p>
        Olá! Eu sou um desenvolvedor e designer apaixonado por criar interfaces
        intuitivas e produtos que simplificam a complexidade.
      </p>
      <p>
        Atualmente, estou focado em aprimorar minhas habilidades em React,
        design de interação e arquitetura de software. Meu objetivo é sempre o
        mesmo: "make it work, then make it beautiful".
      </p>
    </Wrapper>
  );
}

export default AboutMeContent;