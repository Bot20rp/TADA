import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tada from './components/Pages/Tada';
import PreciosMagicos from './components/Pages/PreciosMagicos';
import { Navbar } from './components/Navar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
}

function Main() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Tada/>} />
        <Route path="/preciosMagicos" element={<PreciosMagicos/>} />
      </Routes>
    </>
  )
}

export default App
