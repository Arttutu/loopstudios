import React from 'react'
import { Box,  TituloSecundary } from '../UI'
import Botao, { BotaoMobile } from '../Botao'
import { styled } from 'styled-components'
import card from  "./card.json"
import Card from '../Card'
const BoxCricacao = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
    @media (max-width:768px){
        justify-content: center;
    }
`
const BoxCard = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width:768px){
        justify-content: center;
    }

`
const BoxGeral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:  2rem;
`
export default function Criacao() {
  return (
    <>
    <Box> 
      <BoxGeral>
        <BoxCricacao>
            <TituloSecundary $primary>OUR CREATIONS</TituloSecundary>
            <Botao texto="SEE ALL"></Botao>
          </BoxCricacao>
            <BoxCard>
                {card.map((item) => (
                        <Card
                        img={item.image}
                        titulo={item.titulo}
                        imgmobile={item.imageMobile}
                        key={item.titulo}
                        />
                        )
                    )}
            </BoxCard>
            <BotaoMobile texto= "SEE ALL" >SEE ALL</BotaoMobile>
      </BoxGeral>


      </Box>
    </>
  )
}
