import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  NonAttribute,
} from "sequelize";
import { sequelize } from "../sequelize";
import { Landlord } from "./Landlord";
import { Rent } from "./Rent";

export class Property extends Model<
  InferAttributes<Property>,
  InferCreationAttributes<Property>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare address: string;
  declare landlordId: ForeignKey<Landlord["id"]>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare landlord?: NonAttribute<Landlord>;
  declare rents?: NonAttribute<Rent[]>;
}

Property.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // landlordId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   field: "landlord_id",
    // },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: "Property",
    tableName: "properties",
  }
);
