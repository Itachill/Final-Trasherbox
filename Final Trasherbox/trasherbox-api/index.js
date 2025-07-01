const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Base de datos
const db = new sqlite3.Database("./trasherbox.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT
    )
  `);
});

// Ruta para registrar un usuario (temporal para pruebas)
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  db.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [email, password], function (err) {
    if (err) return res.status(400).json({ error: "El correo ya existe" });
    res.json({ id: this.lastID, email });
  });
});

// Ruta de login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  db.get(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password], (err, row) => {
    if (row) {
      res.json({ success: true, user: { id: row.id, email: row.email } });
    } else {
      res.status(401).json({ success: false, error: "Credenciales incorrectas" });
    }
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`API trasherbox corriendo en http://localhost:${PORT}`);
});
