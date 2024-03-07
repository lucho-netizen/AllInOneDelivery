import Users from "../models/userModels.js";

//GetAllVlogs
export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//GetVlogs
export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(users[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//CreateVlogs
export const createUser = async (req, res) => {
  try {
    await Users.create(req.body);
    req.json({ status: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//UpdateVlogs
export const updateUser = async (req, res) => {
  try {
    await Users.update(req.body, {
      where: { id: req.params.id },
    });
    res.josn({ status: "update is successful" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//DeleteVlogs
export const deleteUser = async (req, res) => {
  try {
    await Users.destroy({
      where: { id: req.params.id },
    });
    res.josn({ status: "delete is successful" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
