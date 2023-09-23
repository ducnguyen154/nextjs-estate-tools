import React, { useEffect, useState } from "react";

import PcPropertyListTemplate from "@/components/templates/PropertyTemplate/PcPropertyListTemplate";

const HousePage: React.FC = () => {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/property")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.properties);
        setIsLoading(false);
      });
  });

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl mb-4">Property List</h1>
      <PcPropertyListTemplate properties={properties} />
    </div>
  );
};

export default HousePage;
