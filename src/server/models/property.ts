import { DataTypes, type Sequelize } from "sequelize";
import Landlord from "./landlord";

const Property = (sequelize: Sequelize) => {
  const property = sequelize.define("properties", {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    landlordId: {
      type: DataTypes.NUMBER,
      field: "landlord_id",
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
  });

  const landlord = Landlord(sequelize);

  property.belongsTo(landlord, { foreignKey: "landlordId" });

  return property;
};

export default Property;
