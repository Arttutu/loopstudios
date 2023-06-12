import React from 'react'
import { styled } from 'styled-components'
import { BotaoStyle } from '../Botao'

const  BotaoMobileStyle= styled(BotaoStyle)`
    display: none;
    @media (max-width: 768px){
      display: block;
    }   
`
export default function BotaoMobile({texto}) {
  return (
    <BotaoMobileStyle>{texto}</BotaoMobileStyle>
  )
}
