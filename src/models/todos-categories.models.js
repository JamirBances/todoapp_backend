//Instancia para la conexión de la db
const db = require('../utils/database');

//Tipos de datos de sequelize | varchar(SQL) --> String
const { DataTypes } = require('sequelize');
const Categories = require('./categories.models');
const Todos = require('./todos.models');

//Definir el modelo de todos_categories
//Los modelos se definen con una mayúscula

//Parámetros
//Nombre de la tabla
//Los atributos de la tabla(objeto)

const TodosCategories = db.define('todos_categories', {
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  todoId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'todo_id',
    references: {
      model: Todos,
      key: 'id'
    }
  },
  categoryId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id',
    references: {
      model: Categories,
      key: 'id'
    }
  },
},
{
  timestamps: false,
});

module.exports = TodosCategories;