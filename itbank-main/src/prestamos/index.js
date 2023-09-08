import React, { useState } from 'react';
import './index.css';
import Header from '../componentes/header/Header';

function Prestamos() {
  const [resultado, setResultado] = useState({
    totalAPagar: 0,
    cuotaMensual: 0,
  });

  const handleCalculadoraClick = () => {
    const montoPrestamo = parseFloat(document.getElementById("monto-prestamo").value);
    const tasaInteres = parseFloat(document.getElementById("tasa").value / 100);
    const plazoPrestamo = parseFloat(document.getElementById("plazo-prestamo").value);

    const tasaMensual = tasaInteres / 12;
    const pagoTotales = plazoPrestamo;

    const pagoMensual = (montoPrestamo * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -pagoTotales));
    const pagoTotal = pagoMensual * pagoTotales;

    // Actualizamos el estado con los resultados
    setResultado({
      totalAPagar: pagoTotal.toFixed(2),
      cuotaMensual: pagoMensual.toFixed(2),
    });
  };

  return (
    <div >
      <Header/>
      <div className="account-card">
        <h1>Calculadora de préstamos</h1>
        <form name="prestamo-form">
          <label htmlFor="monto-prestamo">Monto del préstamo: </label>
          <input type="number" id="monto-prestamo" name="monto-prestamo" /><br />
          <label htmlFor="tasa">Tasa de interés anual (%): </label>
          <input type="number" id="tasa" step="0.01" name="tasa" /><br />
          <label htmlFor="plazo-prestamo">Plazo del préstamo: </label>
          <select id="plazo-prestamo" name="plazo-prestamo">
            <option value={3}>3 MESES</option>
            <option value={6}>6 MESES</option>
            <option value={12}>12 MESES</option>
            <option value={24}>24 MESES</option>
          </select>
          <br />
          {/* Usamos onClick para manejar el evento clic del botón */}
          <button type="button" id="botonCalculo" onClick={handleCalculadoraClick}>
            CALCULAR
          </button>
        </form>
        <h2>TOTAL</h2>
        <p>Monto total a pagar: <span id="total-a-pagar">{resultado.totalAPagar}</span></p>
        <p>Cuota mensual: <span id="cuota-mensual">{resultado.cuotaMensual}</span></p>
      </div>
    </div>
  );
}

export default Prestamos;