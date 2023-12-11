import { type Landlord } from "../models";

const generateLandlordIttem = (item: Landlord) => {
  return {
    id: item.id,
    name: item.name,
    mobile: item.mobile,
    email: item.email,
    note: item.note,
  };
};

export function searchLandlordsPresent(
  landlordResult: { count: number; rows: Landlord[] },
  offset = 0
) {
  if (!landlordResult || landlordResult.count <= 0)
    return { resultSet: {}, results: [] };

  const resultSet = {
    limit: 10,
    offset,
    count: landlordResult.count,
  };

  const results = landlordResult.rows.map((item: Landlord) =>
    generateLandlordIttem(item)
  );

  return { resultSet, results };
}
