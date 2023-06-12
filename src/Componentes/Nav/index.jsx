import React, { useState } from 'react';
import styled from 'styled-components';
import { cor1 } from '../UI/variaveis';

 export const NavLista = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  list-style: none;
  gap: 1.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ rodape }) => (rodape ? "" : "none")};

  }
`;
export const LinkMenu = styled.a`
  font-size: 22px;
  font-weight: bolder;
  color: ${cor1};
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    text-decoration: underline 3px;

  }
`;



export default function Nav({rodape}) {
  return (
    <>
      <nav>
        <NavLista rodape={rodape}>
          <li>
            <LinkMenu> About</LinkMenu>
          </li>
          <li>
            <LinkMenu> Careers</LinkMenu>
          </li>
          <li>
            <LinkMenu> Events</LinkMenu>
          </li>
          <li>
            <LinkMenu> Products</LinkMenu>
          </li>
          <li>
            <LinkMenu> Support</LinkMenu>
          </li>
        </NavLista>
      </nav>
    </>
  );
}
