import axios from "axios";

/**
 * Fetch user list
 * @returns
 */
export async function fetchUsers() {
  const { data } = await axios.get("/api/user");

  return data.users;
}

/**
 * Fetch a user by user id
 * @param id
 * @returns
 */
export async function fetchUser(id: number) {
  const { data } = await axios.get(`/api/user/${id}`);
  console.log(data);

  return data.user;
}

/**
 * Post new user
 * @param user
 * @returns
 */
export async function postUser(user: UserInfo) {
  const { data } = await axios.post("/api/user", { user });

  return data;
}

type PutUser = {
  id: number;
  user: UserInfo;
};
/**
 * Put user data
 * @param param0
 * @returns
 */
export async function putUser({ id, user }: PutUser) {
  const { data } = await axios.put(`/api/user/${id}`, { user });

  return data;
}
