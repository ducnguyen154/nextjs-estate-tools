const PcPropertyRentForm = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <label className="block">
        <span className="text-gray-700">Start date</span>
        <input
          type="date"
          className="form-date mt-1 block w-full rounded-md border-gray-300"
          placeholder=""
          name="startDate"
        />
      </label>
      <label className="block">
        <span className="text-gray-700">End date</span>
        <input
          type="date"
          className="form-date mt-1 block w-full rounded-md border-gray-300"
          placeholder=""
          name="endDate"
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Property</span>
        <select
          className="form-select block w-full mt-1 rounded-md border-gray-300"
          name="property"
        >
          <option>Corporate event</option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Other</option>
        </select>
      </label>
      <label className="block">
        <span className="text-gray-700">Rentor</span>
        <select
          className="form-select block w-full mt-1 rounded-md border-gray-300"
          name="userId"
        >
          <option>Corporate event</option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Other</option>
        </select>
      </label>
      <label className="block">
        <span className="text-gray-700">Price</span>
        <input
          type="number"
          className="form-text mt-1 w-full block rounded-md border-gray-300"
        />
      </label>
      <div className="block">
        <button className="mt-1 block px-5 py-2 rounded-md border-gray-300 bg-sky-700 hover:bg-sky-600 active:bg-sky-700 text-white shadow-md">
          Save
        </button>
      </div>
    </div>
  );
};

export default PcPropertyRentForm;
