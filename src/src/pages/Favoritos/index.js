import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.css';

function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    function excluirFilme(id){
        const filmesFiltrados = filmes.filter((filme) => {return (filme.id !== id)});
        setFilmes(filmesFiltrados);
        localStorage.setItem('@erbopflix', JSON.stringify(filmesFiltrados));
        toast.success("Filme removido com sucesso!");
    }   

    useEffect(()=>{
        const minhaLista = localStorage.getItem("@erbopflix");
        setFilmes(JSON.parse(minhaLista) || []);

    }, []);

    return(
        <div className="favoritos">
            <div className='container'>
                <h1>⭐ Favoritos  ⭐</h1>
                <br/>
                {filmes.length === 0 && <strong>Você não possui nenhum filme salvo! 😥</strong>}
                <ul>
                    {filmes.map((item)=>(
                        <li key={item.id}>
                            <p>{item.title}</p>
                            <div className='detalhes'>
                                <Link to={`/filme/${item.id}`}> Ver detalhes </Link>              
                                <button onClick={() => {excluirFilme(item.id)}}>X</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Favoritos;