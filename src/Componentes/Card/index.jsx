import React from 'react'
import { styled } from 'styled-components'
import { cor1, cor2 } from '../UI/variaveis'

const CardStyle = styled.div`
    width: 300px;
    height: 500px;
    cursor: pointer;
    color: ${cor1};
    transition: 0.2s;
    &:hover {
        color: ${cor2}
    }
    &:nth-child(-n + 8) {
        margin-top: 40px;
    }
    @media (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
        height: 200px;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    z-index: -1;
    box-shadow: 0px 0px 10px 2px #000000a9;
    transition: 0.2s;
    &:hover {
        opacity: 50%;
    }
    @media (max-width: 768px) {
        content: url(${props => props.imgmobile});
    }
`

const Nome = styled.h2`
    width: 100px;
    font-size: 22px;
    position: relative;
    top: -90px;
    left: 50px;
    font-weight: bolder;
    transition: 0.5s;
`

export default function Card({ img, titulo, imgmobile }) {
    return (
        <CardStyle>
            <Img src={img} imgmobile={imgmobile} alt={titulo} title={titulo} />
            <Nome>{titulo}</Nome>
        </CardStyle>
    )
}
