const db = require('../Database/db.js');

function Login(user, callback) {
  console.log("ENTRO EN FUNCION LOGIN USER");
  const sql = 'SELECT * FROM users WHERE email = ? AND contrasena = ?';
  db.query(sql, [user.email, user.contrasena], (err, result) => {
    if (err) {
      return callback(err);
    }
    if (result.length === 0) {
      // Si no se encuentra el usuario, devolver un error
      const error = new Error('Inicio de sesión fallido. Por favor, compruebe su correo y contraseña');
      return callback(error);
    }
    // Si se encuentra el usuario, devolver el usuario
    return callback(null, result[0]);
  });
}

module.exports = { Login };