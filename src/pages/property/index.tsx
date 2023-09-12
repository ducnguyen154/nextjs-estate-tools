import React from "react";

import PcPropertyListTemplate from "@/components/templates/PropertyTemplate/PcPropertyListTemplate";

const HousePage: React.FC = () => {
  const properties = [
    {
      id: 1,
      title: "sample1",
      address: "sample address1",
      description: "",
      landlordId: 1,
    },
  ];
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl mb-4">Property List</h1>
      <PcPropertyListTemplate properties={properties} />
    </div>
  );
};

export default HousePage;
