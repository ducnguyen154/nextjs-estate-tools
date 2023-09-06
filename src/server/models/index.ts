import { Sequelize } from "sequelize";
import house from "./house";

const {
  DATABASE = "",
  DB_HOST = "",
  DB_PORT = 3306,
  DB_USERNAME = "",
  DB_PASSWORD = "",
} = process.env;

export const sequelize = new Sequelize(
  DATABASE, // database
  DB_USERNAME, // username
  DB_PASSWORD, // password
  {
    host: DB_HOST,
    port: DB_PORT as number,
    dialect: "mysql",
  }
);

export const House = house(sequelize);

