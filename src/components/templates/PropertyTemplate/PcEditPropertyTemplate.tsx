import React, { useState } from "react";
import Link from "next/link";
import { useMutation } from "react-query";
import { putProperty } from "@/adapters/property";
import PcPropertyForm from "@/components/molecules/PropertyForm/PcPropertyForm";

type Props = {
  property: PropertyItem;
  landlordOptions: OptionType[];
};

const PcEditPropertyTemplate: React.FC<Props> = ({
  property,
  landlordOptions,
}) => {
  const id = property.id;
  const [isSuccess, setSuccessStatus] = useState(false);
  const mutation = useMutation(putProperty, {
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
    mutation.mutate({ id, property: data });
  };
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl mb-4">Edit Property</h1>
      <Link href="/property/insert" className="underline">
        Back to list
      </Link>
      <PcPropertyForm
        property={property}
        landlords={landlordOptions}
        onSubmit={submitHandler}
      />
    </div>
  );
};

export default PcEditPropertyTemplate;
