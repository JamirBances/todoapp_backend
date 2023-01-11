const Categories = require("../models/categories.models");
const TodosCategories = require("../models/todos-categories.models")
const Todos = require('../models/todos.models');

class TodoServices {
  static async getAll(){
    try {
      const result = await Todos.findAll();
      return result;
    } catch (error) {
      throw error;      
    }
  }

  static async getById(id){
    try {
      const result = await Todos.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCategories(id){
    try {
      const result = await Todos.findOne({
        where: {id},
        attributes: ["id", "title", "description", "isComplete", "userId"],
        include: {
          model: TodosCategories,
          as: "category",
          include: {
            model: Categories,
            as: "category",
          }
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(todo){
    try {
      const result = await Todos.create(todo);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodoServices;