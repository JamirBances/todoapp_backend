//Instancia para la conexión de la db
const db = require("../utils/database");

//Tipos de datos de sequelize | varchar(SQL) --> String
const { DataTypes } = require("sequelize");
const Users = require("./users.models");

//Definir el modelo de todos
//Los modelos se definen con una mayúscula

//Parámetros
//Nombre de la tabla
//Los atributos de la tabla

const Todos = db.define("todos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_complete',
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: Users,
      key: "id",
    },
  },
});

module.exports = Todos;