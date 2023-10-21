import React from "react";

import PcPropertyListTemplate from "@/components/templates/PropertyTemplate/PcPropertyListTemplate";
import { useQuery } from "react-query";
import { fetchProperties } from "@/adapters/property";

const HousePage: React.FC = () => {
  const {
    data: properties,
    isLoading,
    isError,
  } = useQuery("properties", () => fetchProperties());

  if (isError) return <p>Something wrong...</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!properties) return <p>Not found.</p>;

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="container mx-auto px-4">
      <PcPropertyListTemplate properties={properties} />
    </div>
  );
};

export default HousePage;
