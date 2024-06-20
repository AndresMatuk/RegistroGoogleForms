require('dotenv').config(); // Cargar variables de entorno desde .env

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL.');
});

app.post('/api/formulario', (req, res) => {
  const { nombre, correo, numero } = req.body;
  const query = 'INSERT INTO Registro (nombre, correo, numero) VALUES (?, ?, ?)';
  
  connection.query(query, [nombre, correo, numero], (error, results, fields) => {
    if (error) throw error;
    res.send('Datos insertados correctamente');
  });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
