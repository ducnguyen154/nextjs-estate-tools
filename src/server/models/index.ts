import { Sequelize } from "sequelize";
import Property from "./property";
import Landlord from "./landlord";
import User from "./user";
import Rent from "./rent";

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

export const property = Property(sequelize);
export const landlord = Landlord(sequelize);
export const user = User(sequelize);
export const rent = Rent(sequelize);
