import React from 'react'
import { MainPage} from './components/MainPage'
import { AreaAdmin } from './Components/areaAdmin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


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
