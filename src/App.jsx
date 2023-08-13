import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter, Routes,Route } from 'react-router-dom'
import Navbart from './componentes/Navbart'
import Inicio from './paginas/Inicio'
import Proyectos from './paginas/Proyectos'
import Contactame from './paginas/Contactame'
import Loading from './componentes/Loading'
import { useSelector } from 'react-redux'
import DetallesP from './paginas/DetallesP'
import Listo from './paginas/Listo'


function App() {
  
  const loading = useSelector((state) => state.isLoading);
  return (
    <div className="App">
      <HashRouter >
       {loading && <Loading />}
      <Navbart/>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path='/proyectos' element={<Proyectos/>} />
      <Route path='/contactame' element={<Contactame/>} />
      <Route path='/detallesP/:id' element={<DetallesP/>} />
      <Route path='/listo' element={<Listo/>} />
    </Routes>
  </HashRouter>
    </div>
    
    
  )
}

export default App
