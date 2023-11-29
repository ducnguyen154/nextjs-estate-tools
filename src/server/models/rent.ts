// import { DataTypes, type Sequelize } from "sequelize";
import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from "sequelize";
import { User } from "./User";
import { Property } from "./Property";
import { sequelize } from "../sequelize";

export class Rent extends Model<
  InferAttributes<Rent>,
  InferCreationAttributes<Rent>
> {
  declare id: CreationOptional<number>;
  declare userId: ForeignKey<User["id"]>;
  declare propertyId: ForeignKey<Property["id"]>;
  declare price: number;
  declare startDate: Date;
  declare endDate: Date;
  declare description: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare user?: NonAttribute<User>;
  declare property?: NonAttribute<Property>;
}

Rent.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    startDate: {
      type: DataTypes.DATEONLY,
      field: "start_date",
    },
    endDate: {
      type: DataTypes.DATEONLY,
      field: "end_date",
    },
    description: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at",
    },
  },
  { sequelize, modelName: "Rent", tableName: "rents" }
);
