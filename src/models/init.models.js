//Vamos a importar todos nuestros modelos creados
const Users = require('./users.models');
const Todos = require('./todos.models');
const Categories = require('./categories.models');
const TodosCategories = require('./todos-categories.models');

const initModels = () => {
  //Vamos a crear las relaciones
  //hasOne --> tiene uno solo
  //hasMany --> tiene muchos
  //belongsTo --> pertenece a
  Todos.belongsTo(Users, {as: 'author', foreignKey: 'user_id'});
  Users.hasMany(Todos, {as: 'task', foreignKey: 'user_id'});

  //Relación de Muchos a Muchos categorias y tareas
  TodosCategories.belongsTo(Todos, {as: 'task', foreignKey: 'todo_id'});
  Todos.hasMany(TodosCategories, {as: 'categories', foreignKey: 'todo_id'});

  TodosCategories.belongsTo(Categories, {as: 'category', foreignKey: 'category_id'});
  Categories.hasMany(TodosCategories, {as: 'task', foreignKey: 'category_id'});

  Categories.belongsTo(Users, {as: "author", foreignKey: "user_id"});
  Users.hasMany(Categories, {as: "category", foreignKey: "user_id"});
}

module.exports = initModels;