import { Link } from 'react-router-dom';

export default function Posteos(props) {
  const { arrayGuardadoTitulo, arrayGuardadoAutor, admin, borrar } = props;

  return (
    <div>
      {arrayGuardadoTitulo.map((item, index) => (
        <div key={index} style={{textAlign: 'center', border: '2px solid orange', marginTop: '10px'}}>
          <Link to={`/comentarios/${index}`} style={{ textDecoration: 'none', color: 'black'}}>
            <h1>Titulo: {item}</h1>
          </Link>
          <h3>Autor: {arrayGuardadoAutor[index]}</h3>
          {admin && (
          <button onClick={() => borrar(index)}>Borrar</button>
          )}
        </div>
      ))}
    </div>
  );
}