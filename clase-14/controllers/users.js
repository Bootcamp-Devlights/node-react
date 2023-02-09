import userRepository from "../repositories/users.js";
import { sendMail } from "../services/mail.js";

export const getAllUsers = async (req, res) => {
  const users = await userRepository.getAllUsers();

  res.status(200).json({ users });
};

export const getUserById = async (req, res) => {
  const user = await userRepository.getUserById(req.params.userId);

  res.json({ user });
}

export const createUser = async (req, res) => {
  try {
    const user = await userRepository.createUser(req.body);

    // await sendMail(user.email, user.name);

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = userRepository.deleteUser(req.params.userId)

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const updateUser = async (req, res) => {
  try {
    const user = await userRepository.updateUser(req.body, req.params.userId);

    res.json({ user })
  } catch (error) {
    res.status(500).json({ error });
  }
}

export const createUserTask = async (req, res) => {
  try {
    const tasks = await userRepository.createUserTask(req.body, req.params.userId)

    res.json({ tasks })
  } catch (error) {
    res.status(500).json({ error });
  }
}

export const getAllTasksByUserId = async (req, res) => {
  try {
    const tasks = await userRepository.getAllUserTasksById(req.params.userId)

    res.json({ tasks })
  } catch (error) {
    res.status(500).json({ error });
  }
}

export const login = async (req, res) => {
  try {
    const user = await userRepository.login(req.body);

    if (user) {
      res.json("Ingreso exitoso")
    } else {
      res.status(401).json("Ingreso no autorizado");
    }
  } catch (error)  {
    res.status(401).json("Ingreso no autorizado");
  }
}