import React, { useState } from "react";
import { useMutation } from "react-query";
import PcLandlordForm from "@/components/molecules/LandlordForm/PcLandlordForm";
import { postLandlord } from "@/adapters/landlord";
import Link from "next/link";

const PcLandlordFormTemplate: React.FC = () => {
  const [isSuccess, setSuccessStatus] = useState(false);
  const mutation = useMutation(postLandlord, {
    onError: (error, variables, context) => {
      console.log(error, variables, context);
    },
    onSuccess: (data, variables, context) => {
      setSuccessStatus(true);
      console.log(data, variables, context);
    },
  });

  if (isSuccess) {
    return (
      <p>
        Save success.{" "}
        <Link href="/landlord" className="underline">
          Back to list
        </Link>
      </p>
    );
  }

  const submitLandlord = (data: LandlordItem) => {
    // TODO validation
    mutation.mutate(data);
  };

  return (
    <>
      <h1 className="text-xl mb-4">Booking form</h1>
      <Link href="/landlord" className="underline">
        Back to list
      </Link>
      <div className="mt-8 max-w-md">
        <PcLandlordForm onSubmit={submitLandlord} />
      </div>
    </>
  );
};

export default PcLandlordFormTemplate;
