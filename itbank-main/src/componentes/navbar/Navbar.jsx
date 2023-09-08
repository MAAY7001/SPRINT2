import React, { useState } from 'react';
import './Navbar.css';
import { Icon } from '../Icon';

const Navbar=()=> {
    const [showNav, setshownav] = useState(false)
    const changeState =()=>{
        if (showNav==true){ 
            setshownav(false)
        } 
        else {
            setshownav(true)
        }
        console.log("hola")
    }
    return (
        <div class="menu-1">
        <ul>
            <li><a href="/home" title="home">Home</a></li>
            <li><a href="/cuentas" title="cuentas">Cuentas</a></li>
            <li><a href="/prestamos" title="prestamos">Prestamos</a></li>
            <li><a href="/transferencias" title="transferencias">Transferencias</a></li>
        </ul>
    </div>
);
}

export default Navbar;