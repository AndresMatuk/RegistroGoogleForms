import mysql from 'mysql2/promise';
import { MYSQLHOST, MYSQLDATABASE, MYSQLPASSWORD, MYSQLUSER, MYSQLPORT } from '../src/config.js'

export const pool = mysql.createPool({
  user: MYSQLUSER,
  password: MYSQLPASSWORD,
  host: MYSQLHOST,
  port: MYSQLPORT,
  database: MYSQLDATABASE
})
