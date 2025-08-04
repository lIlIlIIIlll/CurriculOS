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

function Text({ paragrafos }) {
  return (
    <Wrapper>
      {paragrafos.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}
    </Wrapper>
  );
}

export default Text;