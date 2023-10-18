import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Posteos(props) {
  const { arrayGuardadoTitulo, arrayGuardadoAutor, admin } = props;
  const [localStorageData, setLocalStorageData] = useState('') 

  function borrarPost() {
    console.log(localStorageData)
      localStorage.removeItem('arrayGuardadoTitulo');
      localStorage.removeItem('arrayGuardadoAutor');
      setLocalStorageData('');
  }
  return (
    <div>
      {arrayGuardadoTitulo.map((item, index) => (
        <div key={index} style={{textAlign: 'center', border: '2px solid orange', marginTop: '10px'}}>
          <Link to={`/comentarios/${index}`} style={{ textDecoration: 'none', color: 'black'}}>
            <h1>Titulo: {item}</h1>
          </Link>
          <h3>Autor: {arrayGuardadoAutor[index]}</h3>
          {admin && (
          <button onClick={borrarPost} style={{cursor: "pointer", color: 'darkviolet'}}>Borrar</button>
          )}
        </div>
      ))}
    </div>
  );
}
