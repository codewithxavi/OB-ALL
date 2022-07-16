import React, { useState } from 'react';
import { Contact } from '../models/Contact';
import ContactComponent from './contact';
import ContactForm from './contactForm';

// En este ejercicio de React JS deberéis crear una lista, esta lista tendrá dentro distintos contactos y deberá cumplir con las siguientes funcionalidades:
// Mostrar contacto.
// Crear contacto.
// Eliminar contacto.
// Cambiar el estado del contacto entre Conectado y Desconectado.


const ContactListComponent = () => {

  const contact1 = new Contact('Xavi1', 'Junior', '25', 'jaob@gmail.com', '666666666', true)
  const contact2 = new Contact('Xavi2', 'MidSenior', '30', 'jaob2@gmail.com', '666666666', false)
  const contact3 = new Contact('Xavi3', 'Senior', '35', 'jaob3@gmail.com', '666666666', true)

  // estado del componente
  const [contacts, setContacts] = useState([contact1, contact2, contact3]);


  const addContact = (contact) => {
    console.log(`Add this contact:', ${contact.name}`);
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  const removeContact = (contact) => {
    console.log(`Delete this contact: ${contact.name}`);
    const tempContacts = [...contacts];
    const index = contacts.indexOf(contact);
    tempContacts.splice(index, 1);
    setContacts(tempContacts)
  }

  const changeStatus = (contact) => {
    console.log(`Update estado: ${contact.name}`);
    const tempContact = [...contacts];
    const index = contacts.indexOf(contact);
    tempContact[index].estado = !tempContact[index].estado;
    setContacts(tempContact);

  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Surname</th>
            <th scope='col'>Age</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            console.log(contact, index)
            return (
              <ContactComponent
                key={index}
                contact={contact}
                remove={removeContact}
                change={changeStatus}
              >

              </ContactComponent>
            )
          })}
        </tbody>

      </table>

      <ContactForm add={addContact}></ContactForm>
    </div>
  );
}

export default ContactListComponent;
