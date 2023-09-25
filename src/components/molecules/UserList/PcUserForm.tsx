import React, { useState } from "react";
import FormInput from "@/components/atoms/FormInput/FormInput";
import FormText from "@/components/atoms/FormText/FormText";
import Button from "@/components/atoms/Button/Button";

type UserFormProps = {
  data?: UserInfo | UserItem;
  onSubmit?: (...args: any) => void;
};

const PcUserForm: React.FC<UserFormProps> = ({
  data = {},
  onSubmit = () => {},
}) => {
  const defaultData = {
    ...{
      name: "",
      mobile: "",
      email: "",
      note: "",
    },
    ...data,
  };
  const [name, setName] = useState(defaultData.name);
  const [mobile, setMobile] = useState(defaultData.mobile);
  const [email, setEmail] = useState(defaultData.email);
  const [note, setNotes] = useState(defaultData.note);

  const submitHandler = () => {
    onSubmit({ name, mobile, email, note });
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
            name="note"
            defaultValue={defaultData.note}
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

export default PcUserForm;
