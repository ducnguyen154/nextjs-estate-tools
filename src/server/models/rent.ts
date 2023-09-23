import { DataTypes, type Sequelize } from "sequelize";
import User from "./user";
import Landlord from "./landlord";
import Property from "./property";

const Rent = (sequelize: Sequelize) => {
  const rent = sequelize.define("rents", {
    userId: {
      type: DataTypes.INTEGER,
      field: "user_id",
      allowNull: false,
    },
    propertyId: {
      type: DataTypes.INTEGER,
      field: "property_id",
      allowNull: false,
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
  });

  const user = User(sequelize);
  const property = Property(sequelize);

  rent.belongsTo(user, { foreignKey: "userId" });
  rent.belongsTo(property, { foreignKey: "propertyId" });

  return rent;
};

export default Rent;
