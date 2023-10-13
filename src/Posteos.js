export default function Posteos(props) {

    const { arrayGuardadoTitulo, arrayGuardadoAutor, arrayGuardadoPost } = props;

    return (
      <div>
        {arrayGuardadoTitulo.map((item, index) => (
          <div key={index}>
            <h2>Titulo: {item}</h2>
            <h3>Autor: {arrayGuardadoAutor[index]}</h3>
            <p>{arrayGuardadoPost[index]}</p>
          </div>
        ))}
      </div>
    );
  }
