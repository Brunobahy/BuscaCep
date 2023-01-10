import './App.css'
import CampoTexto from './componentes/CampoTexto';
import Contato from './componentes/Cotato';
import Titulo from "./componentes/Titulo";

function App() {
  
  return (
    <>
      <Titulo nome={"Encontre seu endereço"} cor={"#FFF"} tamanho={"64px"} />
      <CampoTexto nome={"CEP"} placeholder={"Insira seu CEP"} tipo={"number"}/>
      <Contato/>
    </>
  );
}

export default App;
