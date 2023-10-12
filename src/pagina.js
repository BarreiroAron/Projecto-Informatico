import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PostCompleto from './publicacion';

function Pagina() {
{/* 
El style es para agregar css a la app
<Link to="/publicacion" Hace que el https tenga eso, al tener solo / cambia la hubicacion
el <link to="/" va a estar en publicacion, que ahi vas si apretas en "Nuevo post" que es lo que esta aca
si vas al codigo de publicacion vas a ver un <link to="/" que al apretarlo te hubica aca
*/}
  return (
    <>
      <div style={{ backgroundColor: 'purple', padding: '1px' }}>
        <h1>Home</h1>
        <h2> <Link to="/publicacion" style={{ textDecoration: 'none', color: 'white'}}>Nuevo Post</Link> </h2>
        </div>
    </>
  );
}

export default Pagina;