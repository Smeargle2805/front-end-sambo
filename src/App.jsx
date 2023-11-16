import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { AreaAdmin } from './components/AreaAdmin';
import { Login } from './components/login';
import { Atletas } from './components/Atletas';
import { Usuarios } from './components/Usuarios';
import { Maestros } from './components/Maestros';
import { Escuelas } from './components/Escuelas';
import { Torneos } from './components/Torneos';
import { SubirPost } from './components/SubirPost';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
        <AreaAdmin>
          <Routes>
            <Route path='/usuarios' element={<Usuarios />} />
            <Route path='/atletas' element={<Atletas />} />
            <Route path='/maestros' element={<Maestros />} />
            <Route path='/escuelas' element={<Escuelas />} />
            <Route path='/torneos' element={<Torneos />} />
            <Route path='/editor' element={<SubirPost />} />
          </Routes>
        </AreaAdmin>
      </BrowserRouter>
    </>
  )
}
