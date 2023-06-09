
import Banner from "./Componentes/Banner";
import { GlobalStyle } from "./Componentes/GlobalStyles";
import Sobre from "./Componentes/Sobre";
import Separador from "./Componentes/Separador";
import Criacao from "./Componentes/Criacao";

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
    </main>
    <footer>

    </footer>
    </>
  )
}

export default App;
