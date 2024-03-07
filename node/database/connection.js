import { Sequelize } from "sequelize";

const connection = new Sequelize("allione", "root", "Rolex.b1", {
  host: "127.0.0.1",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

export default connection;
