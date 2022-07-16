import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/Contacto.class';
import ComponentB from './ComponentB';


function ComponentA ({contacto}) {
  return (
    <div>
    <h2>Name: {contacto.name}</h2>
    <h3>Surname: {contacto.surname}</h3>
    <h3>Email: {contacto.email}</h3>
    <ComponentB estado={true} />
  </div>
  );
};

ComponentA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ComponentA;
