import { styled } from "styled-components";
import { cor1, font1 } from "./variaveis";

const Titulo = styled.h1`
    color: ${cor1};
    font-family: ${font1};
    font-size: 52px;
    margin: 0;

    @media (max-width: 768px){
        font-size: 42px;
    }
`

export default Titulo