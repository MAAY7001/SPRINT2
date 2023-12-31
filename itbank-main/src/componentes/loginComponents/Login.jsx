


import React, { useState } from 'react';
import './Login.css';

function LoginForm({ setUser }) {
  const [documento, setDocumento] = useState('');
  const [numeroDNI, setNumeroDNI] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState(false);

  const handleDocumentoChange = (e) => {
    setDocumento(e.target.value);
  };

  const handleNumeroDNIChange = (e) => {
    setNumeroDNI(e.target.value);
  };

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handleContraseñaChange = (e) => {
    setContraseña(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    // Validar los datos y realizar una solicitud al servidor.

    if (documento === '' || numeroDNI === '' || usuario === '' || contraseña === '') {
      setError(true);
      return;
    }

    // Aquí puedes enviar los datos al servidor o realizar cualquier acción necesaria
    // Luego, puedes actualizar el estado de usuario para indicar que el usuario ha iniciado sesión
    setUser([usuario]);/* aquí puedes poner los datos del usuario */
  };

  return (
    <main>
<section className='login-section'>
      <h2>Iniciar Sesión</h2>
      <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <label htmlFor="documento">Tipo de Documento:</label>
          <select
            id="documento"
            name="documento"
            value={documento}
            onChange={handleDocumentoChange}
          >
            <option value="Seleccionar">Seleccionar</option>
            <option value="DNI">DNI</option>
            <option value="LC">LC</option>
            <option value="LE">LE</option>
            <option value="CI">CI</option>
            <option value="PASAPORTE">PASAPORTE</option>
            <option value="RENAPER">RENAPER</option>
          </select>

          <label htmlFor="numero-dni">Número de Documento:</label>
          <input
            type="text"
            id="numero-dni"
            name="numero-dni"
            value={numeroDNI}
            onChange={handleNumeroDNIChange}
            required
          />

          <label htmlFor="usuario">Usuario:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={usuario}
            onChange={handleUsuarioChange}
            required
          />

          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={contraseña}
            onChange={handleContraseñaChange}
            required
          />


          <button type="submit">Ingresar</button>
        </form>

        {error && <p>* Todos los campos son obligatorios</p>}

        <br />
        <div className='registro-link'>
          ¿No tienes una cuenta? <a href="#">Regístrate</a>
        </div>
        <div className='olvide-link'>
          <a href="#">Olvidé mi contraseña o usuario</a>
        </div>
      </div>
    </section>
    </main>
    
  );
}

export default LoginForm;