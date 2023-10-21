interface PropertyInfo {
  title: string;
  description: string;
  address: string;
  landlordId: number;
}

interface PropertyItem extends PropertyInfo {
  id: number;
}

interface PropertyRow extends PropertyInfo {
  id: number;
  landlordName: string;
  landlordEmail: string;
  landlordMobile: string;
}
