import axios from "axios";

/**
 * Fetch properties
 * @returns
 */
export async function fetchProperties(): Promise<PropertyItem[]> {
  const { data } = await axios.get("/api/property");

  return data.properties;
}

/**
 * Fetch property by id
 * @param id
 * @returns
 */
export async function fetchPropertyById(id: number): Promise<PropertyItem> {
  const { data } = await axios.get(`/api/property/${id}`);

  return data.property;
}

export async function postProperty(property: PropertyInfo) {
  const { data } = await axios.post("/api/property", { property });

  return data;
}

type PutPropertyParam = {
  id: number;
  property: PropertyInfo;
};
export async function putProperty({ id, property }: PutPropertyParam) {
  const { data } = await axios.put(`/api/property/${id}`, { property });

  return data;
}
