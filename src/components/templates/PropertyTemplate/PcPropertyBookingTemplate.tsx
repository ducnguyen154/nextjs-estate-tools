import React from "react";
import PcPropertyRentForm from "@/components/molecules/PropertyBookingForm/PcPropertyRentForm";

type optionType = {
  value: string | number;
  text: string;
};

type PropertyBookingFormProps = {
  properties: optionType[];
  users: optionType[];
};

const PcPropertyBookingTemplate: React.FC<PropertyBookingFormProps> = ({
  properties,
  users,
}) => {
  return (
    <>
      <h1 className="text-xl mb-4">Booking form</h1>
      <div className="mt-8 max-w-md">
        <PcPropertyRentForm properties={properties} users={users} />
      </div>
    </>
  );
};

export default PcPropertyBookingTemplate;
