import React, { useState } from 'react';
import styled from 'styled-components';
import { cor1 } from '../UI/variaveis';

 export const NavLista = styled.ul`
  display: flex;
  list-style: none;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${({ isMobileOpen }) => (isMobileOpen ? 'flex' : 'none')};
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    background-color: black;
    color: white;
    padding: 20px;
    z-index: 999;
  }
`;

export const LinkMenu = styled.a`
  font-size: 18px;
  font-weight: bolder;
  color: ${cor1};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    text-decoration: underline 3px;
  }
`;



export default function Nav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <nav>
        <NavLista>
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
