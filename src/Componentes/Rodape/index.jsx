import React from 'react'
import { styled } from 'styled-components'
import { cor1, cor2 } from '../UI/variaveis'
import { Box, Descricao, Titulo } from '../UI'
import {AiFillFacebook, AiFillTwitterCircle, AiFillInstagram} from "react-icons/ai"
import {BsPinterest} from "react-icons/bs"
import NavRodpae from '../NavRodape'
const RodapeStyle = styled.div`
    width: 100%;
    height: 200px;
    background-color: ${cor2};
    padding-top: 50px ;
  
    @media (max-width: 768px){
        height: auto;
        padding-bottom: 30px;
    }
`
const BoxGeral = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
    }
`
const BoxRodapeDois = styled.div`
    display: flex;
    gap: 80px;
    flex-direction: column;
    @media (max-width: 768px){
        align-items: center;
        gap:1rem
    }
 
`
const BoxRodapeUm = styled.div`
    display: flex;
    gap: 50px;
    flex-direction: column;
    @media (max-width: 768px){
        text-align: center;
    }
`
const BoxIcone = styled.div`
    color: ${cor1};
    font-size: 42px;
    display: flex;
    gap: 1rem;
    transition: 0.2s;
    cursor: pointer;
    @media (max-width: 768px){
        font-size: 32px;
    }
`
export default function Rodape() {
  return (
    <RodapeStyle>
        <Box>
            <BoxGeral>
                <BoxRodapeUm>
                    <Titulo>loopstudios</Titulo>
                    <NavRodpae />
                </BoxRodapeUm>
                <BoxRodapeDois>
                    <BoxIcone>
                        <AiFillFacebook />
                        <AiFillTwitterCircle />
                        <BsPinterest />
                        <AiFillInstagram />
                    </BoxIcone>
                    <Descricao primary> ©2021 Loopstudios. All rights reserved.</Descricao>
                </BoxRodapeDois>
            </BoxGeral>
        </Box>
           
    </RodapeStyle>
  )
}
