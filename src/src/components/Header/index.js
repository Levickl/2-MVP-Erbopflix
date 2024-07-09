import './style.css';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header>
            <Link className='Logo' to={"/"}> Erbop Flix</Link>
            <Link className='Favoritos' to={"/favoritos"}>Meus filmes</Link>
        </header>
    )
}

export default Header;