import { fetchUsers } from "@/adapters/user";
import React from "react";
import { useQuery } from "react-query";
import PcUserListTemplate from "@/components/templates/UserTemplate/PcUserListTemplate";

const UserListPage: React.FC = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery("users", () => fetchUsers());

  if (isError) return <p>Something wrong...</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!users) return <p>Not found.</p>;
  return (
    <div className="container mx-auto px-4">
      <PcUserListTemplate users={users} />
    </div>
  );
};
export default UserListPage;
