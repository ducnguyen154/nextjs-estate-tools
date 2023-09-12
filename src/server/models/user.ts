import { DataTypes, type Sequelize } from "sequelize";

const User = (sequelize: Sequelize) => {
  return sequelize.define("users", {
    name: {
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

export default User;
