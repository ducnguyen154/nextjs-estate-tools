import { postUser, putUser } from "@/adapters/user";
import PcUserForm from "@/components/molecules/UserList/PcUserForm";
import Link from "next/link";
import React, { useState } from "react";
import { useMutation } from "react-query";

const PcEditUserTemplate: React.FC = () => {
  const [isSuccess, setSuccessStatus] = useState(false);
  const mutation = useMutation(postUser, {
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
        <Link href="/user" className="underline">
          Back to list
        </Link>
      </p>
    );

  const submitHandler = (data: UserInfo) => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <>
      <h1 className="text-xl mb-4">Insert User</h1>
      <Link href="/user" className="underline">
        Back to list
      </Link>
      <div className="mt-8 max-w-md">
        <PcUserForm onSubmit={submitHandler} />
      </div>
    </>
  );
};

export default PcEditUserTemplate;
