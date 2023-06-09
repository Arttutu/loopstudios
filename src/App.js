
import Banner from "./Componentes/Banner";
import { GlobalStyle } from "./Componentes/GlobalStyles";
import Sobre from "./Componentes/Sobre";
import Separador from "./Componentes/Separador";
import Criacao from "./Componentes/Criacao";
import Rodape from "./Componentes/Rodape";
import { useState } from "react";
import MenuMobile from "./Componentes/MenuMobile";



function App() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <>
    <GlobalStyle />
    <header>
      <MenuMobile menuopen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <Banner  setMenuOpen = {setMenuOpen}/>
    </header>
    <main>
      <Separador />
      <Sobre />
      <Separador />
      <Criacao />
      <Separador />
    </main>
    <footer>
      <Rodape />
    </footer>
    </>
  )
}

export default App;
