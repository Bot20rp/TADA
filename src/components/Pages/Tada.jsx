import React from 'react'
import '../css/Tada.css'
import { useNavigate } from 'react-router-dom'

const Tada = () => {

    const navigate = useNavigate();

    const navegation = () => {
        navigate("/preciosMagicos")
    }

    return (
        <div className='container'>

            <div className="magia">
                <h1>PRECIOS</h1>
                <h1>MAGICOS</h1>
            </div>

            <div className='Tada'>
                <button onClick={navegation}>DESCUENTOS DE CERVEZAS</button>
                <button onClick={navegation}>COMBOS</button>
                <button onClick={navegation}>PROMOCIONES</button>
            </div>
            <div>
                <img src="/img/TADA.png" alt="" />
            </div>
        </div>
    )
}

export default Tada
