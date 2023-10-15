import React from 'react';
import { Link } from 'react-router-dom';
import Posteos from './Posteos.js';
//import PostCompleto from './publicacion';

function Pagina(props) {
/* 
El style es para agregar css a la app
<Link to="/publicacion" Hace que el https tenga eso, al tener solo / cambia la hubicacion
el <link to="/" va a estar en publicacion, que ahi vas si apretas en "Nuevo post" que es lo que esta aca
si vas al codigo de publicacion vas a ver un <link to="/" que al apretarlo te hubica aca
*/

  const { arrayGuardadoTitulo, arrayGuardadoAutor, arrayGuardadoPost, admin } = props;


  return (
    <>
      <div style={{ backgroundColor: 'purple', padding: '1px', border: '5px solid' }}>
        <h1 style={{textAlign: 'center'}}>Home</h1>
        <h1 style={{ textAlign: 'center'}}> <Link to="/publicacion" style={{ textDecoration: 'none', color: 'white'}}>Nuevo Post</Link> </h1>
        {admin && (
          <h2>MODO ADMIN</h2>
        )}
        </div>
        <Posteos  
          arrayGuardadoTitulo={arrayGuardadoTitulo}
          arrayGuardadoAutor={arrayGuardadoAutor}
          arrayGuardadoPost={arrayGuardadoPost}
          admin={admin}
        />
    </>
  );
}

export default Pagina;