const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "biblioteca"
});

db.connect(err => {
  if (err) {
    console.error("Error al conectar a MySQL:", err);
    process.exit(1);
  }
  console.log("Conectado a MySQL");
});


app.get('/biblioteca', (req, res) => {
  const sql = 'SELECT * FROM biblioteca';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Agregar alumno
app.post('/biblioteca', (req, res) => {
  const { nombre, carrera, libro, numero_control } = req.body;
  const sql = 'INSERT INTO biblioteca (nombre, carrera, libro, numero_control) VALUES (?, ?, ?, ?)';
  db.query(sql, [nombre, carrera, libro, numero_control], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Alumno registrado con éxito", id: result.insertId });
  });
});

// Eliminar alumno
app.delete('/biblioteca/:id', (req, res) => {
  const id = parseInt(req.params.id, 10); 
  console.log("ID recibido para DELETE:", id);

  if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });

  const sql = 'DELETE FROM biblioteca WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.affectedRows === 0) return res.status(404).json({ message: "Alumno no encontrado" });
    res.json({ message: "Alumno eliminado con éxito" });
  });
});


app.listen(3000, '0.0.0.0', () => {
  console.log("Servidor corriendo en http://192.168.1.68:3000");
});
