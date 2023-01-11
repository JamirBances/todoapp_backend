const Users = require("../models/users.models");
const Todos = require("../models/todos.models");

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getByName(username) {
    try {
      const result = await Users.findOne({
        where: {
          username,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithTasks(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: {
          exclude: ["password"],
        },
        include: {
          model: Todos,
          as: "task",
          attributes: ["id", "title", "description", "isComplete", "userId"],
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
