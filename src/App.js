import { Routes, Route, Link } from 'react-router-dom';
import Pagina from './pagina.js';
import PostCompleto from './publicacion.js';
import React, { useState, useEffect } from "react";
import Comentarios from './comentarios.js';
import Admin from './Admin.js';

function App() {
  const [arrayGuardadoTitulo, setArrayGuardadoTitulo] = useState([]);
  const [arrayGuardadoAutor, setArrayGuardadoAutor] = useState([]);
  const [arrayGuardadoPost, setArrayGuardadoPost] = useState([]);

  // useEffect, cuando se cargue un nuevo post lo que va a hacer es actualizarse para mostrar el post
  useEffect(() => {
    //el localStorage.getItem se usa para recuperar el valor asociado con una clave en el almacenamiento local
    //y agarramos los datos que tienen los arrayGuardado Titulo, Autor y Post
    const Titulo = localStorage.getItem('arrayGuardadoTitulo');
    const Autor = localStorage.getItem('arrayGuardadoAutor');
    const Post = localStorage.getItem('arrayGuardadoPost');

    if (Titulo) {
      setArrayGuardadoTitulo(JSON.parse(Titulo));
    }
    if (Autor) {
      setArrayGuardadoAutor(JSON.parse(Autor));
    }
    if (Post) {
      setArrayGuardadoPost(JSON.parse(Post));
    }
  }, []);

  // Guardar los datos en el almacenamiento local cuando cambian
  //Este otro useEffect también se ejecuta después de que se renderiza el componente, 
  //pero esta vez está configurado para observar los cambios en los estados 
  //arrayGuardadoTitulo, arrayGuardadoAutor, y arrayGuardadoPost.
//Cuando cualquiera de estos estados cambia (por ejemplo, cuando se agregan nuevos datos de posteos), 
//se ejecuta este efecto.
  useEffect(() => {
    localStorage.setItem('arrayGuardadoTitulo', JSON.stringify(arrayGuardadoTitulo));
    localStorage.setItem('arrayGuardadoAutor', JSON.stringify(arrayGuardadoAutor));
    localStorage.setItem('arrayGuardadoPost', JSON.stringify(arrayGuardadoPost));
  }, [arrayGuardadoTitulo, arrayGuardadoAutor, arrayGuardadoPost]);

  function guardarDatos(titulo, autor, post) {
    setArrayGuardadoTitulo([...arrayGuardadoTitulo, titulo]);
    setArrayGuardadoAutor([...arrayGuardadoAutor, autor]);
    setArrayGuardadoPost([...arrayGuardadoPost, post]);
  }

  const [admin, setAdmin] = useState(false)
  

  return (
    <>
      <Routes>
        
        <Route exact path="/" element={<Pagina arrayGuardadoTitulo={arrayGuardadoTitulo} 
           arrayGuardadoAutor={arrayGuardadoAutor} arrayGuardadoPost={arrayGuardadoPost}  />} />
        <Route
          exact path="/publicacion"
          element={<PostCompleto guardarDatos={guardarDatos} />}
        />
        <Route path="/admin" element={<Admin setAdmin={setAdmin} />} />
        <Route
        path="/comentarios/:postIndex"
        element={
        <Comentarios
        arrayGuardadoTitulo={arrayGuardadoTitulo}
        arrayGuardadoAutor={arrayGuardadoAutor}
        arrayGuardadoPost={arrayGuardadoPost}
        /> }
        />

      </Routes>
      {/* <Posteos /> */}
    </>
  );
}

 

export default App;