import React from "react";
import Link from "next/link";

type PcLandlordListProps = {
  landlords: LandlordItem[];
};

const PcLandlordList: React.FC<PcLandlordListProps> = ({ landlords }) => {
  const thClassName = "border border-collapse py-1 px-4 text-sm bg-slate-300";
  const tdClassName = "border border-collapse py-1 px-4";

  const landlordRows = landlords.map((landlord, index) => (
    <tr key={index}>
      <td className={tdClassName}>{landlord.id}</td>
      <td className={tdClassName}>{landlord.name}</td>
      <td className={tdClassName}>{landlord.mobile}</td>
      <td className={tdClassName}>{landlord.email}</td>
      <td className={tdClassName}>
        <Link
          className="underline"
          href={`/landlord/${landlord.id}/edit`}
          title="Edit"
        >
          Edit
        </Link>
        {/* <Link
          className="ml-2 underline"
          href={`/landlord/${landlord.id}/booking`}
          title="Booking"
        >
          Booking
        </Link> */}
      </td>
    </tr>
  ));
  return (
    <>
      <table className="table-auto table">
        <thead>
          <tr>
            <th className={thClassName}>Id</th>
            <th className={thClassName}>Name</th>
            <th className={thClassName}>Mobile</th>
            <th className={thClassName}>Email</th>
            <th className={thClassName}></th>
          </tr>
        </thead>
        <tbody>{landlordRows}</tbody>
      </table>
    </>
  );
};

export default PcLandlordList;
