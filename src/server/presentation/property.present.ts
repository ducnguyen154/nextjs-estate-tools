import { type Property, type Landlord } from "../models";

const genrerateProperty = (item: Property) => {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    address: item.address,
    landlordId: item.landlordId,
  };
};

export function searchPropertiesPresent(
  prpertyResult: { count: number; rows: Property[] },
  offset = 0
) {
  if (!prpertyResult || prpertyResult.count <= 0)
    return { resultSet: {}, results: [] };

  const resultSet = {
    limit: 10,
    offset,
    count: prpertyResult.count,
  };

  const results = prpertyResult.rows.map((item: Property) =>
    genrerateProperty(item)
  );

  return { resultSet, results };
}
