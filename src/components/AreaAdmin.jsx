import React, { useState } from 'react'
import './css/areaAdmin.css'
import samboLogo from '../assets/samboLogo.jpeg'
import LoginOutLogo from '../assets/user.png'
import { Usuarios } from "./Usuarios"
import { Atletas } from './Atletas'
import { SubirPost } from './SubirPost'
import { Maestros } from './Maestros'
import { Escuelas } from "./Escuelas";
import { AreaEscuelas } from './AreaEscuelas'

export const AreaAdmin = () => {

  const [componenteActual, setComponenteActual] = useState(null);
  const mostrarUsuarios = () => {
    setComponenteActual(<Usuarios />);
  };
  const mostrarAtletas = () => {
    setComponenteActual(<Atletas />);
  };
  const hacerPost = () => {
    setComponenteActual(<SubirPost/>);
  }
  const mostrarTorneo = () => {
    setComponenteActual(<Torneos/>)
    setComponenteActual(<SubirPost />)
  }
  const mostrarMaestros = () => {
    setComponenteActual(<Maestros />)
  }

  const mostrarEscuelas = () => {
    setComponenteActual(<Escuelas />)
  }

  const mostrarAreaEscuelas = () => {
    setComponenteActual(<AreaEscuelas />)
  }


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
              <button className='button-opcion' type='button' onClick={mostrarMaestros}>Maestros</button>
            </div>
            <div className='w-100 h-100 d-flex justify-content-center'>
              <button className='button-opcion' type='button' onClick={mostrarEscuelas} >Escuelas</button>
            </div>
            <div className='w-100 h-100 d-flex justify-content-center'>
              <button className='button-opcion' type='button' onClick={mostrarTorneo}>Torneos</button>
            </div>
            <div className='w-100 h-100 d-flex justify-content-center'>
              <button className='button-opcion' type='button' onClick={hacerPost}>Area Editor</button>
            </div>
            <div className='w-100 h-100 d-flex justify-content-center' >
              <button className='button-opcion' type='button'>Cerrar Sesion</button>
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