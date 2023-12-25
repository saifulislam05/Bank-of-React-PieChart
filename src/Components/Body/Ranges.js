import RangeInput from "./RangeInput";

const Ranges = ({ data, setData }) => {
  return (
    <div className="w-full flex flex-col gap-6 py-4">
      <RangeInput
        onChange={(e) => {
          const value = Number(e.target.value);

          setData({
            ...data,
            homeValue: value.toFixed(0),
            downPayment: (0.2 * value).toFixed(0),
            loanAmount: (0.8 * value).toFixed(0),
          });
        }}
        value={data.homeValue}
        min={1000}
        max={10000}
        step={1000}
        label={"Home Value"}
        id="homeValue"
        type="money"
      />
      <RangeInput
        onChange={(e) => {
          const value = Number(e.target.value);

          setData({
            ...data,
            downPayment: value.toFixed(0),
            loanAmount: (data.homeValue - value).toFixed(0),
          });
        }}
        value={data.downPayment}
        min={0}
        max={data.homeValue}
        step={100}
        label={"Down Payment"}
        id="downPayment"
        type="money"
      />
      <RangeInput
        onChange={(e) => {
          const value = Number(e.target.value);

          setData({
            ...data,
            loanAmount: value.toFixed(0),
            downPayment: (data.homeValue - value).toFixed(0),
          });
        }}
        value={data.loanAmount}
        min={0}
        max={data.homeValue}
        step={100}
        label={"Loan Amount"}
        id="downPayment"
        type="money"
      />
      <RangeInput
        onChange={(e) => {
          const value = Number(e.target.value);

          setData({
            ...data,
            interestRate: value.toFixed(0),
          });
        }}
        value={data.interestRate}
        min={2}
        max={18}
        step={0.5}
        label={"Interest Rate"}
        id={"interestRate"}
        type="percent"
      />
    </div>
  );
};
export default Ranges;
