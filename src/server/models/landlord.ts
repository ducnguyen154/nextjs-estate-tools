import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  CreationOptional,
  NonAttribute,
  Association,
} from "sequelize";
import { sequelize } from "../sequelize";
import { Property } from "./Property";

export class Landlord extends Model<
  InferAttributes<Landlord, { omit: "properties" }>,
  InferCreationAttributes<Landlord, { omit: "properties" }>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare email: string;
  declare mobile: string;
  declare note: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare properties?: NonAttribute<Property[]>;
  declare static associations: {
    properties: Association<Landlord, Property>;
  };
}

Landlord.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true,
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
  {
    sequelize,
    modelName: "Landlord",
    tableName: "landlords",
  }
);
