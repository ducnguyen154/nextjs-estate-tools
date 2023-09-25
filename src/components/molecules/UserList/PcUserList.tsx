import React from "react";
import Link from "next/link";
type Props = {
  users: UserItem[];
};
const PcUserList: React.FC<Props> = ({ users }) => {
  const thClassName = "border border-collapse py-1 px-4 text-sm bg-slate-300";
  const tdClassName = "border border-collapse py-1 px-4";

  const userRows = users.map((user, index) => (
    <tr key={index}>
      <td className={tdClassName}>{user.id}</td>
      <td className={tdClassName}>{user.name}</td>
      <td className={tdClassName}>{user.mobile}</td>
      <td className={tdClassName}>{user.email}</td>
      <td className={tdClassName}>
        <Link className="underline" href={`/user/${user.id}/edit`} title="Edit">
          Edit
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
            <th className={thClassName}>Name</th>
            <th className={thClassName}>Mobile</th>
            <th className={thClassName}>Email</th>
            <th className={thClassName}></th>
          </tr>
        </thead>
        <tbody>{userRows}</tbody>
      </table>
    </>
  );
};
export default PcUserList;
