import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import PcPropertyBookingTempalte from "@/components/templates/PropertyTemplate/PcPropertyBookingTemplate";

const PropertyBookingPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const bookingData = {
    propertyid: id,
  };
  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/property")
      .then((res) => {
        const properties = res.json();
        // return properties.map((item) => ({}));
        return properties;
      })
      .then((data) => setProperties(data));

    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });
  return (
    <div className="container mx-auto px-4">
      <PcPropertyBookingTempalte properties={[]} users={[]} />
    </div>
  );
};

export default PropertyBookingPage;
