import userRepository from "../repositories/users.js";
import mailService from "../services/mail.js";

export const getAllUsers = async (req, res) => {
  const users = await userRepository.getAllUsers();

  // TODO: Enviar mail
  mailService.sendMail(user);

  res.status(200).json({ users });
};

export const getUserById = async (req, res) => {
  const user = await userRepository.getUserById(req.params.userId);

  res.json({ user });
}

export const createUser = async (req, res) => {
  try {
    const user = await userRepository.createUser(req.body);

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