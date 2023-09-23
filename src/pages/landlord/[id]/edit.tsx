import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchLandlord } from "@/adapters/landlord";
import PcEditLandlordTemplate from "@/components/templates/LandlordTemplate/PcEditLandlordTemplate";

const EditLandlordPage: React.FC = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string);

  const {
    data: landlord,
    isLoading,
    isError,
  } = useQuery(["landlord", id], () => fetchLandlord(id));

  if (isError) return <p>Something wrong...</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!landlord) return <p>Not found.</p>;

  return (
    <div className="container mx-auto px-4">
      <PcEditLandlordTemplate id={id} landlord={landlord} />
    </div>
  );
};

export default EditLandlordPage;
