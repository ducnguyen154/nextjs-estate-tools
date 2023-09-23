import React, { useState } from "react";

import FormInput from "@/components/atoms/FormInput/FormInput";
import FormSelect from "@/components/atoms/FormSelect/FormSelect";
import FormText from "@/components/atoms/FormText/FormText";
type optionType = {
  value: string | number;
  text: string;
};

type rentDataType = {
  id?: number;
  userId: string;
  propertyId: string;
  price?: number;
  description?: string;
  startDate: string;
  endDate?: string;
};

type PcPropertyRentFormProps = {
  data?: rentDataType;
  properties: optionType[];
  users: optionType[];
  onSubmit?: (...args: any[]) => void;
};

const PcPropertyRentForm: React.FC<PcPropertyRentFormProps> = ({
  data = {},
  properties = [],
  users = [],
  onSubmit = () => {},
}) => {
  const dataValues = {
    ...{
      startDate: "",
      endDate: "",
      userId: "",
      propertyId: "",
      price: 0,
      description: "",
    },
    ...data,
  };

  const [startDate, setStartDate] = useState(dataValues.startDate);
  const [endDate, setEndDate] = useState(dataValues.endDate);
  const [userId, setUserId] = useState(dataValues.userId);
  const [propertyId, setPropertyId] = useState(dataValues.propertyId);
  const [price, setPrice] = useState(dataValues.price);
  const [description, setDescription] = useState(dataValues.description);

  const submitHandler = () => {
    const changedData = {
      startDate,
      endDate,
      userId,
      propertyId,
      price,
      description,
    };

    // submit to parents
    onSubmit(changedData);
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      <label className="block">
        <span className="text-gray-700">Start date</span>
        <FormInput
          type="date"
          name="startDate"
          defaultValue={dataValues.startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </label>
      <label className="block">
        <span className="text-gray-700">End date</span>
        <FormInput
          type="date"
          name="endDate"
          defaultValue={dataValues.endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Property</span>
        <FormSelect
          options={properties}
          defaultValue={dataValues.propertyId}
          name="propertyId"
          isBlankFirst={true}
          onChange={(event) => setPropertyId(event.target.value)}
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Renter</span>
        <FormSelect
          options={users}
          name="userId"
          defaultValue={dataValues.userId}
          isBlankFirst={true}
          onChange={(event) => setUserId(event.target.value)}
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Price</span>
        <FormInput
          type="number"
          name="price"
          defaultValue={dataValues.price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Description</span>
        <FormText
          name="description"
          placeholder="Description"
          defaultValue={dataValues.description}
          onChange={(event) => setDescription(event.target.value)}
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
  );
};

export default PcPropertyRentForm;
