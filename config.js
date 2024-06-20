require('dotenv').config();

const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || 'andres123';
const DB_DATABASE = process.env.DB_DATABASE || 'formularioGoogle';

module.exports = {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE
};

/*
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=andres123
DB_DATABASE=formularioGoogle
 */