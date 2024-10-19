// Paso 4: Modelo de usuario (src/models/userModel.js)
const pool = require('../config/database');
const bcrypt = require('bcrypt');

class User {
  // Método para crear un nuevo usuario
  static async create(username, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );
    return result.insertId;
  }

  // Método para buscar un usuario por email
  static async findByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  }
}

module.exports = User;