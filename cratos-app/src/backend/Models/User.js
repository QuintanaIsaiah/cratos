class User {
  constructor(nombre, apellido1, apellido2, email, password){
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.email = email;
    this.password = password;
  }
  get nombre() {
    return this.nombre;
  }
  set nombre(value) {
    this.nombre = value;
  }

  get apellido1() {
    return this.apellido1;
  }
  set apellido1(value) {
    this.apellido1 = value;
  }

  get apellido2() {
    return this.apellido2;
  }
  set apellido2(value) {
    this.apellido2 = value;
  }

  get email() {
    return this.email;
  }
  set email(value) {
    this.email = value;
  }

  get password() {
    return this.password;
  }
  set password(value) {
    this.password = value;
  }
}

module.exports = {User};
