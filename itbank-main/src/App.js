import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Transferencias from './transferencias/index.js'
import Home from './home/index.js';
import Cuentas from './cuentas/index.js';
import Prestamos from './prestamos/index.js';
import Login from './login/index.js'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/cuentas" element={<Cuentas/>}/>
        <Route path="/prestamos" element={<Prestamos/>}/>
        <Route path="/transferencias" element={<Transferencias/>}/>
      </Routes>
    </Router>
  );
}

export default App;
