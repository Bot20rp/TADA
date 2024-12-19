import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tada from './components/Pages/Tada';

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
      <Routes>
        <Route path="/" element={<Tada/>} />
      </Routes>
    </>
  )
}

export default App
