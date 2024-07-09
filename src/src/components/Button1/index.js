import './style.css';
import { BiMoon, BiSun } from "react-icons/bi";
import { useState } from 'react';

function Button1(){
    const [modoEscuro, setModoEscuro] = useState(false);
    function Change() {
        const root = window.document.documentElement;

        if (modoEscuro) {
            root.classList.remove('dark');
            root.classList.add('light');
        } else {
            root.classList.remove('light');
            root.classList.add('dark');
        }

        // Alternar estado do modo escuro
        setModoEscuro(!modoEscuro);
    }
    
    return (
        <button className='buttonChange' onClick={Change}>
            <div className='iconTheme'>
                { modoEscuro ? <BiSun /> : <BiMoon />}
            </div>
        </button>
    )
}

export default Button1;