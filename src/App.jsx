import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Views
import { AreaAdmin } from './components/AreaAdmin';
import { Login } from './components/login';
import { Atletas } from './components/Atletas';
import { Usuarios } from './components/Usuarios';
import { Maestros } from './components/Maestros';
import { Escuelas } from './components/Escuelas';
import { Torneos } from './components/Torneos';
import { SubirPost } from './components/SubirPost';
import { MainPage } from './components/MainPage';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<MainPage />} />
          <Route path='/admin/*' element={<AreaAdmin />}>
            {/* Todos los componente <Route/> que pongan dentro de este <Route/> son rutas hijas (explicaciacion de que pasara con las rutas hijas en AreaAdmin) */}
            <Route path='usuarios' element={<Usuarios />} />
            <Route path='atletas' element={<Atletas />} />
            <Route path='maestros' element={<Maestros />} />
            <Route path='escuelas' element={<Escuelas />} />
            <Route path='torneos' element={<Torneos />} />
            <Route path='editor' element={<SubirPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
