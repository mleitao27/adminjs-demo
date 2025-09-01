import { Sequelize } from "sequelize";

const sequelize = new Sequelize("adminjs", "root", "Password123#", {
  host: "mysql",
  dialect: "mysql",
});

export default sequelize;