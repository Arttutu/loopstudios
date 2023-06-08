import React from 'react'
import { styled } from 'styled-components'
import banner from './image-hero.jpg'
import bannerMobile from './image-hero-mobile.jpg'
import { cor1 } from '../UI/variaveis'
import {Titulo} from '../UI'

const BannerCaixa = styled.section`
width: 100%;
height: 80vh;
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
   height: 100vh;
   display: flex;
   align-items: center;
   margin: 0 auto;
`
const Box  = styled.div`
  width: 700px;
  padding:20px;
  border: 3px solid ${cor1};
  margin-left: 100px;
  @media (max-width: 768px){
    width: 400px; 
    margin: 0 auto;
 }
`

export default function Banner() {
  return (
   <BannerCaixa>
    <BoxBanner>
      <Box>
        <Titulo>IMMERSIVE</Titulo>
        <Titulo>EXPERIENCES</Titulo>
        <Titulo>THAT</Titulo>
        <Titulo>DELIVER</Titulo>
      </Box>
    </BoxBanner>
   </BannerCaixa>
  )
}
