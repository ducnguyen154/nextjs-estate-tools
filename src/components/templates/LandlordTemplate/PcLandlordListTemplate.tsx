import React from "react";

import PcLandlordList from "@/components/molecules/LandlordForm/PcLandlordList";
import Link from "next/link";

type PcLandlordListProps = {
  landlords: LandlordItem[];
};

const PcLandlordListTemplate: React.FC<PcLandlordListProps> = ({
  landlords,
}) => {
  return (
    <>
      <h1 className="text-xl mb-4">Landlord List</h1>
      <Link href="/landlord/insert" className="underline">
        Insert Landlord
      </Link>
      <div className="mt-8 max-w-md">
        <PcLandlordList landlords={landlords} />
      </div>
    </>
  );
};

export default PcLandlordListTemplate;
