export class Contacto {
  name = '';
  surname = '';
  email = '';
  connected = true;

  constructor(name, surname, email, connected) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.connected = connected;
  }

}