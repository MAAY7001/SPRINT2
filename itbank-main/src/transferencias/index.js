import './index.css'
import React, {useState} from 'react';
import ConvertirDe from '../componentes/convertirde/ConvertirDe.jsx';
import ConvertirA from '../componentes/convertira/ConvertirA.jsx';
import Monedas from '../componentes/monedas/Monedas.jsx';
import Header from '../componentes/header/Header';

export function Transferencias() {
    const [monedaDe, setMonedaDe] = useState('');
    const [monedaA, setMonedaA] = useState('');
    const [cantidad, setCantidad] = useState(0);

    const handleMonedaDeChange = (moneda) => {
        setMonedaDe(moneda);
    };

    const handleMonedaAChange = (moneda) => {
        setMonedaA(moneda);
    };

    const handleCantidadCambiada = (nuevaCantidad) => {
        setCantidad(nuevaCantidad);
    }
    return (
            <div className='containerTransferencias'>
                <Header/>
                <div id='containerBody'>
                    <><div className='containerConversor'>
                        <ConvertirDe
                            onMonedaDeSeleccionada={handleMonedaDeChange}
                            onCantidadCambiada={handleCantidadCambiada} />
                        <ConvertirA
                            onMonedaASeleccionada={handleMonedaAChange}
                            onCantidadCambiada={handleCantidadCambiada} />
                        <Monedas monedaDe={monedaDe} monedaA={monedaA} cantidad={cantidad} />
                    </div>
                    <div id='containerTransferenciasImg'>
                        <img src="./fotos/credito.png" alt=""></img>
                    </div></>
                </div>
            </div>
    )
}

export default Transferencias;
