import React from "react";

const TenureSelect = ({ data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, loanTerm: Number(e.target.value) });
  };
  return (
    <div className="w-full">
      <p className="text-sm w-fit mb-2">Tenure</p>
      <select
        className="w-full  select select-bordered"
        id="loanTerm"
        onChange={handleChange}
        defaultValue={5}
        value={data.loanTerm}
      >
        <option value={5} selected>
          5 years
        </option>
        <option value={10}>10 years</option>
        <option value={15}>15 years</option>
        <option value={20}>20 years</option>
        <option value={25}>25 years</option>
      </select>
    </div>
  );
};

export default TenureSelect;
