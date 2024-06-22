import mysql from 'mysql2/promise';
import { MYSQLHOST, MYSQLDATABASE, MYSQLPASSWORD, MYSQLUSER, MYSQLPORT } from './config.js'

export const pool = mysql.createPool({
  user: MYSQLUSER,
  password: MYSQLPASSWORD,
  host: MYSQLHOST,
  port: MYSQLPORT,
  database: MYSQLDATABASE
})





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
