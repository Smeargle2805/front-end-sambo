import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import { AreaAdmin } from './components/AreaAdmin'
import { Login } from './components/login'

export const App = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Login/> } />
            <Route path='/AdminPage' element={ <AreaAdmin/> } />
          </Routes>
        </BrowserRouter>
      </>
    )
}
