import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin(props) {
  const navegar = useNavigate();
  const { setAdmin } = props;
  const [pass, setPass] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (pass === 'MurderDrones') {
      setAdmin(true);
      navegar('/');
    }
  }

  return (
    <>
      <h1 style={{textAlign: 'center', marginTop: '100px'}}>Pon la contraseña para entrar en modo Admin</h1>
      <form onSubmit={handleSubmit} style={{textAlign: 'center', marginTop: '200px'}}>
        <input
          onChange={e => setPass(e.target.value)}
          type="password"
          value={pass}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default Admin;