import './css/areaAdmin.css';
import samboLogo from '../assets/samboLogo.jpeg';
import { Link, Outlet } from 'react-router-dom';

export const AreaAdmin = () => {

  // Aqui estan todas las rutas del area de administrador
  // si quieren agregar un nuevo link solo deben agregar un objeto a este arreglo
  // y automaticamente se mostrar en en la interfaz porque se esta recorriendo
  const links = [
    {
      title: 'Usuarios',
      to: '/admin/usuarios',
    },
    {
      title: 'Atletas',
      to: '/admin/atletas',
    },
    {
      title: 'Maestros',
      to: '/admin/maestros',
    },
    {
      title: 'Escuelas',
      to: '/admin/escuelas',
    },
    {
      title: 'Torneos',
      to: '/admin/torneos',
    },
    {
      title: 'Area de editor',
      to: '/admin/editor',
    },
  ];

  return (
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
              className='mb-4 button-opcion'
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div id='area-contenido'>
        <Outlet />
        {/* Este outlet sirve para inyectar todas las rutas hijas que tiene el componente <Route/> en el App.jsx */}
        {/* Este archivo sirve como padre y como diseño que tendran todas las rutas hijas */}
        {/* Digamos que quieran cambiar el logo o los links o qusieran agregar un navbar arriba del <Outlet /> todas las rutas hijas tendran ese navbar o si ponen un parrafo que diga 'Administración de Sambo' todas las rutas lo tendran  */}
      </div>

    </section>
  );
};