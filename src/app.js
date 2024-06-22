import 'dotenv/config'; 

import express from 'express'
import { pool } from '../db/db.js'
import { PORT } from './config.js'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Conexión a la base de datos establecida correctamente');
    connection.release();
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); 
  }
})();

app.get('/', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM Registro');
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});

app.post('/registro', async (req, res) => {
  const { nombre, correo, numero  } = req.body;
  const registro = { nombre, correo, numero };

  try {
    const connection = await pool.getConnection();
    await connection.query('INSERT INTO Registro SET ?', registro);
    connection.release();
    res.status(200).send('Datos subidos correctamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});


app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
