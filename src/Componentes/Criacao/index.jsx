import React from 'react'
import { Box, Titulo } from '../UI'
import Botao from '../Botao'
import { styled } from 'styled-components'
import card from  "./card.json"
import Card from '../Card'
const BoxCricacao = styled.section`
    display: flex;
    justify-content: space-between;
    @media (max-width:768px){
        justify-content: center;
    }
`
const BoxCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

`
export default function Criacao() {
  return (
    <>
    <Box>
        <BoxCricacao>
        <Titulo primary >OUR CREATIONS</Titulo>
        <Botao texto="SEE ALL"></Botao>
        </BoxCricacao>
        <BoxCard>
            {card.map((item) => (
                    <Card
                    img={item.image}
                    titulo={item.titulo}
                    />
                    )
                )}
        </BoxCard>
    </Box>
    </>
  )
}
