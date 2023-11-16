import './css/areaAdmin.css';
import samboLogo from '../assets/samboLogo.jpeg';
import { Link } from 'react-router-dom';

export const AreaAdmin = ({ children }) => {

  const links = [
    {
      title: 'Usuarios',
      to: '/usuarios',
    },
    {
      title: 'Atletas',
      to: '/atletas',
    },
    {
      title: 'Maestros',
      to: '/maestros',
    },
    {
      title: 'Escuelas',
      to: '/escuelas',
    },
    {
      title: 'Torneos',
      to: '/torneos',
    },
    {
      title: 'Area de editor',
      to: '/editor',
    },
  ];

  return (
    <>
      <section id='area-total' className='w-100 h-100'>
        <div id='barra-lateral'>
          <div id='info-user' className='d-flex align-items-center justify-content-center flex-column'>
            <img src={samboLogo} alt="" />
            <p>Usuario1</p>
          </div>
          <div id='opciones'>
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className='button-opcion mb-4'
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div id='area-contenido'>
          {children}
        </div>

      </section>
    </>
  );
};