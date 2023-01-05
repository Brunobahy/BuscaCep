import { useState } from 'react';
import Botao from '../Botao';
import CampoMapa from '../CampoMapa';
import './CampoTexto.css'



const CampoTexto = (props) => {

    const [cep, setCep] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [cepAntigo, setCepAntigo] = useState('')


    const digitado = (evento) => {
        setCep(evento.target.value)
    }

    async function buscaCep(event) {
        event.preventDefault()

        let busca = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        let buscaConvertida = await busca.json();
        console.log(buscaConvertida)

        setBairro(buscaConvertida.bairro);

        setCidade(buscaConvertida.localidade);

        setLogradouro(buscaConvertida.logradouro); 

        setCepAntigo(buscaConvertida.cep);

        setCep("")
    }
    


    return (
        <div >
            <form className='input-comum' onSubmit={buscaCep}>

                <label htmlFor={props.nome}>{props.nome}</label>
                
                <input 
                onChange={digitado} 
                value={cep} 
                id={props.nome} 
                type={props.tipo} 
                placeholder={props.placeholder} />

                <Botao texto={"Buscar"} />
            </form>

            { cidade != '' && (
            
            <CampoMapa 
            cidade={cidade} 
            bairro={bairro} 
            logradouro={logradouro} 
            cep={cepAntigo} />
            
            )}

        </div>
    )
}

export default CampoTexto;