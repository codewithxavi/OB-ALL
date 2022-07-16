export class Contact {
  name = '';
  surname = '';
  age = '';
  email = '';
  phone = '';
  estado = true;


  constructor(name, surname, age, email, phone, estado) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
    this.phone = phone;
    this.estado = estado;
  }

}