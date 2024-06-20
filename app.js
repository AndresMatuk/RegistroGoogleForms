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
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT  // Agregar el puerto a la conexión
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
