import { styled } from "styled-components";
import { cor1, cor2, font1, font2 } from "./variaveis";

export const Titulo = styled.h1`
    color: ${ (props) => props.primary ? cor2 : cor1};
    font-family: ${font1};
    font-size: 40px;
    margin: 0;

    @media (max-width: 768px){
        font-size: 32px;
    }
`
export const Descricao = styled.p`
    color: ${cor2};
    font-family: ${font2};
    font-size: 15px;
    margin: 0;
`


