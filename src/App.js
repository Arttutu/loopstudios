
import Banner from "./Componentes/Banner";
import { GlobalStyle } from "./Componentes/GlobalStyles";
import Sobre from "./Componentes/Sobre";
import Separador from "./Componentes/Separador";
import Criacao from "./Componentes/Criacao";
import Rodape from "./Componentes/Rodape";

function App() {
  return (
    <>
    <GlobalStyle />
    <main>
      <Banner />
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
