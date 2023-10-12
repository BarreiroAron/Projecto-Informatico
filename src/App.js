import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';
import Pagina from './pagina.js';
import PostCompleto from './publicacion.js';
import React, { useState, useEffect } from "react";

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

  function Posteos() {
    return (
      <div>
        {arrayGuardadoTitulo.map((item, index) => (
          <div key={index}>
            <h2>Titulo: {item}</h2>
            <h3>Autor: {arrayGuardadoAutor[index]}</h3>
            <p>{arrayGuardadoPost[index]}</p>
            <h1 style={{ height: "10px", backgroundColor: "purple" }}></h1>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Pagina />} />
        <Route
          path="/publicacion"
          element={<PostCompleto guardarDatos={guardarDatos} />}
        />
      </Routes>
      <Posteos />
    </>
  );
}

export default App;