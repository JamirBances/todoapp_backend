//Instancia para la conexión de la db
const db = require('../utils/database');

//Tipos de datos de sequelize | varchar(SQL) --> String
const {DataTypes} = require('sequelize');
const { password } = require('pg/lib/defaults');

//Definir el modelo de usuarios
//los modelos se definen con una mayúscula

//Parámetros
//Nombre de la tabla
//Los atributos de las tablas (objeto)

const Users = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  timestamps: false,
});

module.exports = Users;