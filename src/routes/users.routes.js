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

const router = Router();

//app.get
//app.post
//app.put
//app.delete

//localhost:8000/users
//controlador

router.get("/users", getAllUsers);

router.get("/users/:id", getUsersById);

router.get("/users/name/:name", getUsersByName);

//Obtener a un usuario con sus tareas
router.get("/users/:id/todos", getUserWithTasks);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
