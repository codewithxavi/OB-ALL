import React, { useState } from 'react';

// Definiendo estilos en constantes:
const loggedStyle = {
  color: 'white'
};

// estilo para usuario no logueado
const unloggedStyle = {
  color: 'tomato',
  fontWeight: 'bold'
}

const GreetingStyled = (props) => {

  // Generamos un estado para el componente
  // y así controlar si el usuario está o no logueado
  const [logged, setLogged] = useState(false);

  const greetingUser = () => {
    return (<h1>Hola, {props.name}</h1>);

  }

  const pleaseLogin = () => {
    return (<p>Please Login</p>);
  }


  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ?
        greetingUser()
        :
        pleaseLogin()
      }
      <button onClick={() => {
        console.log("Botón pulsado");
        setLogged(!logged);
      }}>
        {logged ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default GreetingStyled;
