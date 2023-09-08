import './cuentas.css';
import Box from '../componentes/box/Box.js';
import Header from '../componentes/header/Header';


function Cuentas() {

  return (
    <div className="Cuentas">
    <Header/>
      <>
  <section className="mainContent">
    <article>
      <br />
      <div className='cuentasText'>
        <h2>Hola, Matias Victor Saguir </h2>
      </div>
      <div className='tusCuentas'>
        <h2>Tus Cuentas</h2>
      </div>
      <input type="button" name="button" defaultValue="Más opciones" />
      <div className="contentCuentas">
        <section className="accountsSection">
          <div className="accountCard">
            <div className="accountCardText">
              <h3>Cuenta de Ahorros</h3>
              <p>Número de Cuenta: XXXX-XXXX-XXXX-1234</p>
              <p>Saldo Actual: $500,000</p>
              <a href="#" className="action-button">
                Ver Detalles
              </a>
            </div>
          </div>
          <div className="accountCard">
            <div className="accountCardText">
              <a href="#" className="action-button">
                Solicitar nueva cuenta
              </a>
            </div>
          </div>
        </section>
        <section>
        <div className="botones">
          <div className="botonMovimientos">
            <input type="button" name="movimientos" defaultValue="Últimos movimientos"/>
          </div>
          <div className="botonResumen">
            <input type="button" name="cuentas" defaultValue="Resumen de cuentas"/>
          </div>
        </div>
        </section>
        <Box />
      </div>
    </article>
  </section>
</>

    </div>
  );
}

export default Cuentas;