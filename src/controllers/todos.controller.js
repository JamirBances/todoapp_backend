const TodoServices = require("../services/todos.service");

const getAllTodos = async (req, res) => {
  try {
    const result = await TodoServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getTodosById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodoServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getTodosWithCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodoServices.getWithCategories(id);
    res.json({
      message: "Enviando tareas con categorias",
      data: result,
    }); //Defecto se responde status 200
  } catch (error) {
    res.status(404).json({
      error: error.messages,
      details: error.stack,
    });
  }
};

const createTodo = async (req, res) => {
  try {
    const newTodo = req.body;
    const result = await TodoServices.create(newTodo);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await TodoServices.update(field, { where: { id } });
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await TodoServices.delete(id);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

module.exports = {
  getAllTodos,
  getTodosById,
  getTodosWithCategories,
  createTodo,
  updateTodo,
  deleteTodo
};
