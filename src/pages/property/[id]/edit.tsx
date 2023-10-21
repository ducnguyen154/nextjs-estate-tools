import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchPropertyById } from "@/adapters/property";
import PcEditPropertyTemplate from "@/components/templates/PropertyTemplate/PcEditPropertyTemplate";
import { fetchLandlords } from "@/adapters/landlord";

const EditPropertyPage: React.FC = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string);
  const {
    data: property,
    isLoading,
    isError,
  } = useQuery(["property", id], () => fetchPropertyById(id));

  const { data: landlords } = useQuery("landlords", () => fetchLandlords());
  const landlordOptions = landlords.map((landlord: LandlordItem) => ({
    value: landlord.id,
    text: landlord.name,
  }));

  if (isError) return <p>Something wrong...</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!property) return <p>Not found.</p>;

  return (
    <div className="container mx-auto px-4">
      <PcEditPropertyTemplate
        property={property}
        landlordOptions={landlordOptions}
      />
    </div>
  );
};

export default EditPropertyPage;
