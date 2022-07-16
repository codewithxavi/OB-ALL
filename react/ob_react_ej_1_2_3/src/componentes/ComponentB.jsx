import React, {useState} from 'react';
import PropTypes from 'prop-types';

const ComponentB = ({ estado }) => {

  const [conectado, setConectado] = useState(estado);

  // Si no conectado Contacto No Disponible

  return (
    <div>
      <button onClick={() => setConectado(!conectado)}>
        {conectado ? 'Desconectar' : 'Conectar'}
      </button>
    </div>
  );

  
};

ComponentB.propTypes = {
  contact: PropTypes.bool
}

export default ComponentB;


