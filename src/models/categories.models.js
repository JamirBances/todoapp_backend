//Instancia para la conexión de la db
const db = require("../utils/database");

//Tipos de datos de sequelize | varchar(SQL) --> String
const { DataTypes } = require("sequelize");

//Definir el modelo de categories
//los modelos se definen con una mayúscula

//Parámetros
//Nombre de la tabla
//los atributos de las tablas (objeto)

const Categories = db.define('categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
},
{
  timestamps: false,
});

module.exports = Categories;
