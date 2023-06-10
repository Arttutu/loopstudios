import React from 'react'
import { styled } from 'styled-components'
import { cor1 } from '../UI/variaveis'

const NavLista = styled.ul`
    display: flex;
    list-style: none;
    gap: 1.5rem;
    @media (max-width: 768px){
        flex-direction: column;
    }
`
const LinkMenu = styled.a`
    font-size: 18px;
    font-weight: bolder;
    color: ${cor1};
    transition: 0.5s;
    cursor: pointer;
    &:hover{
        text-decoration: underline 3px;

    }
    
`
export default function Nav() {
  return (
    <>
       
        <nav>
            <NavLista>
                <li><LinkMenu> About</LinkMenu></li>
                <li><LinkMenu> Careers</LinkMenu></li>
                <li><LinkMenu> Events</LinkMenu></li>
                <li><LinkMenu> Products</LinkMenu></li>
                <li><LinkMenu> Suport</LinkMenu></li>
            </NavLista>
        </nav>
    </>
  
  )
}
