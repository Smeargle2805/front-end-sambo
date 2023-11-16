import './css/mainpage.css';
import { Link } from 'react-router-dom'

import logo from '../assets/LOGO.png'
import bannerImg from '../assets/banner.jpg'
import acercaDeImg from '../assets/acercade.jpg'

export const MainPage = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className='p-0 mt-0 row nav-azul justify-content-center align-items-center'>
        <div className='col-md-4'></div>
        <div className='col-md-4 d-flex justify-content-center'>
          <img src={logo} alt='logo' title='logo' className='logo' />
        </div>
        <div className='col-md-4'>
          <Link
            className='text-white btn-login d-block'
            to='/login'
          >
            Iniciar sesión
          </Link>
        </div>
      </div>

      <img src={bannerImg} alt='logo' className='banner' />

      <main className='mt-3 row contenedor'>
        <div className='col-md-6'>
          <h2 className='font-bold text-center'>Noticias</h2>
          <div className='contenido'>
            <ul>
              <li>Noticia 1</li>
              <li>Noticia 2</li>
              <li>Noticia 3</li>
            </ul>
          </div>
        </div>
        <div className='col-md-6'>
          <h2 className='font-bold text-center'>Ultimas participaciones</h2>
          <div className='contenido'>
            <ul>
              <li>Ulimas participaciones 1</li>
              <li>Ulimas participaciones 2</li>
              <li>Ulimas participaciones 3</li>
            </ul>
          </div>
        </div>

      </main>

      <hr />

      <div className='my-5 row justify-content-center align-items-center contenedor'>
        <div className='col-md-5'>
          <h2 className='text-center heading'>Federación Hondureña de Sambo</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic illum optio obcaecati in eligendi nisi, quidem, neque voluptatibus omnis laborum dolorem sit, nobis veritatis.
          </p>
        </div>
        <div className='col-md-7 d-flex justify-content-center'>
          <img src={acercaDeImg} alt='imagen acerca de' title='imagen acerca de' />
        </div>
      </div>

      <footer className='p-3 bg-white border shadow-sm'>
        <p className='text-center copyright'>
          Copyright &copy; {''}
          <span className='year'>{year}</span> {''}
          Todos los derechos resevados
        </p>
      </footer>

    </>
  )
}
