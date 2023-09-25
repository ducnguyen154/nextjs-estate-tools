import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchUser } from "@/adapters/user";
import PcEditUserTemplate from "@/components/templates/UserTemplate/PcEditUserTemplate";

const EditUserPage: React.FC = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string);

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery(["user", id], () => fetchUser(id));

  if (isError) return <p>Something wrong...</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!user) return <p>Not found.</p>;

  return (
    <div className="container mx-auto px-4">
      <PcEditUserTemplate id={id} user={user} />
    </div>
  );
};

export default EditUserPage;
