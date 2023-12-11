import axios from "axios";

export const FETCH_LANDLORDS_KEY = ["fetchLandlords"];

/**
 * Get list of landlord
 * @returns
 */
export async function fetchLandlords() {
  const { data } = await axios.get("/api/landlord");

  return data;
}

/**
 * Get landlord detail
 * @param id
 * @returns
 */
export async function fetchLandlord(id: number) {
  const { data } = await axios.get(`/api/landlord/${id}`);

  return data.landlord;
}

/**
 * Insert a landlord
 * @param landlord
 * @returns
 */
export async function postLandlord(landlord: LandlordItem) {
  const { data } = await axios.post("/api/landlord", { landlord });

  return data;
}

interface PutLandlord {
  id: number;
  landlord: LandlordItem;
}
export async function putLandlord({ id, landlord }: PutLandlord) {
  const { data } = await axios.put(`/api/landlord/${id}`, { landlord });

  return data;
}
