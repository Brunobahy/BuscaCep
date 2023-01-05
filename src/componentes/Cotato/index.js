import Link from '../Link';
import './Contato.css'

const Contato = () =>{
    return(
        <div className='contato'>
            <Link texto={<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'/>} link={"http://github.com/brunobahy"}/>
            <Link texto={<img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'/>} link={"https://www.linkedin.com/in/bruno-bahy/"}/>
        </div>
    )
}

export default Contato;