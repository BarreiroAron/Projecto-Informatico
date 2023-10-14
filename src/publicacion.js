import React, { useState } from 'react';
import { Link } from 'react-router-dom';

    function PostCompleto({ guardarDatos }) {
      const [Titulo, setTitulo] = useState("");
      const [Autor, setAutor] = useState("");
      const [Post, setPost] = useState("");
    
      function IniciarTodo() {
        guardarDatos(Titulo, Autor, Post);
        setTitulo("");
        setAutor("");
        setPost("");
      }
  return (
    <>
    <div style={{backgroundColor: 'purple', padding: '1px'}}>
    <h1>Posteen</h1>
      <h2><Link to="/" style={{ textDecoration: 'none', color: 'white'}}>Volver al home</Link></h2>
      </div>

      <form>
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
      </form>

  </>
  );
}

export default PostCompleto;
