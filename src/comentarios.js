import React, { useState } from 'react';
import { Link } from 'react-router-dom';

    function Comentarios() {
      const [Autor, setAutor] = useState("");
      const [Comentario, setComentario] = useState("");
    
      function IniciarTodo() {
        
        setAutor("");
        setComentario("");
      }
  return (
    <>
      <form>
        <input
          placeholder="Autor"
          type="text"
          value={Autor}
          onChange={(ev) => setAutor(ev.target.value)}
        ></input>

        <textarea
          placeholder="Comentario"
          type="text"
          value={Comentario}
          onChange={(ev) => setComentario(ev.target.value)}
          style={{ height: "200px", width: "100%" }}
        ></textarea>


        <button type="button" onClick={IniciarTodo}>
          Enviar
        </button>
      </form>

  </>
  );
}

export default Comentarios;
