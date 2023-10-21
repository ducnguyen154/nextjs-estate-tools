import React, { useState } from "react";
import Link from "next/link";
import { useMutation } from "react-query";
import { postProperty } from "@/adapters/property";
import PcPropertyForm from "@/components/molecules/PropertyForm/PcPropertyForm";

type Props = {
  landlordOptions: OptionType[];
};

const PcInsertPropertyTemplate: React.FC<Props> = ({ landlordOptions }) => {
  const [isSuccess, setSuccessStatus] = useState(false);
  const mutation = useMutation(postProperty, {
    onError: (error, variables, context) => {
      console.log(error, variables, context);
      setSuccessStatus(false);
    },
    onSuccess: (data, variables, context) => {
      console.log(data, variables, context);
      setSuccessStatus(true);
    },
  });

  if (isSuccess) {
    return (
      <p>
        Save success.{" "}
        <Link href="/property" className="underline">
          Back to list
        </Link>
      </p>
    );
  }

  const submitHandler = (data: PropertyInfo) => {
    console.log(data);
    mutation.mutate(data);
  };
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl mb-4">Insert Property</h1>
      <Link href="/property" className="underline">
        Back to list
      </Link>
      <PcPropertyForm landlords={landlordOptions} onSubmit={submitHandler} />
    </div>
  );
};

export default PcInsertPropertyTemplate;
