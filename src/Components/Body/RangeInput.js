const RangeInput = ({ min, max, step, label, type, id, value, onChange }) => {
  return type === "money" ? (
    <div className="w-full">
      <div className="w-fit">
        <h2 className="mb-2 text-sm font-medium text-gray-500">{label}</h2>
        <p className="w-fit mb-2 text-lg font-bold">$ {value}</p>
      </div>
      <div className="w-full" data-tip={value}>
        <input
          onChange={onChange}
          type="range"
          min={min}
          max={max}
          step={step}
          className="mb-1 range range-primary range-xs"
          id={id}
          value={value}
        />
      </div>
      <div className="flex justify-between">
        <span className="text-xs text-zinc-600">$ {min}</span>
        <span className="text-xs text-zinc-600">$ {max}</span>
      </div>
    </div>
  ) : (
    <div className="w-full">
      <div className="w-fit">
        <h2 className="mb-2 text-sm font-medium text-gray-500">{label}</h2>
        <p className="w-fit mb-2 text-lg font-bold ">% {value}</p>
      </div>
      <div className="w-full " data-tip={value}>
        <input
          onChange={onChange}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          className="mb-1 range range-warning range-xs"
        />
      </div>
      <div className="flex justify-between">
        <span className="text-xs text-zinc-600">{min} %</span>
        <span className="text-xs text-zinc-600">{max} %</span>
      </div>
    </div>
  );
};

export default RangeInput;
