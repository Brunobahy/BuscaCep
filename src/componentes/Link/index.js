import './Link.css'

const Link = ({link, texto}) =>{
    console.log(link)
    return(
        <a className='link' href={link}>{texto}</a>
    )
}

export default Link;