import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function Comentarios(props) {
  const { arrayGuardadoTitulo, arrayGuardadoAutor, arrayGuardadoPost } = props;
  const { postIndex } = useParams();

  const titulo = arrayGuardadoTitulo[postIndex];
  const autor = arrayGuardadoAutor[postIndex];
  const post = arrayGuardadoPost[postIndex];

  const [Autor, setAutor] = useState("");
  const [Comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState([]);

  // Cargar los comentarios almacenados en el almacenamiento local al cargar la página.
  useEffect(() => {
    const comentariosGuardados = JSON.parse(localStorage.getItem(`comentarios_${postIndex}`)) || [];
    setComentarios(comentariosGuardados);
  }, [postIndex]);

  function IniciarTodo() {
    const nuevoComentario = {
      autor: Autor,
      comentario: Comentario,
    };
    const nuevosComentarios = [...comentarios, nuevoComentario];
    setComentarios(nuevosComentarios);

    // Guardar los comentarios en el almacenamiento local.
    localStorage.setItem(`comentarios_${postIndex}`, JSON.stringify(nuevosComentarios));

    setAutor("");
    setComentario("");
  }

  // Renderiza los comentarios
  const comentariosRenderizados = comentarios.map((comentario, index) => (
    <div key={index}>
      <h3>Autor: {comentario.autor}</h3>
    <p>Comentario: {comentario.comentario}</p>
    </div>
  ));

  return (
    <>
      <div>
        <h1>Titulo: {titulo}</h1>
        <h3>Autor: {autor}</h3>
        <p>
        Post:
        <ReactMarkdown>{post}</ReactMarkdown>
        </p>
      </div>

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
          Enviar Comentario
        </button>
      </form>
      <div>
        {comentariosRenderizados}
      </div>
    </>
  );
}

export default Comentarios;
