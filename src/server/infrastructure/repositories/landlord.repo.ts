import { Landlord } from "@/server/models";

export async function searchLandlords() {
  try {
    // TODO repare search condition
    const { count, rows } = await Landlord.findAndCountAll();
    return { count, rows };
  } catch (error) {
    throw error;
  }
}

export async function postLandlord(landlord: Landlord) {
  try {
    const insertData = {
      name: landlord.name,
      mobile: landlord.mobile,
      email: landlord.email,
      note: landlord.note,
    };
    await Landlord.create(insertData);
    return true;
  } catch (error) {
    throw error;
  }
}

export async function findLandlordById(id: string) {
  try {
    const landlord = await Landlord.findByPk(id);

    return { landlord };
  } catch (error) {
    throw error;
  }
}

export async function putLandlord(id: string, landlord: Landlord) {
  try {
    await Landlord.update(landlord, { where: { id } });
    return true;
  } catch (error) {
    throw error;
  }
}
