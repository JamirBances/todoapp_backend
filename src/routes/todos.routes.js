const { Router } = require("express");
const {getAllTodos, getTodosById, getTodosWithCategories, createTodo} = require("../controllers/todos.controller");

const router = Router();

router.get("/todos", getAllTodos);

router.get("/todos/:id", getTodosById);

router.get("/todos/:id/category/", getTodosWithCategories)

router.post("/todos", createTodo);

module.exports = router;