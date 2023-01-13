const Categories = require("../models/categories.models");
const TodosCategories = require("../models/todos-categories.models");
const Todos = require("../models/todos.models");
const Users = require("../models/users.models");

class TodoServices {
  static async getAll() {
    try {
      const result = await Todos.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Todos.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCategories(id) {
    try {
      const result = await Todos.findOne({
        where: { id },
        attributes: ["id", "title", "description", "isComplete", "userId"],
        include: {
          model: TodosCategories,
          as: "categories",
          attributes: ["id"],
          include: {
            model: Categories,
            as: "category",
            attributes: {
              exclude: ["user_id"],
            },
            include: {
              model: Users,
              as:"author",
            }
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(todo) {
    try {
      const result = await Todos.create(todo);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(field, id) {
    try {
      const result = await Todos.update(field, id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Todos.destroy({ where: { id }/* , cascade: {id} */ });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodoServices;
