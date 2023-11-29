import { Landlord } from "./Landlord";
import { Property } from "./Property";
import { User } from "./User";
import { Rent } from "./Rent";

Landlord.hasMany(Property, {
  sourceKey: "id",
  foreignKey: "landlordId",
});

Property.hasMany(Rent, {
  sourceKey: "id",
  foreignKey: "propertyId",
  as: "rents",
});

User.hasMany(Rent, {
  sourceKey: "id",
  foreignKey: "userId",
  as: "rents",
});

export { Landlord, Property, User, Rent };
