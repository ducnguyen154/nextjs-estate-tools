import Button from "@/components/atoms/Button/Button";
import FormInput from "@/components/atoms/FormInput/FormInput";
import FormSelect from "@/components/atoms/FormSelect/FormSelect";
import FormText from "@/components/atoms/FormText/FormText";
import React, { useState } from "react";

type Props = {
  property?: PropertyItem;
  landlords: OptionType[];
  onSubmit?: (...args: any) => void;
};

const PcPropertyForm: React.FC<Props> = ({
  property = {},
  landlords,
  onSubmit = () => {},
}) => {
  const defaultData = {
    ...{
      title: "",
      address: "",
      description: "",
      landlordId: 0,
    },
    ...property,
  };
  const [title, setTitle] = useState(defaultData.title);
  const [address, setAddress] = useState(defaultData.address);
  const [description, setDescription] = useState(defaultData.description);
  const [landlordId, setLandlordId] = useState(defaultData.landlordId);

  const submitHandler = () => {
    onSubmit({
      title,
      address,
      description,
      landlordId,
    });
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        <label className="block">
          <span className="text-gray-700">Title</span>
          <FormInput
            type="text"
            name="title"
            defaultValue={defaultData.title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Address</span>
          <FormInput
            type="text"
            name="address"
            defaultValue={defaultData.address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Landlord</span>
          <FormSelect
            name="landlordId"
            options={landlords}
            defaultValue={defaultData.landlordId}
            onChange={(event) => setLandlordId(parseInt(event.target.value))}
            isBlankFirst
            blankText="Choose a Landlord"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Description</span>
          <FormText
            name="description"
            defaultValue={defaultData.description}
            onChange={(event) => setDescription(event.target.value)}
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
export default PcPropertyForm;
