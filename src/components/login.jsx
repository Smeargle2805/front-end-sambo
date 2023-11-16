import React from 'react'
import { useNavigate } from 'react-router-dom';


import './css/login.css'
import  logoSambo  from '../assets/LOGO.png';
import logoFooter from '../assets/BUSHIDO.png'




export const Login = () => {
    
const navegar=useNavigate();

const handleClickMainPage =()=>{
    console.log('hola')
    event.preventDefault();
    navegar('/AdminPage');

}

    return (
        <>
            <main>
                <div className='contenedorTodo'>
                    <div className='contenedorImg'>
                        <img src={logoSambo} alt='Logo_Sambo' />
                    </div>
                    <div className='contenedorLogin'>
                        <form>
                            <h2 className="mb-4 mt-1">Iniciar Sesión</h2>
                            <div className="mb-3">
                                <label for="inputEmail" className="form-label">Usuario</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder='Ingresa Tu Usuario' />
                            </div>
                            <div class="mb-3">
                                <label for="inputPassword" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" id="inputPassword" placeholder='Ingresa Tu Contraseña' />
                            </div>
                            <label for="selectRol" class="form-label">Rol</label>
                            <div class="mb-3">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Selecciona Tu Rol</option>
                                    <option value="1">Editor</option>
                                    <option value="2">Admin</option>
                                    <option value="3">GodSystem</option>
                                </select>
                            </div>
                            <div class="mt-5">
                                <button type="submit" class="btn botonLogin" onClick={handleClickMainPage}>Ingresar Al Sistema</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='footerLogin'>
                    <img src={logoFooter} alt="" />
                </div>
            </main>
        </>
    )
}

