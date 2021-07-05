var express = require('express');
var router = express.Router();

// Interface de Usuarios
function User(nombre, apellido, edad, redes, frase) {
  this.nombre = nombre,
  this.apellido = apellido,
  this.edad = edad,
  this.redes = redes,
  this.frase = frase
}

let user1 = new User(
  'Nico',
  'Suarez',
  12,
  ['@nico.suarez'],
  'holasoynicoooo paz'
);

let user2 = new User(
  'Dani',
  'Montilla',
  29,
  [], // vacio para probar renderizado condicional
  'Otra frase'
);

const users = [];
users.push(user1, user2);


/* Visual */
const getUsers = (req, res, next) => {
  // res.send('USERS');
  res.render('partials/users', { title: "USUARIOS", users});
  // next() es para que se ejecute el codigo anterior antes que esta sentencia.
};

/* GET users listing. */
router.get('/', getUsers);

module.exports = router;
