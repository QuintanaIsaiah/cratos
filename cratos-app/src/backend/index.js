const express = require('express');

const cors = require('cors');
// const { User } = require('./Users/Models/User.js');
const bodyParser = require('body-parser');

//CONTROLLERS
const { Register } = require('./Controllers/User/Register');
const { Login } = require('./Controllers/User/Login');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Muestro lo que llega por consola
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  console.log('Body:', req.body);
  next();
});

// USER REGISTER
app.post('/api/register', (req, res) => {

  const newUser = {
    nombre: req.body.nombre,
    apellido1: req.body.apellido1,
    apellido2: req.body.apellido2,
    email: req.body.email,
    contrasena: req.body.password
  }

  Register(newUser, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al crear el usuario');
    } else {
      res.status(200).send('Usuario registrado correctamente');
    }
  });
});

// USER LOGIN

app.post('/api/login', (req, res) => {

  const userLogin = {
    email: req.body.email,
    contrasena: req.body.password
  }

  Login(userLogin, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al iniciar sesión');
    } else {
      res.send('Usuario logueado correctamente');
    }
  });
});

app.listen(2000, () => {
  console.log('Servidor escuchando en el puerto 2000');
});