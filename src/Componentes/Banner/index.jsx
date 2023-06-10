import React from 'react'
import { styled } from 'styled-components'
import banner from './image-hero.jpg'
import bannerMobile from './image-hero-mobile.jpg'
import { cor1 } from '../UI/variaveis'
import {Box, Titulo, TituloLogo} from '../UI'
import Nav from '../Nav'

const BannerCaixa = styled.section`
width: 100%;
height: 100vh;
background-image: url(${banner});
background-repeat: no-repeat;
background-size: 100% 100%;
background-position: center;
 @media (max-width: 768px){
  background-image: url(${bannerMobile});
 }
`
const BoxBanner = styled.div`
   max-width: 1440px;
   height: 80vh;
   display: flex;
   align-items: center;
   margin: 0 auto;
`
const BoxCaixa  = styled.div`
  width: 700px;
  padding:20px;
  border: 3px solid ${cor1};
  margin-left: 100px;
  @media (max-width: 768px){
    width: 80%; 
    margin: 0 auto;
 }
`
const BoxMenu  = styled.div`
  padding-top: 40px;
  margin: 0px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default function Banner() {
  return (
   <BannerCaixa>
    <Box>
      <BoxMenu>
        <TituloLogo>Loopstudios</TituloLogo>
        <Nav />
      </BoxMenu>
    <BoxBanner>
      <BoxCaixa>
        <Titulo>IMMERSIVE</Titulo>
        <Titulo>EXPERIENCES</Titulo>
        <Titulo>THAT</Titulo>
        <Titulo>DELIVER</Titulo>
      </BoxCaixa>
    </BoxBanner>
    </Box>
 
   </BannerCaixa>
  )
}
