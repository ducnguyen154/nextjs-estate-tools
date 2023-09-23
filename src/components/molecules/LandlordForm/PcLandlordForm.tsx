import React, { useState } from "react";
import FormInput from "@/components/atoms/FormInput/FormInput";
import FormText from "@/components/atoms/FormText/FormText";
import Button from "@/components/atoms/Button/Button";

type LandlordFormProps = {
  data?: LandlordItem;
  onSubmit?: (...args: any) => void;
};

const PcLandlordForm: React.FC<LandlordFormProps> = ({
  data = {},
  onSubmit = () => {},
}) => {
  const defaultData = {
    ...{
      name: "",
      mobile: "",
      email: "",
      notes: "",
    },
    ...data,
  };
  const [name, setName] = useState(defaultData.name);
  const [mobile, setMobile] = useState(defaultData.mobile);
  const [email, setEmail] = useState(defaultData.email);
  const [notes, setNotes] = useState(defaultData.notes);

  const submitHandler = () => {
    onSubmit({ name, mobile, email, notes });
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <label className="block">
          <span className="text-gray-700">Name</span>
          <FormInput
            type="text"
            name="name"
            defaultValue={defaultData.name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Mobile</span>
          <FormInput
            type="text"
            name="mobile"
            defaultValue={defaultData.mobile}
            onChange={(event) => setMobile(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Email</span>
          <FormInput
            type="text"
            name="email"
            defaultValue={defaultData.email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Notes</span>
          <FormText
            name="notes"
            defaultValue={defaultData.notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </label>
        <div className="block">
          <Button
            type="primary"
            text="Save"
            className="mt-1"
            onClick={submitHandler}
          />
        </div>
      </div>
    </>
  );
};

export default PcLandlordForm;
