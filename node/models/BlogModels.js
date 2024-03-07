import connection from "../database/connection.js";

import { DataTypes } from "sequelize";

const BlogModel = connection.define("blog", {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

export default BlogModel;
