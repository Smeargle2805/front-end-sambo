import React, { useState } from 'react'
import './css/areaAdmin.css'
import samboLogo from'../assets/samboLogo.jpeg'
import { Usuarios } from "./Usuarios"
import { Atletas } from './Atletas'

export const AreaAdmin = () => {

  const [componenteActual, setComponenteActual] = useState(null);
  const mostrarUsuarios = () => {
    setComponenteActual(<Usuarios />);
  };
  const mostrarAtletas = () => {
    setComponenteActual(<Atletas />);
  };
  return (
    <>
      <section id='area-total' className='w-100 h-100'>
        <div id='barra-lateral'>
          <div id='info-user' className='d-flex align-items-center justify-content-center flex-column'>
              <img src={samboLogo} alt="" />
              <p>Usuario1</p>
          </div>
          <div id='opciones'>
            <div className='w-100 h-100 d-flex justify-content-center'>
              <button className='button-opcion' type='button' onClick={mostrarUsuarios}>Usuarios </button>
            </div>
            <div className='w-100 h-100 d-flex justify-content-center'>
              <button className='button-opcion' type='button' onClick={mostrarAtletas}>Atletas</button>
            </div>
            <div className='w-100 h-100 d-flex justify-content-center'>
              <button className='button-opcion' type='button'>Maestros</button>
            </div>
            <div className='w-100 h-100 d-flex justify-content-center'>
              <button className='button-opcion' type='button'>Escuelas</button>
            </div>
            <div className='w-100 h-100 d-flex justify-content-center'>
              <button className='button-opcion' type='button'>Torneos</button>
            </div>
            <div className='w-100 h-100 d-flex justify-content-center'>
              <button className='button-opcion' type='button'>Area Editor</button>
            </div>
          </div>
        </div>
        <div id='area-contenido'>
          {componenteActual}
        </div>
        
      </section>
    </>
  );
};