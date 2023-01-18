const { Router } = require("express");
const {getAllTodos, getTodosById, getTodosWithCategories, createTodo, updateTodo, deleteTodo} = require("../controllers/todos.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/todos", authMiddleware, getAllTodos);

router.get("/todos/:id", authMiddleware, getTodosById);

router.get("/todos/:id/categories/", authMiddleware, getTodosWithCategories)

router.post("/todos", authMiddleware, createTodo);

router.put("/todos/:id", authMiddleware, updateTodo);

router.delete("/todos/:id", authMiddleware, deleteTodo);

module.exports = router;