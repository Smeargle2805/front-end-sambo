import './css/login.css'
import { useNavigate } from 'react-router-dom';

import logoSambo from '../assets/LOGO.png';
import logoFooter from '../assets/BUSHIDO.png'


export const Login = () => {

  const navegar = useNavigate();

  const handleClickMainPage = () => {
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
              <h2 className="mt-1 mb-4">Iniciar Sesión</h2>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Usuario</label>
                <input type="email" className="form-control" id="inputEmail" placeholder='Ingresa Tu Usuario' />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="inputPassword" placeholder='Ingresa Tu Contraseña' />
              </div>
              <label htmlFor="selectRol" className="form-label">Rol</label>
              <div className="mb-3">
                <select className="form-select" aria-label="Default select example">
                  <option selected>Selecciona Tu Rol</option>
                  <option value="1">Editor</option>
                  <option value="2">Admin</option>
                  <option value="3">GodSystem</option>
                </select>
              </div>
              <div className="mt-5">
                <button type="submit" className="btn botonLogin" onClick={handleClickMainPage}>Ingresar Al Sistema</button>
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

