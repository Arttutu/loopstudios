import React from 'react'
import { IoClose } from 'react-icons/io5';
import { LinkMenu, NavLista } from '../Nav';
import { css, styled } from 'styled-components';
import { cor2 } from '../UI/variaveis';

const Container = styled.div`

    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: .5s;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: ${cor2};
    opacity: 0;
    pointer-events: none;
    transform:translateY(50px);
    > svg{
      cursor: pointer;
      position: absolute;
      top: 1rem;
      right: 1rem;
      transform: rotate(45deg);
      transition: all.7s;
    }

    ${({menuOpen}) => menuOpen && css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);
      > svg{
        transform: rotate(0deg);
    }

    `}
`
const NavListaMenu = styled(NavLista)`
  padding-left: 2rem;
  transform: scale(0.7);
  transition: .7s;

  ${({menuOpen}) => menuOpen && css`
      transform: scale(1);
    `}
 
`
const LinkMenuNav = styled(LinkMenu)`
  text-transform: capitalize;

`

export default function MenuMobile({menuOpen, setMenuOpen}) {
  return (
    <Container menuOpen = {menuOpen}>
        <IoClose size={35} color="#fff" onClick={() => setMenuOpen(false)}/>
          
        <nav>
        <NavListaMenu menuOpen = {menuOpen} >
          <li>
            <LinkMenuNav>About</LinkMenuNav>
          </li>
          <li>
            <LinkMenuNav> Careers</LinkMenuNav>
          </li>
          <li>
            <LinkMenuNav> Events</LinkMenuNav>
          </li>
          <li>
            <LinkMenuNav> Products</LinkMenuNav>
          </li>
          <li>
            <LinkMenuNav> Support</LinkMenuNav>
          </li>
        </NavListaMenu>
      </nav>
    </Container>
  )
}

