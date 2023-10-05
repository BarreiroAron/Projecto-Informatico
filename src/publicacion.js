import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagina from './pagina';

function PostCompleto() {
  const [Titulo, setTitulo] = useState("");
  const [arrayGuardadoTitulo, setArrayGuardado] = useState([]);


  function GuardarTitulo() {
    if (Titulo) {
      setArrayGuardado([...arrayGuardadoTitulo, Titulo]);
      setTitulo("");
    }
  }





    const [Autor, setAutor] = useState("");
    const [arrayGuardadoAutor, setArrayGuardadoAutor] = useState([]);
  
    function GuardarAutor() {
      if (Autor) {
        setArrayGuardadoAutor([...arrayGuardadoAutor, Autor]);
        setAutor("");
      }
    }




      const [Post, setPost] = useState("");
      const [arrayGuardadoPost, setArrayGuardadoPost] = useState([]);
    
      function GuardarPost() {
        if (Post) {
          setArrayGuardadoPost([...arrayGuardadoPost, Post]);
          setPost("");
        }
      }


      function IniciarTodo() {
        GuardarTitulo()
        GuardarAutor()
        GuardarPost()
      }


  return (
    <>
    <div style={{backgroundColor: 'purple', padding: '1px'}}>
    <h1>Posteen</h1>
      <h2><Link to="/" style={{ textDecoration: 'none', color: 'white'}}>Volver al home</Link></h2>
      </div>

      <div>
        <input
          placeholder="Titulo"
          type="text"
          value={Titulo}
          onChange={(ev) => setTitulo(ev.target.value)}
        ></input>

        <input
          placeholder="Autor"
          type="text"
          value={Autor}
          onChange={(ev) => setAutor(ev.target.value)}
        ></input>

        <textarea
          placeholder="Post"
          type="text"
          value={Post}
          onChange={(ev) => setPost(ev.target.value)}
          style={{ height: "200px", width: "100%" }}
        ></textarea>


        <button type="button" onClick={IniciarTodo}>
          Publicar
        </button>
      </div>

      {/*

      {arrayGuardadoTitulo.map((item, index) => (
        <div key={index}>
          <h2>Titulo: {item}</h2>
          <h3>Autor: {arrayGuardadoAutor[index]}</h3>
          <p>{arrayGuardadoPost[index]}</p>
          <h1 style={{ height: "10px", backgroundColor: "purple" }}></h1>
          
        </div>
      ))}

      */}

  </>
  );
}


export default PostCompleto;