import React from "react";
import Link from "next/link";

type PropertyType = {
  id: number;
  title: string;
  description: string;
  address: string;
  landlordId: number;
};

type PropertyPropsType = {
  properties?: PropertyType[];
};

const PcPropertyListTemplate: React.FC<PropertyPropsType> = ({
  properties = [],
}) => {
  const thClassName = "border border-collapse py-1 px-4 text-sm bg-slate-300";
  const tdClassName = "border border-collapse py-1 px-4";

  const createPropertyRows = properties.map((property) => (
    <tr key={property.id}>
      <td className={tdClassName}>{property.id}</td>
      <td className={tdClassName}>{property.title}</td>
      <td className={tdClassName}>{property.address}</td>
      <td className={tdClassName}>{property.description}</td>
      <td className={tdClassName}>{property.landlordId}</td>
      <td className={tdClassName}>
        <Link
          className=" underline"
          href={`/property/${property.id}/edit`}
          title="Edit"
        >
          Edit
        </Link>
        <Link
          className="ml-2 underline"
          href={`/property/${property.id}/booking`}
          title="Booking"
        >
          Booking
        </Link>
      </td>
    </tr>
  ));
  return (
    <>
      <table className="table-auto table">
        <thead>
          <tr>
            <th className={thClassName}>Id</th>
            <th className={thClassName}>Title</th>
            <th className={thClassName}>Address</th>
            <th className={thClassName}>Description</th>
            <th className={thClassName}>Landlord</th>
            <th className={thClassName}>Action</th>
          </tr>
        </thead>
        {createPropertyRows && <tbody>{createPropertyRows}</tbody>}
      </table>
    </>
  );
};

export default PcPropertyListTemplate;
