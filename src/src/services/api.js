import axios from 'axios';

// KEY = 83a7aed78524a2a914371d1347f04730
// Exemplo URL = /movie/now_playing?api_key=83a7aed78524a2a914371d1347f04730&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;