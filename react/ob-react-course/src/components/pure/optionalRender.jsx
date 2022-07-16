import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 150;

// Definiendo estilos en constantes:
const loggedStyle = {
  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  color: 'white'
};

// estilo para usuario no logueado
const unloggedStyle = {
  backgroundColor: 'red',
  color: 'white',
  fontWeight: 'bold'
}


// Login Logout Buttons
const LoginButton = ({ loginAction, propStyle }) => {
  return <button style={propStyle} onClick={loginAction}>Login</button>
}

const LogoutButton = ({ logoutAction, propStyle }) => {
  return <button style={propStyle} onClick={logoutAction}>Logout</button>
}

// (Expresión true) && expresión => se renderiza la expresión
// (Expresión false) && expresión => no se renderiza la expresión


const OptionalRender = () => {

  const [access, setAccess] = useState(false);
  const [message, setMessage] = useState(0);


  // const updateAccess = () => {
  //   setAccess(!access);
  // }

  const loginAction = () => {
    setAccess(true)
  }

  const logoutAction = () => {
    setAccess(false)
  }

  let optionalButton;

  // if (access) {
  //   optionalButton = <button onClick={updateAccess}>Logout</button>
  // } else {
  //   optionalButton = <button onClick={updateAccess}>Login</button>
  // }

  if (access) {
    optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
  } else {
    optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
  }

  // Unread messages
  let addMessages = () => {
    setMessage(message + 1)
    
  }



  return (
    <div>
      {/* Optional Button */}
      {optionalButton}

      {/* Messages unread  */}
      {/* {message > 0 && message === 1 && <p>You have {message} new message...</p>}
      {message > 1 && <p>You have {message} new messages...</p>}
      {message === 0 && <p>There are no new messages</p>} */}

      {/* Ternary operator */}
      {access ? (
        <div>
          {message > 0 ?
            <p>You have {message} new message{message > 1 ? 's' : null}...</p> :
            <p>There are no new messages</p>
          }
          <button onClick={addMessages}> {message === 0 ? 'Add your first message' : 'Add new message'}</button>
        </div>) : null}



    </div>
  );
}

export default OptionalRender;
