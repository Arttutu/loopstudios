import React from 'react'
import { IoClose } from 'react-icons/io5';
import { LinkMenu, NavLista } from '../Nav';
import { styled } from 'styled-components';
import { cor2 } from '../UI/variaveis';
const Container = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${cor2};
`
export default function MenuMobile({menuOpen, setMenuOPen}) {
  return (
    <Container>
        <IoClose size={25} color="#fff"/>
        <nav>
        <NavLista >
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
    </Container>
  )
}

