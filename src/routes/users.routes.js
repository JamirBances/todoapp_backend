const { Router } = require("express");
const {
  getAllUsers,
  getUsersById,
  getUsersByName,
  getUserWithTasks,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/users.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

//app.get
//app.post
//app.put
//app.delete

//localhost:8000/users
//controlador

router.get("/users", authMiddleware, getAllUsers);

router.get("/users/:id", authMiddleware, getUsersById);

router.get("/users/name/:name", authMiddleware, getUsersByName);

//Obtener a un usuario con sus tareas
router.get("/users/:id/todos", getUserWithTasks);

router.post("/users", createUser);

router.put("/users/:id", authMiddleware, updateUser);

router.delete("/users/:id", authMiddleware, deleteUser);

module.exports = router;
