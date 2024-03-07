import connection from "../database/connection.js";

import { DataTypes } from "sequelize";

const Users = connection.define("users", {
  id: {  type: DataTypes.INTEGER, primaryKey: true },
  username: { type: DataTypes.STRING },
  lastname: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },

});

export default Users;
