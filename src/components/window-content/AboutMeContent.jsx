// src/components/window-content/AboutMeContent.jsx
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  p {
    margin-bottom: 16px;
    line-height: 1.3;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

function AboutMeContent() {
  return (
    <Wrapper>
      <p>
        Olá, me chamo Leonardo!
      </p>
      <p>
        Sou um Desenvolvedor Full-Stack apaixonado por criar soluções que integram de forma harmônica e robusta o front-end e o back-end para aplicações web, mobile e desktop. 
      </p>
      <p>
        Tenho experiência de dez meses atuando remotamente em uma empresa de desenvolvimento e também realizo projetos como freelancer por meio do 99freelas e Workana. Atualmente, estou aprofundando meus conhecimentos no curso Técnico de Desenvolvimento de Sistemas pelo SENAI.
      </p>
      <p>
        Estou sempre em busca de novos desafios, metodologias e tecnologias que me permitam evoluir e criar projetos cada vez mais inovadores. Se você procura um profissional comprometido, extremamente versátil e com vontade de aprender, vamos marcar uma conversa!
      </p>
    </Wrapper>
  );
}

export default AboutMeContent;