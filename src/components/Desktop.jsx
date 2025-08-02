// src/components/Desktop.jsx

import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import desktopItems from '../data/desktopItems';

// Nenhuma mudança no styled-component
const DesktopWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.medium};
`;

function Desktop() {
  return (
    <DesktopWrapper>
      {desktopItems.map((item) => (
        <Icon
          key={item.id}
          name={item.name}
          icon={item.icon}
        />
      ))}
    </DesktopWrapper>
  );
}

export default Desktop;