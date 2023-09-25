import React from "react";
import Link from "next/link";

import PcUserList from "@/components/molecules/UserList/PcUserList";

type Props = {
  users: UserItem[];
};

const PcUserListTemplate: React.FC<Props> = ({ users }) => {
  return (
    <>
      <h1 className="text-xl mb-4">User List</h1>
      <Link href="/user/insert" className="underline">
        Insert User
      </Link>
      <div className="mt-8 max-w-md">
        <PcUserList users={users} />
      </div>
    </>
  );
};
export default PcUserListTemplate;
