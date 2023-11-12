import React from 'react'
import { AreaAdmin } from './components/AreaAdmin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Atletas } from './components/Atletas'

export const App = () => {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <AreaAdmin/> } />
          </Routes>
        </BrowserRouter>
      </>
    )
}
