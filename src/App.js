import { styled } from "styled-components";
import Banner from "./Componentes/Banner";
import { GlobalStyle } from "./Componentes/GlobalStyles";
import Sobre from "./Componentes/Sobre";
import Separador from "./Componentes/Separador";

function App() {
  return (
    <>
    <GlobalStyle />
    <main>
      <Banner />
      <Separador />
      <Sobre />
    </main>
    <footer>

    </footer>
    </>
  )
}

export default App;
