import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Erro from './pages/Erro';
import Favoritos from './pages/Favoritos';
import Button1 from './components/Button1';
import Button2 from './components/Button2';

function RoutesApp(){
    return (
        <BrowserRouter>
            <Header />
            <Button1 />
            <Button2 />
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/filme/:id" element={ <Filme />} />
                <Route path="/favoritos" element={ <Favoritos />} />
                <Route path='*' element={ <Erro /> }></Route>
            </Routes>
            
        </BrowserRouter>
    )
}

export default RoutesApp;