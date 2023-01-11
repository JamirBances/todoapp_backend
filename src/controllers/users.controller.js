const UserServices = require("../services/user.service");

const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error.message);
  }
}

const getUsersById = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error.message);    
  }
}

const getUsersByName = async (req, res) => {
  try {
    const {name} = req.params;
    const result = await UserServices.getByName(name);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json(error.message);    
  }
}

const getUserWithTasks = async (req, res) => {
  try {
    const {id} = req.params;  
    const result = await UserServices.getWithTasks(id);
    res.json(result); //Defecto se responde status 200
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(404).json(error.message);    
  }
}

const updateUser = async (req, res) => {
  res.json({message: "Actualizando un usuario."});
}

const deleteUser = async (req, res) => {
  res.json({message: "Eliminando un usuario."});
}


module.exports = {
  getAllUsers,
  getUsersById,
  getUsersByName,
  getUserWithTasks,
  createUser,
  updateUser,
  deleteUser,
};