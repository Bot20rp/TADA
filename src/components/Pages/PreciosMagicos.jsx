import React from 'react';
import '../css/PreciosMagicos.css'

const PreciosMagicos = () => {
  // Constante con los datos de las cervezas
  const cervezas = [
    {
      id: 1,
      imagen: '/img/c3.jpg', // URL de la imagen
      precioAntes: 'ANTES: Bs 180 ',
      precioDespues: 'AHORA: Bs 155',
      descripcion: '24 unidades paceña gordita 330 ml',
    },
    {
      id: 2,
      imagen: '/img/c4.jpg',
      precioAntes: 'ANTES: Bs 180',
      precioDespues: 'AHORA: Bs 160',
      descripcion: '24 unidades Huari Palito 269 ml',
    },
    {
      id: 3,
      imagen: '/img/c5.jpg',
      precioAntes: 'ANTES: Bs 144',
      precioDespues: 'AHORA: Bs 135',
      descripcion: '24 unidades paceña palito 269 ml ',
    },
    {
      id: 3,
      imagen: '/img/c6.jpg',
      precioAntes: 'ANTES: Bs 132',
      precioDespues: 'AHORA: Bs 122',
      descripcion: '24 unidades golde palito 269 ml',
    },
    {
      id: 3,
      imagen: '/img/c7.jpg',
      precioAntes: 'ANTES: Bs 216',
      precioDespues: 'AHORA: Bs 194',
      descripcion: '24 unidades Paceña Grande 440 ml',
    },
  ];

  return (
    <div className="contenedor-cervezas">
      {cervezas.map((cerveza) => (
        <div className="tarjeta-cerveza" key={cerveza.id}>
          <img src={cerveza.imagen} alt="Cerveza" className="imagen-cerveza" />
          <h3 style={{color: 'red'}}>{cerveza.precioAntes}</h3>
          <h3>{cerveza.precioDespues}</h3>
          <p>{cerveza.descripcion}</p>
        </div>
      ))}
    </div>
  );
};

export default PreciosMagicos;
