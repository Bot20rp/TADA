import React from 'react'
import { useNavigate } from 'react-router-dom'

const Tada = () => {

    const navigate = useNavigate();

    const navegation = () => {
        navigate("/preciosMagicos")
    }

  return (
    <div>
      hola tada cadabra
      <button onClick={navegation}>hola</button>
    </div>
  )
}

export default Tada
