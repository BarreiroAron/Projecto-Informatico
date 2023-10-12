import React, { useState } from "react";


function Comentarios() {
    const [Autor, setAutor] = useState("");
    const [arrayGuardadoAutor, setArrayGuardadoAutor] = useState([]);
  
    function GuardarAutor() {
      if (Autor) {
        setArrayGuardadoAutor([...arrayGuardadoAutor, Autor]);
        setAutor("");
      }
    }



      const [Resp, setResp] = useState("");
      const [arrayGuardadoResp, setArrayGuardadoResp] = useState([]);
    
      function GuardarResp() {
        if (Resp) {
          setArrayGuardadoResp([...arrayGuardadoResp, Resp]);
          setResp("");
        }
      }


      function IniciarTodo() {
        GuardarAutor()
        GuardarResp()
      }



  return (
    <>
    <div>
        <input
          placeholder="Autor"
          type="text"
          value={Autor}
          onChange={(ev) => setAutor(ev.target.value)}
        ></input>


        <textarea
          placeholder="Respuesta"
          type="text"
          value={Resp}
          onChange={(ev) => setResp(ev.target.value)}
          style={{ height: "50px", width: "50%" }}
        ></textarea>


        <button type="button" onClick={IniciarTodo}>
          Enviar
        </button>
      </div>
  </>
  );
}

export default Comentarios;