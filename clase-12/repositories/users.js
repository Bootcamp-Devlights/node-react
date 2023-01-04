import User from "../models/user.js";

const getAllUsers = async () => {
  const users = await User.findAll();

  return users;
};

const getUserById = async (userId) => {
  const user = await User.findByPk(userId);

  return user;
}

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);

    return user;
  } catch (error) {
    return error;
  }
}

const deleteUser = async (userId) => {
  try {
    const user = await User.destroy({
      where: {
        id: userId
      }
    })

    return user;
  } catch (error) {
    return error;
  }
}

const updateUser = async (userData, userId) => {
  try {
    await User.update(userData, {
      where: {
        id: userId,
      }
    })

    const user = await User.findByPk(userId);

    return user;
  } catch (error) {
    return error;
  }
}

export default {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById
}