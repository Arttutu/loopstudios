import React from 'react'
import { styled } from 'styled-components'
import { cor1, cor2 } from '../UI/variaveis'
const BotaoStyle = styled.button`
    border: 2px solid ${cor2};
    color: ${cor2};
    padding: 10px;
    width: 150px;
    border-radius: 5px;
    font-size: 18px;
    transition: 0.5s;
   
    &:hover{
      color: ${cor1};
      background-color: ${cor2};
    }
    @media (max-width:768px){
      display: none;
    }
`
export const MobileBotaoStyle = styled(BotaoStyle)`
    @media (min-width: 768px) {
      justify-content: center;
        display: none;
    }
`
export default function Botao({texto}) {
  return (
    <BotaoStyle>{texto}</BotaoStyle>
  )
}
