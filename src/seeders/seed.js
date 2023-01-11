const db = require("../utils/database");
const Users = require("../models/users.models");
const Todos = require("../models/todos.models");
const Categories = require("../models/categories.models");
const TodosCategories = require("../models/todos-categories.models");

const users = [
  {
    username: "JamirB", //id: 1
    email: "jamir@example.com",
    password: "12345",
  },
  {
    username: "Pepe", //id: 2
    email: "pepe@example.com",
    password: "12345",
  },
  {
    username: "Jorge", //id: 3
    email: "jorge@example.com",
    password: "12345",
  },
];

const todos = [
  {
    title: "Estudiar node.js",
    description: "Descripción de la tarea1",
    userId: 1,
  },
  {
    title: "Pasear al perro",
    description: "Descripción de la tarea1111",
    userId: 1,
  },
  {
    title: "Lavar platos",
    userId: 2,
  },
  {
    title: "Hacer ejercicios",
    description: "Descripción de la tarea333",
    userId: 3,
  },
];

const categories = [
  {name: "Personal"},         //1
  {name: "Educación"},        //2
  {name: "Salud"},            //3
  {name: "Trabajo"},          //4
  {name: "Hogar"},            //5
  {name: "Cocina"},           //6
  {name: "Deporte"},          //7
  {name: "Ocio"},             //8
  {name: "Financiero"},       //9
  {name: "Entretenimiento"},  //10     
];

const todosCategories = [
  {categoryId: 1 , todoId: 1},
  {categoryId: 2 , todoId: 1},
  {categoryId: 4 , todoId: 1},
  {categoryId: 1 , todoId: 2},
  {categoryId: 7 , todoId: 2},
  {categoryId: 10 , todoId: 2},
  {categoryId: 3 , todoId: 2},
  {categoryId: 5 , todoId: 3},
  {categoryId: 6 , todoId: 3},
  {categoryId: 1 , todoId: 4},
  {categoryId: 3 , todoId: 4},
];

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando con el sembrario malicioso.");
    users.forEach((user) => Users.create(user)); //create, findOne, findAll, findByPk, update, destroy
    
    setTimeout(() =>{
      todos.forEach((todo) => Todos.create(todo));
    }, 100); //100 milisegundos

    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 250);

    setTimeout(() => {
      todosCategories.forEach((tc) => TodosCategories.create(tc));
    }, 400);
  })
  .catch(error => console.log(error));

