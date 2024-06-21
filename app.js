require('dotenv').config(); // Cargar variables de entorno desde .env

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT // Incluyendo el puerto de la base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    process.exit(1); // Finaliza el proceso si hay un error de conexión
  }
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

/*

MYSQLDATABASE=railway
MYSQLHOST=viaduct.proxy.rlwy.net
MYSQLPASSWORD=ZMcSnPHFsYFiggMsEFuynuMsPCPtvRTp
MYSQLPORT=26711
MYSQLUSER=root

MYSQLDATABASE= formularioGoogle
MYSQLHOST= 127.0.0.1
MYSQLPASSWORD= andres123
MYSQLPORT= 3306
MYSQLUSER=root

*/
