import './Titulo.css'

const Titulo = (props) =>{
    return (
        <h1 className='titulo' style={{color:props.cor, fontSize:props.tamanho, filter: props.filtro} }>{props.nome}</h1>
    )
}

export default Titulo;