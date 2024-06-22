import 'dotenv/config';

export const PORT = process.env.PORT || 3000

export const MYSQLHOST = process.env.MYSQLHOST || '127.0.0.1'
export const MYSQLUSER = process.env.MYSQLUSER || 'root'
export const MYSQLPASSWORD = process.env.MYSQLPASSWORD || 'andres123'
export const MYSQLDATABASE = process.env.MYSQLDATABASE || 'formularioGoogle'
export const MYSQLPORT = process.env.MYSQLPORT || 3306