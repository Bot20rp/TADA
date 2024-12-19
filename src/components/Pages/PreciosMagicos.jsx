import React from 'react';
import '../css/PreciosMagicos.css'

const PreciosMagicos = () => {
  // Constante con los datos de las cervezas
  const cervezas = [
    {
      id: 1,
      imagen: '/img/c1.jpeg', // URL de la imagen
      precio: '$3.50',
      descripcion: 'Cerveza artesanal de trigo, refrescante y suave.',
    },
    {
      id: 2,
      imagen: '/img/c1.jpeg',
      precio: '$4.00',
      descripcion: 'Cerveza IPA con notas cítricas y amargas.',
    },
    {
      id: 3,
      imagen: '/img/c1.jpeg',
      precio: '$2.50',
      descripcion: 'Cerveza lager clásica, ideal para el verano.',
    },
  ];

  return (
    <div className="contenedor-cervezas">
      {cervezas.map((cerveza) => (
        <div className="tarjeta-cerveza" key={cerveza.id}>
          <img src={cerveza.imagen} alt="Cerveza" className="imagen-cerveza" />
          <h3>{cerveza.precio}</h3>
          <p>{cerveza.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default PreciosMagicos;
