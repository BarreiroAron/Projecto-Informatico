import { Link } from 'react-router-dom';

export default function Posteos(props) {
  const { arrayGuardadoTitulo, arrayGuardadoAutor, arrayGuardadoPost } = props;

  return (
    <div>
      {arrayGuardadoTitulo.map((item, index) => (
        <div key={index}>
          <Link to={`/comentarios/${index}`}>
            <h1>Titulo: {item}</h1>
          </Link>
          <h3>Autor: {arrayGuardadoAutor[index]}</h3>
        </div>
      ))}
    </div>
  );
}
