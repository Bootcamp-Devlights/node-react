import Role from "../models/role.js";
import Task from "../models/task.js";
import User from "../models/user.js";
import roleRepository from "./roles.js";

const getAllUsers = async () => {
  const users = await User.findAll();

  return users;
};

const getUserById = async (userId) => {
  const user = await User.findByPk(userId, {
    include: Role
  });

  return user;
};

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    const role = await roleRepository.getRoleById(userData.roleId);

    await user.addRole(role);

    return user;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await User.destroy({
      where: {
        id: userId,
      },
    });

    return user;
  } catch (error) {
    return error;
  }
};

const updateUser = async (userData, userId) => {
  try {
    await User.update(userData, {
      where: {
        id: userId,
      },
    });

    const user = await User.findByPk(userId);

    return user;
  } catch (error) {
    return error;
  }
};

const createUserTask = async (taskData, userId) => {
  const tasks = await Task.create({ ...taskData, UserId: userId });

  return tasks;
};

const getAllUserTasksById = async (userId) => {
  const user = await User.findByPk(userId, {
    include: {
      model: Task,
    }
  });

  return user;
}

const login = async (userData) => {
  const user = await User.findOne({ 
    where: {
      email: userData.email,
      password: userData.password
    }
  })

  if (user) {
    return true;
  } else {
    return false;
  }
}

export default {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  createUserTask,
  getAllUserTasksById,
  login
};
