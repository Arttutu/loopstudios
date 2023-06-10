import React from 'react'
import { styled } from 'styled-components'
import imageSobre from "./image-interactive.jpg"
import { Descricao, TituloSecundary } from '../UI'
import { cor1 } from '../UI/variaveis'
const BoxSobre = styled.section`
    max-width: 1440px;
    height: auto;
    margin: 0 0 0 auto;
    display: flex;
    align-items: flex-end;
    padding-left: 200px;
    @media (max-width: 768px){
        padding-left: 0;
        flex-direction: column;
        gap: 2.5rem;
        justify-content: center;
        align-items: center;
    }
`
const BoxConteudo = styled.div`
    background-color: ${cor1};
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    padding-left: 80px;
    gap: 1.5rem;
    width: 400px;
    position: relative;
    right: 200px;
    @media (max-width: 768px){
        text-align: center;
        position: static;
        padding: 0;
        width: 300px;
    }

`
const Image = styled.img`
    max-width: 100%;    
    height: auto;
    @media (max-width: 768px){
        max-width: 90%;
        margin: 0 auto;
    }

`
export default function Sobre() {
  return (
    <BoxSobre>
        <Image src={imageSobre}></Image>
        <BoxConteudo>
            <TituloSecundary $primary>THE LEADER IN INTERACTIVE VR</TituloSecundary>
            <Descricao >Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</Descricao>
        </BoxConteudo>
    </BoxSobre>
  )
}
