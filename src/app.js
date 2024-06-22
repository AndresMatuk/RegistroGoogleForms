import express from 'express'
import { pool } from '../db/db.js'
import { PORT } from './config.js'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

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
    res.json(registro);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});


app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
