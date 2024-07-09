import { Link } from "react-router-dom";
import './style.css'

function Erro() {
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Pagina não encontrada!</h2>
            <Link to={'/'}>Volte para a pagina inicial</Link>
        </div>
    )
}

export default Erro;