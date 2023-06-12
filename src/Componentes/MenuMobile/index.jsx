import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5';
import { LinkMenu, NavLista } from '../Nav';
import { css, styled } from 'styled-components';
import { cor2 } from '../UI/variaveis';
import { TituloLogo } from '../UI';

const Container = styled.div`

    position: absolute;
    height: 80vh;
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

    ${({menuopen}) => menuopen ?  css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);
      > svg{
        transform: rotate(0deg);
    }

    ` : ""}
  
`
const NavListaMenu = styled(NavLista)`
  display: flex;
  gap: 2rem;
  padding-left: 2rem;
  transform: scale(0.7);
  transition: .7s;
  margin-top: 100px;

  ${({menuopen}) => menuopen  ? css`
      transform: scale(1);
    ` : "" }
 
`
const LinkMenuNav = styled(LinkMenu)`
  font-weight: normal;
  text-transform: uppercase;
`
const BoxLogo = styled.div`
  position: absolute;
  top:1rem;
  left:1rem;
`

export default function MenuMobile({menuopen, setMenuOpen}) {
  // useEffect escuta o elemento menuopen e quando ele é modificado faz uma ação, overFlow hidden scroll vertical do body
  useEffect (() => {
    document.body.style.overflowY =  menuopen ? "hidden" : "auto"
  }, [menuopen]);
  useEffect(() => {
    function Resize() {
      if (window.innerWidth >  768) {
        setMenuOpen(false);
      }
    }
  // função callback ativada após o envento de resize
    window.addEventListener('resize', Resize);
  // Remove efeitos para nao ficar na memória
    return () => {
      window.removeEventListener('resize', Resize);
    };
  }, [menuopen, setMenuOpen]);
  return (
    <Container menuopen = {menuopen} setMenuOpen = {setMenuOpen}>
      <BoxLogo>
        <TituloLogo>LoopStudios</TituloLogo>
      </BoxLogo>
      <IoClose size={35} color="#fff" onClick={() => setMenuOpen(false)}/>  
      <nav>
        <NavListaMenu menuopen = {menuopen} >
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

