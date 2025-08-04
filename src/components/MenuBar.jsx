// src/components/MenuBar.jsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  FaWifi,
  FaSearch,
  FaBatteryFull,
  FaCreativeCommons,
  FaCreativeCommonsBy,
} from 'react-icons/fa';
import { glassmorphismStyle } from '../styles/sharedStyles';

// --- Styled Components ---

const Bar = styled.header`
  /* 1. As propriedades de posicionamento fixo foram removidas.
     - 'position: fixed'
     - 'top: 0'
     - 'left: 0'
     - 'width: 100%'
     O componente agora se comportará como um item de grid normal,
     ocupando o espaço que lhe foi designado pelo AppWrapper.
  */
  height: 28px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  z-index: ${({ theme }) => theme.zIndex.dock};

  ${glassmorphismStyle}
`;

// Nenhuma mudança no resto do arquivo
const MenuSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Logo = styled.img`
  width: 16px;
  height: 16px;
`;

const MenuItem = styled.a`
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;

  &:first-of-type {
    font-weight: 700;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const StatusIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
`;

const Clock = styled.div`
  font-variant-numeric: tabular-nums;
`;

// --- Componente ---

function MenuBar() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <Bar>
      <MenuSection>
        <Logo src="/curriculOS.png" alt="CurriculOS Logo" />
        <MenuItem href="#">CurriculOS - Code By Leo</MenuItem>
        <MenuItem href="https://wa.me/5571988366709?text=Ol%C3%A1%20Leonardo%2C%20vim%20atrav%C3%A9s%20do%20seu%20portif%C3%B3lio.
">Contato</MenuItem>
      </MenuSection>

      <MenuSection>
        <StatusIcons>
          <FaBatteryFull />
          <FaWifi />
          <FaSearch />
          <FaCreativeCommons />
          <FaCreativeCommonsBy />
        </StatusIcons>
        <Clock>{formattedDateTime}</Clock>
      </MenuSection>
    </Bar>
  );
}

export default MenuBar;