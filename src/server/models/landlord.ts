import { DataTypes, type Sequelize } from "sequelize";

const Landlord = (sequelize: Sequelize) => {
  return sequelize.define("landlords", {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    mobile: {
      type: DataTypes.STRING,
    },
    note: {
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
  });
};

export default Landlord;
