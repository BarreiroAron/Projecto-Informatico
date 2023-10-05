import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PostCompleto from './publicacion';

function Pagina() {
    
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