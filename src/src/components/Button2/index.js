import './style.css';
import { BiSolidDice6 } from "react-icons/bi";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';


function Button2(){
    const navigate = useNavigate();
    const [filmes, setFilmes] = useState([]);
    
    useEffect(()=> {
        async function loadFilmes(){
            const response = await api.get("/movie/now_playing", {
                params:{
                    api_key: "83a7aed78524a2a914371d1347f04730",
                    language: "pt-BR",
                    page: 1,
                }    
            });
            setFilmes(response.data.results.slice(0, 10));
        }
        
        loadFilmes();
    })

    function randomize(){
        const randomIndex = Math.floor(Math.random() * filmes.length);
        const randomFilme = filmes[randomIndex];
        navigate(`/filme/${randomFilme.id}`);
        
    }

    return (
        <button className='buttonRandom' onClick={randomize}>
            <div className='iconTheme'>
                <BiSolidDice6 />
            </div>
        </button>
    )
}

export default Button2;