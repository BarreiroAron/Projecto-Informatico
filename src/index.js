import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagina from './pagina.js';
import PostCompleto from './publicacion.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/*para manejar rutas*/}
    <Routes>
      <Route path="/" element={<Pagina publicaciones={[]}/>}/>
      <Route path="/publicacion" element={<PostCompleto />}/>
    </Routes>
  </BrowserRouter>
);