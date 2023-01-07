const db = require("../utils/database");
const Users = require("../models/users.models");
const Todos = require("../models/todos.models");

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
    title: "Tarea1",
    description: "Descripción de la tarea1",
    userId: 1,
  },
  {
    title: "Tarea1",
    description: "Descripción de la tarea1111",
    userId: 1,
  },
  {
    title: "Tarea2",
    userId: 2,
  },
  {
    title: "Tarea3",
    description: "Descripción de la tarea333",
    userId: 3,
  },
];

const categories = [];

const todosCategories = [];

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando con el sembrario malicioso.");
    users.forEach((user) => Users.create(user)); //create, findOne, findAll, findByPk, update, destroy
    
    setTimeout(() =>{
      todos.forEach((todo) => Todos.create(todo));
    }, 100) //100 milisegundos
  })
  .catch(error => console.log(error));

