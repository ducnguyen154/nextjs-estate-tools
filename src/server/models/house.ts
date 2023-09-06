import { DataTypes, type Sequelize } from "sequelize";

const house = (sequelize: Sequelize) => {
  return sequelize.define("houses", {
    title: {
      type: DataTypes.STRING,
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
  });
};

export default house;

