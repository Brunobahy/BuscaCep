import './App.css'
import CampoTexto from './componentes/CampoTexto';
import Contato from './componentes/Cotato';
import Historico from './componentes/Historico';
import Titulo from "./componentes/Titulo";

function App() {
  
  return (
    <>
      <Titulo nome={"Encontre seu endereço"} cor={"#FFF"} tamanho={"64px"} />
      <CampoTexto nome={"CEP"} placeholder={"Insira seu CEP"} />
      <Contato/>
    </>
  );
}

export default App;
