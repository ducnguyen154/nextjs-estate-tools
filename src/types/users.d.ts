interface UserInfo {
  name: string;
  mobile: string;
  email?: string;
  note?: string;
}

interface UserItem extends UserInfo {
  id: number;
}
