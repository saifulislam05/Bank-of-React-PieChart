
import React, { useState } from "react";
import Ranges from "./Ranges";
import TenureSelect from "./TenureSelect";


const Body = () => {
 const [data, setData] = useState({
   homeValue: 3000,
   downPayment: 3000 * 0.2,
   loanAmount: 3000 * 0.8,
   loanTerm: 5,
   interestRate: 5,
 });
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-center px-5 py-2 lg:px-auto lg:pt-12">
      <div className="w-full md:w-5/12">
        <Ranges data={data} setData={setData} />
        <TenureSelect data={data} setData={setData} />
      </div>
    </div>
  );
};

export default Body;
