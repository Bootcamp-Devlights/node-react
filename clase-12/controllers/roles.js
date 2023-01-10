import rolesRepository from "../repositories/roles.js";

export const getAllRoles = async (req, res) => {
  const roles = await rolesRepository.getAllRoles();

  res.status(200).json({ roles });
};

export const getRoleById = async (req, res) => {
  const role = await rolesRepository.getRoleById(req.params.roleId);

  res.json({ user });
}

export const createRole = async (req, res) => {
  try {
    const role = await rolesRepository.createRole(req.body);

    res.json({ role });
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const deleteRole = async (req, res) => {
  try {
    const role = await rolesRepository.deleteRole(req.params.roleId)

    res.json({ role });
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const updateRole = async (req, res) => {
  try {
    const role = await rolesRepository.updateRole(req.body, req.params.roleId);

    res.json({ role })
  } catch (error) {
    res.status(500).json({ error });
  }
}
