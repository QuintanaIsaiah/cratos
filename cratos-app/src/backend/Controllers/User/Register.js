const db = require('../Database/db.js');

function Register(user, callback) {
  const sql = 'INSERT INTO users SET ?';
  db.query(sql, user, (err, result) => {
    if (err) {
      return callback(err);
    }
    return callback(null, result);
  });
}

module.exports = { Register };