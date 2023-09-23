import { putLandlord } from "@/adapters/landlord";
import PcLandlordForm from "@/components/molecules/LandlordForm/PcLandlordForm";
import Link from "next/link";
import React, { useState } from "react";
import { useMutation } from "react-query";

type Props = {
  id: number;
  landlord: LandlordItem;
};

const PcEditLandlordTemplate: React.FC<Props> = ({ id, landlord }) => {
  const [isSuccess, setSuccessStatus] = useState(false);
  const mutation = useMutation(putLandlord, {
    onError: (error, variables, context) => {
      console.log(error, variables, context);
    },
    onSuccess: (data, variables, context) => {
      console.log(data, variables, context);
      setSuccessStatus(true);
    },
  });

  if (isSuccess)
    return (
      <p>
        Save success.{" "}
        <Link href="/landlord" className="underline">
          Back to list
        </Link>
      </p>
    );

  const submitHandler = (data: LandlordItem) => {
    mutation.mutate({ id, landlord: data });
  };

  return (
    <>
      <h1 className="text-xl mb-4">Booking form</h1>
      <Link href="/landlord" className="underline">
        Back to list
      </Link>
      <div className="mt-8 max-w-md">
        <PcLandlordForm data={landlord} onSubmit={submitHandler} />
      </div>
    </>
  );
};

export default PcEditLandlordTemplate;
