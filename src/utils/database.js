const { Sequelize } = require('sequelize');
require("dotenv").config();

//Crear una instancia con parametros de configuración de nuestra base de datos
//Un objeto de configuración --> credenciales de mi base de datos
const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  host: process.env.DB_HOST, //127.0.0.1
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres', //la base de datos que estamos usando
  logging: false
});

module.exports = db;
