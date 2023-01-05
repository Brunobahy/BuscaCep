import Link from '../Link';
import './CampoMapa.css'

const CampoMapa = ({cidade, logradouro, bairro, cep}) =>{
    return(
        <section className='container'>
            <h3>CEP: {cep}</h3>
            <h3>Cidade: {cidade}</h3>
            <h3>Bairro: {bairro}</h3>
            <h3>Logradouro: {logradouro}</h3>
            <Link link={"https://www.google.com.br/maps/place/"+cidade+" "+bairro+" "+logradouro} texto={"Ver no mapa"}/>
        </section>
    )
}

export default CampoMapa;