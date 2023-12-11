import { Property } from "@/server/models";

export async function fetchProperties() {
  const offset = 0;
  const limit = 10;
  const where = {};
  const { count, rows } = await Property.findAndCountAll({
    attributes: ["id", "title", "description", "address", "landlordId"],
    // include: [Landlord.associations.properties],
    // include: [{ model: Landlord, attributes: ["name", "email", "mobile"] }],
    where,
    offset,
    limit,
    raw: true,
  });

  return { count, rows };
}
export async function getPropertyById() {}
export async function postProperty(property: Property) {
  try {
    const result = await Property.create(property);
    return true;
  } catch (error) {
    throw error;
  }
}
export async function putPrperty() {}
