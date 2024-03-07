import BlogModel from "../models/BlogModels.js";

//GetAllVlogs
export const getAllUsers = async (req, res) => {
  try {
    const blog = await BlogModel.findAll();
    res.json(blog);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//GetVlogs
export const getVlogs = async (req, res) => {
  try {
    const blog = await BlogModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(blog[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

//CreateVlogs
export const createBlog = async (req, res) => {
  try {
    await BlogModel.create(req.body);
    res.json({
      message: "added severity!",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//UpdateVlogs
export const updateBlog = async (req, res) => {
  try {
    await BlogModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.josn({ status: "update is successful" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//DeleteVlogs
export const deleteBlog = async (req, res) => {
  try {
    await Users.destroy({
      where: { id: req.params.id },
    });
    res.josn({ status: "delete is successful" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
