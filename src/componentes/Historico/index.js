import { AiFillCloseCircle } from 'react-icons/ai'
import Link from "../Link";
import "./Historico.css"

function Historico({ lista, click}) {
    return (
        <div className="historico">
            <h3>Ultimas Pesquisas</h3>
            <ul>
                {lista.map(item =>
                    <li>
                        <AiFillCloseCircle className='icon' onClick={ () => click(item.cepAntigo)} />
                        <Link
                            link={"https://www.google.com.br/maps/place/" + item.cidade + " " + item.bairro + " " + item.logradouro}
                            texto={item.cepAntigo}
                        />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Historico;