import React, { useState } from "react";
import FormInput from "@/components/atoms/FormInput/FormInput";
import FormText from "@/components/atoms/FormText/FormText";

type LandlordProp = {
  name?: string;
  mobile?: string;
  email?: string;
  notes?: string;
};

type LandlordFormProps = {
  data?: LandlordProp;
  onSubmit?: (...agrs: any[]) => void;
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
          <button
            className="mt-1 block px-5 py-2 rounded-md border-gray-300 bg-sky-700 hover:bg-sky-600 active:bg-sky-700 text-white shadow-md"
            onClick={submitHandler}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default PcLandlordForm;
