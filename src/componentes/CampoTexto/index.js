import { waitFor } from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import Botao from '../Botao';
import CampoMapa from '../CampoMapa';
import Historico from '../Historico';
import './CampoTexto.css'



const CampoTexto = (props) => {

    const [cep, setCep] = useState('')

    const [pesquisa, setPesquisa] = useState({
        bairro: '',
        cidade: '',
        logradouro: '',
        cepAntigo: ''
    })

    const [listaPesquisa, setListaPesquisa] = useState('')

    const digitado = (evento) => {
        setCep(evento.target.value)
    }

    async function buscaCep(event) {
        event.preventDefault()

        let busca = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        let buscaConvertida = await busca.json();

        setPesquisa({
            bairro: buscaConvertida.bairro,
            cidade: buscaConvertida.localidade,
            logradouro: buscaConvertida.logradouro,
            cepAntigo: buscaConvertida.cep
        })
        setCep('')

        if(pesquisa.bairro != '' && pesquisa.bairro != undefined){
            setListaPesquisa([...listaPesquisa, pesquisa])
            console.log(listaPesquisa)
        }

    }

    function excluir(cepAntigo) {
        setListaPesquisa(listaPesquisa.filter(item => item.cepAntigo != cepAntigo))
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

            {pesquisa.cidade !== '' && (

                <CampoMapa
                    cidade={pesquisa.cidade}
                    bairro={pesquisa.bairro}
                    logradouro={pesquisa.logradouro}
                    cep={pesquisa.cepAntigo} />

            )}

            {listaPesquisa.length > 0 && (<Historico lista={listaPesquisa} click={excluir} />)}


        </div>
    )
}

export default CampoTexto;