import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/Contact';

const ContactComponent = ({ contact, remove, change }) => {

  useEffect(() => {
    console.log('Created Contact');
    return () => {
      console.log(`Task: ${contact.name} is going to unmount `);
    };
  }, [contact]);

  // console.log(contact);

  return (
    <tr>
      <td>
        {contact.name}
      </td>
      <td>
        {contact.surname}
      </td>
      <td>
        {contact.age}
      </td>
      <td>
        {contact.email}
      </td>
      <td>
        {contact.phone}
      </td>
      <td>
        <button onClick={() => change(contact)}>{contact.estado ? 'Conected' : 'Disconnected'}</button>
      </td>
      <td onClick={() => remove(contact)}>
        <button>Eliminar</button>
      </td>
    </tr>
  );
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired
}

export default ContactComponent;
