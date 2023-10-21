import React from "react";
import { useQuery } from "react-query";
import PcInsertPropertyTemplate from "@/components/templates/PropertyTemplate/PcInsertPropertyTemplate";
import { fetchLandlords } from "@/adapters/landlord";

const InsertPropertyPage: React.FC = () => {
  const {
    data: landlords,
    isError,
    isLoading,
  } = useQuery("landlords", () => fetchLandlords());

  if (isError) return <p>Something wrong...</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!landlords) return <p>Not found.</p>;

  const landlordOptions = landlords.map((landlord: LandlordItem) => ({
    value: landlord.id,
    text: landlord.name,
  }));

  return (
    <div className="container mx-auto px-4">
      <PcInsertPropertyTemplate landlordOptions={landlordOptions} />
    </div>
  );
};

export default InsertPropertyPage;
