import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';
import './style.css';

function Filme(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: '83a7aed78524a2a914371d1347f04730',
                    language: 'pt-BR',
                }
            })
            .then(response =>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log('Erro ao carregar o filme');
                navigate("/", {replace: true});
                return;
            })
        }
            
        loadFilme();
        return () =>{
            console.log('Componente foi desmontado');
        }         
    }, [navigate,id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem('@erbopflix');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);
        if(hasFilme){
            toast.warn("Esse filme ja esta na sua lista!");
            return;
        }
        
        filmesSalvos.push(filme);
        localStorage.setItem("@erbopflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!");
    }

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando...</h1>
            </div>
        )
    }
    return (
        <div>
            <div className='filme-info'>
                <h1>{filme.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
                
                <h3>Sinopse:</h3>
                <p>{filme.overview}</p>
                <h3>Avaliação:</h3>
                <div className='aval'>{filme.vote_average} / 10</div>
                <div className='area-buttons'>
                    <button onClick={salvarFilme}> Salvar </button>
                    <a target="blank" rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}> 
                        <button> Trailer </button> 
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Filme;