import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ComponenteEstado = () => {
  const [partida, setPartida] = useState(
    {
      usuario: 'Martín',
      puntos: 0
    }
  );

  useEffect(() => {
    obtenerUsuario()
  }, [partida]);

  const obtenerUsuario = () => {
    return axios.get('https://randomuser.me/api').then((response) => {
      if (response.status === 200) {
        alert(JSON.stringify(response.data))
        console.log(response.data)
      }
      else { throw new Error('Error al obtener el usuario ') }
    }).catch((e) => console.error(`[Error]: ${e}`))
  }

  // let updatedValue = {};
  // updatedValue = { "item1": "juice" };
  // setShopCart(shopCart => ({
  //   ...shopCart,
  //   ...updatedValue
  // }));

  const sumarPartida = () => {
    let puntosUpdate = partida.puntos + 1

    setPartida({
      ...partida,
      puntos: puntosUpdate
    })
  }
  return (
    <div>
      <h1>Hola, {partida.usuario}</h1>
      <h2>
        Puntuación: {partida.puntos}
      </h2>
      <button onClick={sumarPartida}>
        Sumar puntos
      </button>
    </div>
  );
}

export default ComponenteEstado;
