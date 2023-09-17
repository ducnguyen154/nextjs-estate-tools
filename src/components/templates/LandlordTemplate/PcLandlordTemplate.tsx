import PcLandlordForm from "@/components/molecules/LandlordForm/PcLandlordForm";
import React from "react";

type LandlordProps = {
  id: number;
  name?: string;
  mobile?: string;
  email?: string;
  notes?: string;
};
type LandlordFormProps = {
  data?: LandlordProps;
};

const PcLandlordFormTemplate: React.FC<LandlordFormProps> = ({ data = {} }) => {
  return (
    <>
      <h1 className="text-xl mb-4">Booking form</h1>
      <div className="mt-8 max-w-md">
        <PcLandlordForm />
      </div>
    </>
  );
};

export default PcLandlordFormTemplate;
